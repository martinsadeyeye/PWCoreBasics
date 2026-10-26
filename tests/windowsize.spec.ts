import { test, expect } from "@playwright/test";

test.use({ viewport: { width: 440, height: 956 } });

test("window size test", async ({ page }) => {
  page.setViewportSize({ width: 440, height: 956 });

  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );

  expect(page.url()).toContain("account/register");
});

test("window size override  test", async ({ page }) => {
  page.setViewportSize({ width: 1000, height: 800 }); // this will override the config.ts and global config

  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );

  expect(page.url()).toContain("account/register");
});
