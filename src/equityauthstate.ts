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
    "https://oneequity-uat.equitygroupholdings.com/en/access/login",
  );

  await page.locator("//span[text()='Get started']").click();
  await page.locator("#country").click();
  await page.locator("//div[text()='Kenya']").click();
  await page.locator("#accountId").fill("TESTAUTOMATIONKE02@GMAIL.COM");
  await page.locator("#password").fill("Automation@2050");
  await page.locator("//span[text()='Sign in']").click();
  await page.waitForTimeout(5000);
  await expect(page).toHaveTitle("Equity online - More than just banking");
  await page.waitForTimeout(5000);
  await page
    .locator("span")
    .filter({ hasText: "By sms 25451*****23" })
    .locator("mat-icon")
    .click();
  await page.locator("//span[text()='Next']").click();
  await page
    .locator("//input[@data-testid='verify-otp-input-digits-0']")
    .click();
  await page
    .locator("//input[@data-testid='verify-otp-input-digits-0']")
    .fill("1");
  await page
    .locator("//input[@data-testid='verify-otp-input-digits-1']")
    .click();
  await page
    .locator("//input[@data-testid='verify-otp-input-digits-1']")
    .fill("2");
  await page
    .locator("//input[@data-testid='verify-otp-input-digits-2']")
    .click();
  await page
    .locator("//input[@data-testid='verify-otp-input-digits-2']")
    .fill("3");
  await page
    .locator("//input[@data-testid='verify-otp-input-digits-3']")
    .click();
  await page
    .locator("//input[@data-testid='verify-otp-input-digits-3']")
    .fill("4");
  await page
    .locator("//input[@data-testid='verify-otp-input-digits-4']")
    .click();
  await page
    .locator("//input[@data-testid='verify-otp-input-digits-4']")
    .fill("5");
  await page
    .locator("//input[@data-testid='verify-otp-input-digits-5']")
    .click();
  await page
    .locator("//input[@data-testid='verify-otp-input-digits-5']")
    .fill("6");
  await page.locator("//span[text()='Verify']").click();
  await page.waitForTimeout(5000);
  //await page.goto( "https://oneequity-uat.equitygroupholdings.com/en/access/activateDevice/verifyMenu",);
  await page
    .getByText("Answer your security questions radio_button_unchecked")
    .click();
  await page.locator("//span[text()='Continue']").click();
  await page.locator("#mat-input-4").click();
  await page.locator("#mat-input-4").fill("food");
  await page.locator("#mat-input-6").click();
  await page.locator("#mat-input-6").fill("school");
  await page.locator("//span[text()='Confirm']").click();

  await page
    .locator(
      '//mat-icon[@color="primary" and @data-mat-icon-type="font" and normalize-space(text())="radio_button_unchecked"]',
    )
    .nth(0)
    .click();
  await page.locator("//span[text()='Remove devices']").click();

  await page.locator("//span[contains(text(),'explore later')]").click();

  await context.storageState({ path: "equitywebstate.json" });

  //https://oneequity-uat.equitygroupholdings.com/en/home
  //https://oneequity-uat.equitygroupholdings.com/en/transfer
})();
