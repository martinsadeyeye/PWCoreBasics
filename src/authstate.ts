import {
  Browser,
  BrowserContext,
  chromium,
  Page,
  expect,
} from "playwright/test";

(async () => {
  const browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );

  await page.locator("#input-email").fill("adeyeye079@gmail.com");
  await page.locator("#input-password").fill("testing@123");
  await page.locator("input[value='Login']").click();

  await expect(page).toHaveTitle("My Account");

  await context.storageState({ path: "opencartstate.json" });
})();
