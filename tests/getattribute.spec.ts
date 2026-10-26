import { Browser, BrowserContext, Page, chromium, expect, selectors, test, webkit } from '@playwright/test';

test('get the attribute of any element test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let placeholderVal = await page.getByRole('textbox', { name: 'First Name' }).getAttribute('placeholder');
    console.log(placeholderVal);

    let hrefVal = await page.getByRole('link', { name: 'Forgotten Password' }).getAttribute('href');
    console.log(hrefVal);
});
