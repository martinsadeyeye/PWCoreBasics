import {
  Browser,
  chromium,
  firefox,
  Page,
  test,
  webkit,
} from "@playwright/test";

test.use({ storageState: "./src/saucedemostate.json" });

test("launch cart page test without login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory-item.html?id=4");
  
  await page.goto("https://www.saucedemo.com/cart.html");

  await page.goto("https://www.saucedemo.com/checkout-step-one.html");

  await page.pause();
});
