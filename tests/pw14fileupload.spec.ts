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
  FileChooser,
} from "@playwright/test";

test("single file upload test", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/ui/file-upload.html",
  );

  await page
    .locator("#single-file")
    .setInputFiles("/Users/martinsadeyeye/Downloads/POM_Design.png");

  await page.waitForTimeout(2000);

  await page.locator("#single-file").setInputFiles([]);

  await page.pause();
});

test("multiple file upload test", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/ui/file-upload.html",
  );

  await page
    .locator("#multi-file")
    .setInputFiles([
      "/Users/martinsadeyeye/Downloads/POM_Design.png",
      "/Users/martinsadeyeye/Downloads/javaint.png",
    ]);

  await page.waitForTimeout(2000);

  await page.locator("#multi-file").setInputFiles([]);
});

test("file upload when type is not file test", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/ui/file-upload.html",
  );

  let [fileUpload] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.locator("#custom-upload-btn").click(),
  ]);

  await fileUpload.setFiles([
    "/Users/martinsadeyeye/Downloads/POM_Design.png",
    "/Users/martinsadeyeye/Downloads/javaint.png",
  ]);

  await fileUpload.setFiles([]);

  await page.waitForTimeout(5000);
});
