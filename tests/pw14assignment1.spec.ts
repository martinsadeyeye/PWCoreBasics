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
test("Rediff mail JS Alerts Pop up Handle test", async ({ page }) => {
  //1. Alert - just accept it.....
  page.on("dialog", async (popup) => {
    if (popup.type() === "alert") {
      console.log(popup.message());
      await popup.accept();
    }
  });

  await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");
  await page.getByRole("button", { name: "Log In" }).click();

  await page.locator("input.email-input").fill("martins");
  await page.getByRole("button", { name: "Log In" }).click();
});
