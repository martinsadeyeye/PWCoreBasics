import { test, expect, Locator, selectors } from "@playwright/test";

test("eguity user login test", async ({ page }) => {
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

  //page.locator(".country-list-item").filter({ hasText: "Kenya" });
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

  //TESTAUTOMATIONUG02@GMAIL.COM

  await page
    .getByRole("textbox", { name: "Email address or mobile number" })
    .fill("TESTAUTOMATIONUG02@GMAIL.COM");
  await page
    .getByRole("textbox", { name: "Enter password" })
    .fill("Automation@2050");
  await page.getByRole("button", { name: "Sign in" }).click();

  // await page
  //   .getByTestId("choose-otp-method-mat-list-method-Sms")
  //   .first()
  //   .click();

  await page
    .getByTestId("choose-otp-method-mat-list-method-Sms")
    .nth(0)
    .click();

  await page.getByRole("button", { name: "Next" }).click();

  await page.getByTestId("verify-otp-input-digits-0").fill("1");

  await page.getByTestId("verify-otp-input-digits-1").fill("2");

  await page.getByTestId("verify-otp-input-digits-2").fill("3");

  await page.getByTestId("verify-otp-input-digits-3").fill("4");

  await page.getByTestId("verify-otp-input-digits-4").fill("5");

  await page.getByTestId("verify-otp-input-digits-5").fill("6");

  await page.getByRole("button", { name: "Verify" }).click();

  await page.getByTestId("verify-menu-ripple-Questions").click();

  await page.getByRole("button", { name: "Continue" }).click();

  await page.locator("#mat-input-4").fill("food");

  //page.locator('#mat-input-4')

  await page.locator("#mat-input-6").fill("nickname");

  await page.getByRole("button", { name: "Confirm" }).click();

  let newDeviceSignInText = await page
    .getByRole("heading", {
      name: "New device sign-in",
      level: 3,
    })
    .innerText();
  console.log(newDeviceSignInText);

  await expect(newDeviceSignInText, "New device sign-in");

  await page.waitForLoadState("load");

  let displayedDevice = page.locator(
    ".modal-content app-activated-device-item",
  );
  await displayedDevice.first().waitFor({ state: "visible", timeout: 10000 });

  let deviceCount = (await displayedDevice.count()) - 1;
  console.log("total device:", deviceCount);

  for (let i = 0; i < deviceCount; i++) {
    let ele = displayedDevice.nth(i);

    console.log(`Clicking link ${i + 1}/${deviceCount}`);
    await page.waitForLoadState("load");
    await ele.click();
  }

  await page.getByRole("button", { name: "Remove devices" }).click();
});
