import { test } from "@playwright/test";

test("title test", async () => {
  console.log("title test");
});

test("url test", async () => {
  console.log("url test");
});

// test.only("title only test", async () => {
//   console.log("test only test");
// });

test.skip("title skip test", async () => {
  console.log("test skip test");
});

test.skip("payment fixme test", async () => {
  test.fixme();
  console.log("Fixing this payment test later");
});
