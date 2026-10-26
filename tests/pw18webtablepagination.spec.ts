//page.locator(`td:has-text("taylor_lee")`)

import { test, expect, Locator, webkit } from "@playwright/test";

test("single pagination selection using while loop test ", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html",
  );

  let isUserNameDisplayed = await page
    .locator(`td:has-text("devon_cruz")`)
    .first()
    .isVisible();

  while (true) {
    if (isUserNameDisplayed) {
      // username is found on the 1st page.....
      await page
        .locator("table#dataTable tr")
        .filter({ hasText: "devon_cruz" })
        .first()
        .getByRole("checkbox")
        .check();
      break;
    } else {
      // username is not found on the 1st page.....so click on the '>' for pagination
      let nextEle = page.getByRole("button", { name: "›" });
      await nextEle.click();

      let isNextEleDisabled = await nextEle.isDisabled();
      if (isNextEleDisabled) {
        console.log("Pagination is over and username not found");
        break;
      }
    }
  }

  await page.pause();
});

test("Web table with pagination with multiple selection test ", async ({
  page,
}) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html",
  );

  while (true) {
    let allUserChecks = await page
      .locator("table#dataTable tr")
      .filter({ hasText: "john_doe" })
      .getByRole("checkbox")
      .all();

    if (allUserChecks.length > 0) {
      // select all the checkboxes
      for (let ele of allUserChecks) {
        await ele.click();
      }
    }

    // go to next page, search and click on the '>' for pagination
    let nextEle = page.getByRole("button", { name: "›" });

    let isNextEleDisabled = await nextEle.isDisabled();
    if (isNextEleDisabled) {
      console.log("Pagination is over and username not found");
      break;
    }

    await nextEle.click();
  }

  await page.pause();
});
