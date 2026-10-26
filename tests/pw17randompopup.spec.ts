import { test, expect, Locator, webkit } from "@playwright/test";

test("kill random popups test", async ({ page }) => {
  await page.addLocatorHandler(
    page.getByRole("button", { name: "Allow all" }),
    async (allowAllBtn) => {
      await allowAllBtn.click();
      console.log("Cookie Banner is killed....");
    },
  );

  await page.goto("https://orangehrm.com/contact-sales");

  await page.getByRole("textbox", { name: "Full Name" }).fill("Naveen");

  await page.pause();
});

test("Accept all popups test", async ({ page }) => {
  await page.addLocatorHandler(
    page.getByRole("button", { name: "Accept All" }),
    async (allowAllBtn) => {
      await allowAllBtn.click();
      console.log("Accept popup is clicked....");
    },
  );

  await page.goto("https://cricinfo.com/live-cricket-score");

  await page.getByRole("link", { name: "Series" }).click();

  await page.pause();
});
