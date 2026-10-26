import { expect, test } from "@playwright/test";

test.describe("Login related test cases", () => {
  test("Open Cart title test", async ({ page }) => {
    await page.goto(
      "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
    );
    console.log(await page.title());
  });

  test("Open Cart URL test", async ({ page }) => {
    await page.goto(
      "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
    );
    console.log(page.url());
  });

  test("Open Cart random test", async ({ page }) => {
    await page.goto(
      "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
    );
  });
});

test.describe("Test Describe with hook related test cases", () => {
  //test.describe.configure({ retries: 2 });

  test.beforeAll(async () => {
    console.log("Before All -- Connect to the DB");
  });

  // Runs before each test  in the test file
  test.beforeEach(async () => {
    console.log("Before Each -- login to the App");
  });

  // Runs after each tests in the test file
  test.afterEach(async () => {
    console.log("After Each -- logout to the App");
  });

  // Runs ONCE After all tests in the test file
  test.afterAll(async () => {
    console.log("After All -- disconnect to the DB");
  });

  test("google title test", async ({ page }) => {
    await page.goto("https://www.google.com");
    console.log(await page.title());
  });

  test("google URL test", async ({ page }) => {
    await page.goto("https://www.google.com");
    console.log(page.url());
  });

  test("google random test", async ({}) => {
    expect(100).toBe(100);
  });
});

test.describe("user CRUD test cases", () => {
  test("create a user test", async ({ page }) => {
    console.log("user is created:", 1001);
  });

  test("get a user test", async ({}) => {
    console.log("get user using userID: ", 1001);
  });

  test("update a user test", async ({}) => {
    console.log("update user using userID: ", 1001);
  });

  test("delete a user test", async ({}) => {
    console.log("delete user using userID: ", 1001);
  });
});
