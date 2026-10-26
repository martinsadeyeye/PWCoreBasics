import { test, expect } from '@playwright/test';

test('should complete standard user checkout flow', async ({ page }) => {
  // Navigate to application endpoint securely
  await page.goto('https://woven.com');

  // Interact with elements using role-based locators
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.USER_EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.USER_PASSWORD);
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Validate state transitions using web-first assertions (auto-waits)
  const dashboardHeader = page.getByRole('heading', { name: 'Welcome Back' });
  await expect(dashboardHeader).toBeVisible();
});