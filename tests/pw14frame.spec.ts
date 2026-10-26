
import { test, expect, Locator, selectors } from "@playwright/test";

test('nested Iframe test', async ({ page }) => {

  await page.goto('https://www.dezlearn.com/nested-iframes-example/');

  let parentFrame = page.frameLocator('#parent_iframe');
  let childFrame = parentFrame.frameLocator('#iframe1');

  await childFrame.getByRole('button', { name: 'Click Here' }).click();
  let mesg = await childFrame.locator('#processing').innerText();
  console.log(mesg);

  console.log('--------------------');
  await parentFrame.getByRole('button', { name: 'Click Here' }).click();
  let outerMesg = await parentFrame.locator('#processing').innerText();
  console.log(outerMesg);

  console.log('--------------------');
  let mainHeader = await page.getByRole('heading', { name: 'Nested iFrames Example', level: 2 }).innerText();
  console.log(mainHeader);

  await page.pause();
});
