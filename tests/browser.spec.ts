import {
  Browser,
  chromium,
  firefox,
  Page,
  test,
  webkit,
} from "@playwright/test";

test(" title", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  let title = await page.title();
  console.log("Title is ", title);
  let appUrl = page.url();
  console.log("App URL is ", appUrl);

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});

test.skip("multiple browser test", async () => {
  //let browser: Browser = await chromium.launch({ headless: false });
  //let browser: Browser = await chromium.launch({headless: false, channel: "msedge"});
  // let browser: Browser = await chromium.launch({headless: false, channel: "msedge"});

  //let browser: Browser = await firefox.launch({ headless: false });

  //let browser: Browser = await webkit.launch({ headless: false });

  // let browser: Browser = await chromium.launch({
  //   headless: false,
  //   executablePath: "/Applications/Opera.app/Contents/MacOS/Opera",
  // });

  let browser: Browser = await chromium.launch({
    headless: false,
    executablePath:
      "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
  });

  let page: Page = await browser.newPage();
  await page.goto("https://google.com/");
  let title = await page.title();
  console.log("Title is ", title);
  let appUrl = page.url();
  console.log("App URL is ", appUrl);
});
