import {
  Browser,
  BrowserContext,
  Page,
  chromium,
  expect,
  selectors,
  test,
  webkit,
  Locator,
} from "@playwright/test";

test("get all the links test", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=common/home",
  );

  //total links
  //a href text
  // a[href] - css selector
  let allLinks: Locator[] = await page.locator("a[href]").all();
  console.log("total links:", allLinks.length);

  let totalLinks = await page.locator("a[href]").count();
  console.log("total links:", totalLinks);

  let linksCount = await page.getByRole("link").count();
  console.log("total links with Role:", linksCount);
});

test("fetch all the links text test", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=common/home",
  );

  //total links
  //a href text
  // a[href] - css selector
  let allLinks: Locator[] = await page.locator("a[href]").all();
  console.log("total links:", allLinks.length);

  for (let ele of allLinks) {
    let text = await ele.textContent();
    let href = await ele.getAttribute("href");

    console.log(text, ":", href);
  }
});

test("iterate links and click with break test", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );

  let allLinks: Locator[] = await page.locator("a.list-group-item").all();
  console.log("total links:", allLinks.length);

  for (let ele of allLinks) {
    await ele.hideHighlight();
    let linkText = await ele.textContent();
    console.log(linkText);
    if (linkText === "Recurring payments") {
      ele.click();
      break;
    }
  }
});
