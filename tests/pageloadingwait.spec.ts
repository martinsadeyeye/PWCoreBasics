import {
  Browser,
  chromium,
  firefox,
  Page,
  test,
  webkit,
} from "@playwright/test";

test("page loading wait until test", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=common/home",

    
  );



});
