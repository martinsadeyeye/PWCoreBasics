import { test, expect, BrowserContext, Page } from "@playwright/test";

test("multi user test", async ({ browser }) => {
  let ctx1: BrowserContext = await browser.newContext();
  let ctx2: BrowserContext = await browser.newContext();

  let page1: Page = await ctx1.newPage();
  let page2: Page = await ctx2.newPage();

  await page1.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );
  await page1.locator("#input-email").fill("manish.wilson561@test.com");
  await page1.locator("#input-password").fill("pw123");
  await page1.locator('//input[@value="Login"]').click();

  await page2.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );
  await page2.locator("#input-email").fill("sasmita.brown419@test.com");
  await page2.locator("#input-password").fill("pw123");
  await page2.locator('//input[@value="Login"]').click();
});
