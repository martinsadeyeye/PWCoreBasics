import { test, expect, Locator, selectors } from "@playwright/test";

test("mouse key-right click test", async ({ page }) => {
  await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

  page.on("dialog", async (popup) => {
    if (popup.type() === "alert") {
      console.log(popup.message());
      await popup.accept();
    }
  });

  await page
    .getByText("right click me", { exact: true })
    .click({ button: "right" });

  await page.getByText("Copy", { exact: true }).click();

  await page.pause();
});

test("drag and drop test", async ({ page }) => {
  await page.goto("https://jqueryui.com/droppable/");

  let frame = page.frameLocator(".demo-frame");

  let source = await frame.locator("#draggable");
  let target = await frame.locator("#droppable");

  await source.dragTo(target);

  await page.pause();
});

test("level 2 menu & sub menu handling test", async ({ page }) => {
  await page.goto("https://www.spicejet.com/");

  await page.getByText("Travel Policies", { exact: true }).hover();

  // wait for the sub menu element:
  await page
    .getByText("Passenger Rights", { exact: true })
    .waitFor({ state: "visible" });

  await page.getByText("Passenger Rights", { exact: true }).click();

  await page.pause();
});

test("level 4 menu & sub menu handling test", async ({ page }) => {
  await page.goto("https://www.bigbasket.com/");

  // wait for the sub menu element:
  await page.getByText("Shop by", { exact: true }).last().click(); //l1

  await page
    .locator('[id="headlessui-menu-items-:R15d956:"]')
    .getByRole("link", { name: "Beverages" })
    .waitFor({ state: "visible" });

  await page
    .locator('[id="headlessui-menu-items-:R15d956:"]')
    .getByRole("link", { name: "Beverages" }) //l2
    .hover();

  await page.getByRole("link", { name: "Nutrition Mix, Supplement" }).hover(); //l3

  await page.getByRole("link", { name: "Men & Women" }).click(); //l4

  await page.pause();
});

test("keyboard enter test", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );

  let searchBox = page.getByRole("textbox", { name: "Search" });
  await searchBox.fill("Macbook");

  await searchBox.press("Enter");

  await page.pause();
});

test("keyboard Tab Sequence Accessibility form submission test", async ({
  page,
}) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );

  let firstName = page.getByRole("textbox", { name: "* First Name" });
  await firstName.fill("Martins");

  await page.keyboard.press("Tab");
  await page.keyboard.type("Automation");

  await page.keyboard.press("Tab");
  await page.keyboard.type("martinsautomation@gmail.com");

  await page.keyboard.press("Tab");
  await page.keyboard.type("980898330");

  await page.keyboard.press("Tab");
  await page.keyboard.type("shahs@123");

  await page.keyboard.press("Tab");
  await page.keyboard.type("shahs@123");

  await page.keyboard.press("Tab");
  await page.keyboard.press("ArrowRight");

  await page.keyboard.press("Tab");

  await page.keyboard.press("Tab");
  await page.keyboard.press("Space"); //click on the checkbox

  await page.keyboard.press("Enter"); // Press enter to submit the form

  await page.pause();
});

test("keyboard copy paste test", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );

  let firstName = page.getByRole("textbox", { name: "* First Name" });
  await firstName.fill("Martins");

  //Control + A
  //Control + C
  //Control + V

  await firstName.press("ControlOrMeta+A");
  await firstName.press("ControlOrMeta+C");

  let lastName = page.getByRole("textbox", { name: "* Last Name" });
  await lastName.press("ControlOrMeta+V");

  await firstName.press("ControlOrMeta+A");
  await firstName.press("Backspace");

  //Hard Refresh the page : Control+Shift+R
  //await page.keyboard.press('ControlOrMeta+Shift+R');

  await page
    .getByRole("link", { name: "Forgotten Password" })
    .click({ modifiers: ["ControlOrMeta"] });

  await page.pause();
});


