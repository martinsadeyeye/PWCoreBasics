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

test("Single Selection from dropdown test", async ({ page }) => {
  await page.goto("https://orangehrm.com/contact-sales");

  let ddCountry = page.getByRole("combobox", { name: "Country" });

  let selectVal: String[] = await ddCountry.selectOption("India"); // using direct drop down value
  console.log(selectVal);

  selectVal = await ddCountry.selectOption({ label: "Angola" }); // visible text
  console.log(selectVal);

  selectVal = await ddCountry.selectOption({ value: "Belgium" }); // using value attribute
  console.log(selectVal);

  selectVal = await ddCountry.selectOption({ index: 15 }); // using index
  console.log(selectVal);

  let currentValue = await ddCountry.inputValue();
  console.log("The current value is ", currentValue);
});

test("multi selection select drop down test", async ({ page }) => {
  await page.goto("https://selenium08.blogspot.com/2019/11/dropdown.html");

  let multiCountry = page.locator('[name="Month"]');
  let selectedMultiCountry = await multiCountry.selectOption([
    "January",
    "February",
    "October",
  ]);

  console.log(selectedMultiCountry);

  selectedMultiCountry = await multiCountry.selectOption([
    { label: "April" },
    { label: "May" },
  ]);

  console.log(selectedMultiCountry);

  selectedMultiCountry = await multiCountry.selectOption([
    { value: "Sept" },
    { value: "Aug" },
  ]);

  console.log(selectedMultiCountry);
});
