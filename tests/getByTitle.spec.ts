import { test, expect, Locator, selectors } from "@playwright/test";

test("data test id kind test ", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/ui/data-testid-page.html",
  );

  await page.getByTestId("username-input").fill("mmmmm@gmail.com");
  await page.getByTestId("email-input").fill("nnnnn@gmail.com");

  // by default Pw uses data-test-id="EMAIL"
  selectors.setTestIdAttribute("Id");
  await page.goto(
    "https://app.hubspot.com/signup-hubspot/crm?step=landing_page",
  );
  await page.getByTestId("FormControl1").fill("hhhh@gmail.com");
});
