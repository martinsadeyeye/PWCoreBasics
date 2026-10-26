import { test, expect, Locator, selectors } from "@playwright/test";

test("pseudo element test", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );

  //window.getComputedStyle(document.querySelector('label[for="input-firstname"]'), '::before').getPropertyValue('content')

  // run JS code with playwright

  let content = await page.evaluate(() => {
    return window
      .getComputedStyle(
        document.querySelector('label[for="input-firstname"]')!,
        "::before",
      )
      .getPropertyValue("content");
  });
  console.log(content);

  let color = await page.evaluate(() => {
    return window
      .getComputedStyle(
        document.querySelector('label[for="input-firstname"]')!,
        "::before",
      )
      .getPropertyValue("color");
  });
  console.log(color);

  await page.pause();
});
