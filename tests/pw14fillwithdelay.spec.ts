import { test, expect, Locator, selectors } from "@playwright/test";

test("Iframe element test", async ({ page }) => {
  await page.goto(
    "https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/",
  );
  await page.getByTitle("Vehicle-Registration-Forms-and-Examples").click();

  //Iframe DOM will be loaded....
  let iFrameLocator = page.frameLocator("#frame-one748593425"); //capture the iframe
  await iFrameLocator
    .getByRole("textbox", { name: "Proposal title" })
    .fill("Automation Testing");
  await iFrameLocator.getByRole("textbox", { name: "Location" }).fill("Delhi");

  let header = await page
    .getByRole("heading", { name: "Vehicle Registration Form", level: 3 })
    .innerText();
  console.log(header);

  await page.pause();
});

test("eLogin with delay in char test", async ({ page }) => {
  await page.goto(
    "https://oneequity-uat.equitygroupholdings.com/en/access/onboarding",
  );

  await page.getByRole("button", { name: "Get started" }).click();
  //await page.getByRole("button", { name: "Skip" }).click();
  let pageHeader = await page
    .getByRole("heading", { name: "Sign in", level: 3 })
    .textContent();
  await expect(pageHeader, "Sign in");

  await page.getByRole("textbox", { name: "Country" }).click();

  let country: Locator[] = await page
    .locator(".country-list-item")
    .locator(".text-truncate")
    .all();

  for (let countryList of country) {
    let countryText = await countryList.innerText();
    console.log("Country available: ", countryText);
    if (countryText === "Uganda") {
      countryList.click();
      break;
    }
  }

  await page
    .getByRole("textbox", { name: "Email address or mobile number" })
    .pressSequentially("TESTAUTOMATIONUG02@GMAIL.COM", { delay: 500 });
  await page
    .getByRole("textbox", { name: "Enter password" })
    .pressSequentially("Automation@2050", { delay: 500 });
});
