import { test, expect, Locator, webkit, Page } from "@playwright/test";

test("two window handle test", async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();
  await page.goto("https://orangehm.com/contact-sales");

  let [childWindowPage] = await Promise.all([
    context.waitForEvent("page"), //start listening the page event in the browser
    page.getByRole("link", { name: "About Us" }).click(), //this will click on the link and generate a new page
  ]);

  await childWindowPage.waitForLoadState(); //child window is loaded properly

  let allPages = context.pages();
  console.log("total number of pages: ", allPages.length); //2

  await childWindowPage.bringToFront();
  console.log("the child window title: ", await childWindowPage.title());
  console.log(
    "the child window header: ",
    await childWindowPage
      .getByRole("heading", { name: "Our Leadership Team", level: 2 })
      .textContent(),
  );
  await childWindowPage.close(); //close the child window

  console.log("the parent window title: ", await page.title());

  await page.pause();
});

test("five window handle test", async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();
  await page.goto("https://orangehrm.com/contact-sales");

  // This hold the list of all the element you want to click
  let linkNames = [
    "About Us",
    "Contact Us",
    "Become a Partner",
    "Press Releases",
    "News Articles",
  ];
  let childPages = []; //an empty array that will collect the Page objects for each new tab as they open

  for (let name of linkNames) {
    let [childPage] = await Promise.all([
      context.waitForEvent("page"),
      page.getByRole("link", { name }).click(),
    ]);
    await childPage.waitForLoadState();
    childPages.push(childPage); // <-- adds this iteration's page to the array
    // push --Appends new elements to the end of an array, and returns the new length of the array.
  }

  console.log("total child pages: ", childPages.length); // 4
  console.log("total pages incl. parent: ", context.pages().length); // 5

  for (let e of childPages) {
    if (e === page) continue; // skip parent Tab/Page when closing the opened pages
    await e.bringToFront();
    console.log("child window title: ", await e.title());
    await e.close();
  }

  console.log("the parent window title: ", await page.title());
  await page.pause();
});

test("four window handle test", async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();
  await page.goto("https://orangehrm.com/contact-sales");

  // This hold the list of all the element you want to click
  let linkNames: Locator[] = [
    page.getByRole("link", { name: "About Us" }),
    page.getByRole("link", { name: "Contact Us" }),
    page.getByRole("link", { name: "Become a Partner" }),
    page.getByRole("link", { name: "Press Releases" }),
  ];
  let childPages: Page[] = []; //an empty array that will collect the Page objects for each new tab as they open

  for (let link of linkNames) {
    let [childPage] = await Promise.all([
      context.waitForEvent("page"),
      link.click(),
    ]);

    await childPage.waitForLoadState();
    childPages.push(childPage); // <-- adds this iteration's page to the array
    // push --Appends new elements to the end of an array, and returns the new length of the array.
  }

  console.log("total child pages: ", childPages.length); // 4
  console.log("total pages incl. parent: ", context.pages().length); // 5

  for (let e of childPages) {
    await e.bringToFront();
    console.log("child window title: ", await e.title());
    await e.close();
  }

  await page.bringToFront();
  console.log("the parent window title: ", await page.title());
});
