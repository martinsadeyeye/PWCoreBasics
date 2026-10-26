import {
  Browser,
  chromium,
  firefox,
  Page,
  test,
  webkit,
} from "@playwright/test";

test.use({ storageState: "./src/opencartstate.json" });

test("launch cart page test without login", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart",
  );
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/account",
  );

  await page.pause();
});
