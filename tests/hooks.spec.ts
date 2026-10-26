//hooks: before(setup) and after(teardown)

import {
  Page,
  Browser,
  BrowserContext,
  test,
  chromium,
} from "@playwright/test";

// Runs ONCE before all tests in the test file
test.beforeAll(async () => {
  console.log("Before All -- Connect to the DB");
  //user creation
  //admin settings
  //uploading test data
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
  // delete user
  //reset admin settings
  //delete the test data
});

test("Title test", async () => {
  console.log("TC1--------------Title Test");
});

test("Homepage test", async () => {
  console.log("TC2-------------- Homepage Test");
});

test("Cart test", async () => {
  console.log("TC1--------------Cart Test");
});

test("Payment test", async () => {
  console.log("TC1--------------Payment Test");
});

test("Search test", async () => {
  console.log("TC1-------------- Search Test");
});
