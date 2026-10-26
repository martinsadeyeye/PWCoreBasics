import { test, expect, BrowserContext, Page } from '@playwright/test';

test('chat window users test', async ({ browser }) => {
  let ctx1: BrowserContext = await browser.newContext(); //window1
  let ctx2: BrowserContext = await browser.newContext(); //window2
  let page1: Page = await ctx1.newPage();
  let page2: Page = await ctx2.newPage();

  await page1.goto('http://localhost:3000/');
  await page2.goto('http://localhost:3000/');

  await page1.locator('#usernameInput').fill('Naveen');
  await page1.locator('#joinBtn').click();
  await page1.locator('#messageInput').fill('Hi Deepti, How are you doing today??');
  await page1.locator('#sendBtn').click();

  await page2.locator('#usernameInput').fill('Deepti');
  await page2.locator('#joinBtn').click();
  await page2.locator('#messageInput').fill('Hi Naveen, How are you doing today??');
  await page2.locator('#sendBtn').click();

  await page1.pause();
  await page2.pause();
});
