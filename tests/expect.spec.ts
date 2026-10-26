import {
  Browser,
  chromium,
  expect,
  firefox,
  Page,
  test,
  webkit,
} from "@playwright/test";

test("expect assertion test", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );

  expect(page.url()).toContain("account/register");

  let registerHeader = page.getByRole("heading", {
    name: "Register Account",
    level: 1,
  });
  await expect(registerHeader).toBeVisible();

  console.log("----------END---------");

  //Register Account
  await expect.soft(registerHeader).toHaveText("Register Account");

  await page.goto(
    "https://naveenautomationlabs.com/opencart/ui/data-testid-page.html",
  );

  await expect(
    page.locator('[data-testid="country-select"]').locator("option"),
  ).toHaveCount(6);

  await page.getByTestId("country-select").selectOption("India");
  await expect(page.getByTestId("country-select")).toHaveValue("in");
});

test("expect assertion for different element test", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/ui/elementstate.html",
  );

  await expect(
    page.getByRole("button", { name: "Create Account" }),
  ).toBeDisabled();

  await expect(page.getByRole("textbox", { name: "FIRST NAME" })).toBeEmpty();

  await expect(page.getByRole("textbox", { name: "EMAIL" })).toBeEmpty();

  await expect(
    page.getByRole("textbox", { name: "FIRST NAME" }),
  ).toBeEditable();

  await expect(page.getByRole("textbox", { name: "EMAIL" })).toBeEditable();

  await page
    .getByRole("checkbox", {
      name: "I AGREE TO THE TERMS OF SERVICE AND PRIVACY POLICY",
    })
    .check();
  await expect(
    page.getByRole("checkbox", {
      name: "I AGREE TO THE TERMS OF SERVICE AND PRIVACY POLICY",
    }),
  ).toBeChecked();

  await expect(
    page.getByRole("button", { name: "Create Account" }),
  ).toBeEnabled();

  await page
    .getByRole("checkbox", {
      name: "I AGREE TO THE TERMS OF SERVICE AND PRIVACY POLICY",
    })
    .uncheck();
  await expect(
    page.getByRole("button", { name: "Create Account" }),
  ).toBeDisabled();

  await expect(
    page.getByRole("textbox", { name: "FIRST NAME" }),
  ).toHaveAttribute("type", "text");

  await expect(
    page.getByRole("textbox", { name: "FIRST NAME" }),
  ).toHaveAttribute("placeholder", "Enter first name");

  await expect(
    page.getByRole("textbox", { name: "USERNAME (read-only, auto-generated)" }),
  ).toHaveAttribute("readonly");

  await expect(
    page.getByRole("textbox", { name: "USERNAME (read-only, auto-generated)" }),
  ).toHaveValue("user_2026");
});


test('expect time out test', async({page})=>{

  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');


});

//AAA pattern: Arrange Act Assert
//test case -> 1 hard assertion
//test case --> multiple soft assertions

//register page test: steps --- assertions:
//1. check the logo --tc1
//2. check the url --tc1
//3. check the title --tc1
//4. check the footer --tc1
//5. check the right panel links --tc1
//6. check the fn is visible --tc1


//Soft 