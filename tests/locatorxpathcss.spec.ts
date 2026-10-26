import { test, expect, Locator, selectors } from "@playwright/test";

test("xpath and css locator test", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );

  await page.locator("").fill("");


  
});
