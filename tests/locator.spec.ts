import { test, expect, Locator } from "@playwright/test";

test("locators test", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );

  let emailId: Locator = page.getByRole("textbox", { name: "E-mail Address" });

  await emailId.fill("naveen@pw.com");

  await page.getByRole("textbox", { name: "Password" }).fill("test@123");

  await page.getByRole("button", { name: "Login" }).click();
});
