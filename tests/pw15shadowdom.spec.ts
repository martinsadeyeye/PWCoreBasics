import { test, expect, Locator } from "@playwright/test";

test("shadow dom test", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/ui/shadow-dom.html",
  );

  //button in shadow-DOM
  await page.getByRole("button", { name: "Click Me" }).click();

  //input textbox in shadow DOM:
  await page.getByRole("textbox", { name: "Username" }).fill("Martins QA engr");

  await page.getByRole("button", { name: "Submit" }).click();

  //level 1 outer shadow and level 2 inner shadow
  await page.getByRole('textbox', { name: 'Type inside nested shadow...' }).fill('inside level 2 shadow DOM');
  
  //level 1 outer shadow and level 2 inner shadow and level 3 deepest
await page.getByRole('button', { name: 'Deep Click' }).click();

});
