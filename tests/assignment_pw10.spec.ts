import {
  Browser,
  BrowserContext,
  Page,
  chromium,
  expect,
  selectors,
  test,
  webkit,
  Locator,
} from "@playwright/test";

test("fetch footer list and navigate back test", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );

  let footerLinks = page.locator("footer").getByRole("link");
  let linkCount = await footerLinks.count();
  console.log("total links:", linkCount);

  for (let i = 0; i < linkCount; i++) {
    let ele = page.locator("footer").getByRole("link").nth(i);

    let linkText = await ele.textContent();
    console.log(`Clicking link ${i + 1}/${linkCount}: ${linkText}`);

    await ele.click();
    await page.waitForLoadState("load");

    let pageTitle = await page.title();

    console.log("The Page Title: ", pageTitle);

    await page.goBack();

    await page.waitForLoadState("load");
  }
});

test("get all headers test", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );

  await page
    .getByRole("textbox", { name: "E-Mail Address" })
    .fill("robert.rodriguez614@test.com");
  await page.getByRole("textbox", { name: "Password" }).fill("pw123");
  await page.getByRole("button", { name: "Login" }).click();

  await page.waitForTimeout(2000);

  let allHeaders: string[] = await page
    .getByRole("heading", { level: 2 })
    .allInnerTexts();
  console.log("total headers: ", allHeaders.length);
  console.log(allHeaders);
});

test("select all radio button", async ({ page }) => {});
