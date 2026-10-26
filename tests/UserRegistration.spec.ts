import { test, expect, Locator } from "@playwright/test";

test("User Registration Form Test", async ({ page }) => {
  await page.goto(
    "https://www.shapemyinterview.com/study/playwright-locator-playground.html?v=2026-07-26",
  );

  let pageHeader = page.getByRole("heading", {
    name: "A single page to sharpen",
  });

  await expect(pageHeader).toHaveText(
    "A single page to sharpen every Playwright locator you'll ever write.",
  );

  await page.getByRole("textbox", { name: "First Name" }).fill("Femi");
  await page.getByRole("textbox", { name: "Last Name" }).fill("Martins");
  await page
    .getByRole("textbox", { name: "Email Address" })
    .fill("adeyeye079@gmail.com");
  await page
    .getByRole("textbox", { name: "password" })
    .first()
    .fill("testing@129");
  await page.getByRole("textbox", { name: "phone" }).fill("+2348037609808");
  await page
    .getByRole("textbox", { name: "website" })
    .fill("https://www.shapemyinterview.com/");
  await page.getByRole("spinbutton", { name: "Age" }).fill("20");
  await page
    .getByRole("spinbutton", { name: "Expected Salary (per annum)" })
    .fill("30000");
  await page.getByLabel("Date of Birth", { exact: true }).fill("2026-07-28");
  await page
    .getByLabel("Preferred Meeting Time", { exact: true })
    .fill("16:05");
  await page
    .getByRole("textbox", { name: "Schedule Interview" })
    .fill("2026-07-29T16:06");
  await page.getByRole("textbox", { name: "Birth Month" }).fill("2026-06");
  await page.getByRole("textbox", { name: "Work Week" }).fill("2026-W31");
  await page.getByLabel("Favorite Color", { exact: true }).hideHighlight();
  await page.getByLabel("Years of Experience: 5", { exact: true }).click();
  await page
    .getByLabel("Search", { exact: true })
    .fill("Searching Knowledge Base...");
  await page
    .getByRole("textbox", { name: "Short Bio (textarea)" })
    .fill("I'm a QA Engineer");

  let userIdReadOnly = page.getByLabel("User ID (readonly)", { exact: true });
  await expect(userIdReadOnly).not.toBeEditable();
  await expect(userIdReadOnly).toHaveValue("NAL-2026-00184");

  let accountStatus = page.getByRole("textbox", {
    name: "Account Status (disabled)",
  });
  await expect(accountStatus).toBeDisabled();
  await expect(accountStatus).not.toBeEditable();
  await expect(accountStatus).toHaveValue("Suspended");

  let autoFilledText = page.getByRole("textbox", {
    name: "Auto-filled (with default value)",
  });
  await expect(autoFilledText).toHaveValue("Bengaluru, India");

  await page.getByRole("button", { name: "Save Changes" }).click();
  await page.getByRole("button", { name: "Cancel" }).click();
  await page.getByRole("button", { name: "Approve Request" }).click();
  await page.getByRole("button", { name: "Delete Account" }).click();
  await page.getByRole("button", { name: "Archive" }).click();
  await page.getByRole("button", { name: "Learn more" }).click();

  await page.getByRole("button", { name: "Submit Form" }).click();
  await page.getByRole("button", { name: "Reset Form" }).click();

  let disabledButton = page.getByRole("button", { name: "Disabled Button" });
  await expect(disabledButton).toBeDisabled();

  await page.getByRole("button", { name: "Loading…" }).click();
  await page.getByRole("button", { name: "Input as Submit" }).click();
  await page.getByRole("button", { name: "Input as Button" }).click();

  await page.getByLabel("Edit user profile", { exact: true }).click();
  await page.getByLabel("Delete selected row", { exact: true }).click();
  await page.getByLabel("Refresh data", { exact: true }).click();
  await page.getByLabel("Copy to clipboard", { exact: true }).click();

  // Radio Button
  await page.getByRole("radio", { name: "Java" }).click();
  await page.getByLabel("C#", { exact: true }).click();
  let rubyRadio = page.getByRole("radio", { name: "Ruby (disabled)" });
  await expect(rubyRadio).toBeDisabled();

  // Checkbox
  let isPlaywrightChecked = page.getByRole("checkbox", { name: "Playwright" });
  await expect(isPlaywrightChecked).toBeChecked();

  await page.getByRole("checkbox", { name: "Cypress" }).click();

  let restAssuredCheckbox = page.getByRole("checkbox", {
    name: "RestAssured (disabled)",
  });
  await expect(restAssuredCheckbox).toBeDisabled();

  await page.getByRole("radio", { name: "Prefer not to say" }).click();

  // Term & Preference
  let agreeAndPreference = page.getByRole("checkbox", {
    name: "I agree to the Terms & Conditions",
    exact: true,
  });
  await expect(agreeAndPreference).not.toBeChecked();
  await agreeAndPreference.click();

  // Dropdowns & select
  let ddCountry = page.getByRole("combobox", { name: "Country" });
  await ddCountry.selectOption({ label: "Canada" });

  let ddAutomationTool = page.getByRole("combobox", {
    name: "Automation Tool",
  });
  await ddAutomationTool.selectOption({ label: "Appium" });

  //Multi Select Roles
  let multiSelectField = page.getByRole("listbox", {
    name: "Hold Ctrl/Cmd to select multiple",
  });
  await multiSelectField.selectOption([
    { label: "SDET" },
    { label: "QA Engineer" },
  ]);

  //Heading and semantic texts
  let allHeadingLevelText = page.getByRole("heading", {
    name: "All heading levels (H1–H6)",
    level: 3,
  });
  await expect(allHeadingLevelText).toHaveText("All heading levels (H1–H6)");

  let h2headingText = page.getByRole("heading", {
    name: "Heading Level 2",
    level: 2,
  });
  await expect(h2headingText).toHaveText("Heading Level 2");

  let h5HeadingText = page.getByText("Heading Level 5");
  await expect(h5HeadingText).toHaveText("Heading Level 5");

  await page.getByAltText("Playwright logo placeholder").hideHighlight();
});

