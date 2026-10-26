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
test("JS Alerts Pop up Handle test", async ({ page }) => {
  //1. Alert - just accept it.....
  page.on("dialog", async (popup) => {
    if (popup.type() === "alert") {
      console.log(popup.message());
      await popup.accept();
    }
  });

  //2. Confirm - just accept it.....
  page.on("dialog", async (popup) => {
    if (popup.type() === "confirm") {
      console.log(popup.message());
      await popup.accept();
    }
  });
  //3. Prompt -  accept it and enter value.....
  page.on("dialog", async (popup) => {
    if (popup.type() === "prompt") {
      console.log(popup.message());
      await popup.accept("Martins QA Engineer");
    }
  });

  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  await page.getByRole("button", { name: "Click for JS Alert" }).click();
  await page.getByRole("button", { name: "Click for JS Confirm" }).click();
  await page.getByRole("button", { name: "Click for JS Prompt" }).click();
});
