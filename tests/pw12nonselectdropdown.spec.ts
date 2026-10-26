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

test("non select based drop down test", async ({ page }) => {
  await page.goto("https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/");

  await page.waitForLoadState("load");

  await page.locator("#justAnInputBox").click();
  await page.waitForLoadState("load");

  // await page
  //     .locator('span.comboTreeItemTitle')
  //     .filter({ hasText: 'choice 6 2 3' })
  //     .first()
  //     .click();

  await selectChoice(page, [
    "choice 5",
    "choice 4",
    "choice 6 2 2",
    "choice 7",
  ]);

  await page.pause();
});

async function selectChoice(page: Page, choices: string[]): Promise<void> {
  for (let ch of choices) {
    await page
      .locator("span.comboTreeItemTitle")
      .filter({ hasText: `${ch}` })
      .first()
      .click();
  }
}

test("google search test", async ({ page }) => {
  await page.goto("https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/");
});
//locator('p:has-text("Delivery Information")')
