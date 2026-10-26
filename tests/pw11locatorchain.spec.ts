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

// Parent --> Child --> Child

test("Chain locator test", async ({ page }) => {
  // locator('form').getByRole('textbox', { name: 'First Name' })
  // locator('#column-right').getByRole('link', { name: 'Forgotten Password' })
  // locator('form').getByRole('link', { name: 'Forgotten Password' })

  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );

  await page
    .locator("form")
    .getByRole("textbox", { name: "First Name" })
    .fill("Naveen Automation Labs");

  await page.waitForTimeout(2000);

  //locator('form').getByRole('link',{name:"Forgotten Password"})

  await page
    .locator("#column-right")
    .getByRole("link", { name: "Forgotten Password" })
    .click();

  await page.pause();
});

//locator('#column-right').getByRole('link',{name:'Forgotten Password'})

//td[text()='GUI']/preceding-sibling::td/input[@type='checkbox']
//td[text()='GUI']/following-sibling::td/input[@value='Delete']

test("webtable handing test", async ({ page }) => {
  await page.goto("https://qavbox.github.io/demo/webtable/");
  await page
    .locator("#table01")
    .locator("tr")
    .filter({ hasText: "GUI" })
    .getByRole("checkbox")
    .click();

  await page
    .locator("#table01")
    .locator("tr")
    .filter({ hasText: "GUI" })
    .getByRole("button", { name: "Delete" })
    .click();

  // locator('#table01').locator('tr').filter({hasText:'Coded UI'}).locator('td').getByRole('button',{name:'Delete'})

  let officeName = await page
    .locator("#table02")
    .locator("tr")
    .filter({ hasText: "Ashton Cox" })
    .locator("td")
    .nth(2)
    .innerText();
  console.log(officeName);

  //locator('#table02').locator('tr').filter({hasText:'Tokyo'}).locator('td').nth(5).innerText()

  let colCount = await page.locator("#table02 tr th").count();
  console.log(colCount);

  let rowCount = (await page.locator("#table02 tr").count()) - 1;
  console.log(rowCount);

  let customerSalary = await page
    .locator("#table02")
    .locator("tr")
    .filter({ hasText: "Cedric Kelly" })
    .locator("td")
    .nth(5)
    .innerText();

  console.log(customerSalary);

  //locator('#table02 tr').filter({hasText:'Ashton Cox'}).locator('td').nth(5).innerText();

  await page.pause();
});

test("get field in espn info test", async ({ page }) => {
  // locator('form').getByRole('textbox', { name: 'First Name' })
  // locator('#column-right').getByRole('link', { name: 'Forgotten Password' })
  // locator('form').getByRole('link', { name: 'Forgotten Password' })

  await page.goto(
    "https://www.espncricinfo.com/series/wpl-2024-25-1463356/gujarat-giants-women-vs-up-warriorz-women-15th-match-1469312/full-scorecard",
  );

  let scoreCardText = await page
    .locator(".ci-scorecard-table")
    .locator("tr")
    .filter({ hasText: "Harleen Deol" })
    .first()
    .locator("td")
    .nth(1)
    .locator("span")
    .last()
    .innerText();

  await page.waitForTimeout(2000);
  console.log(scoreCardText);
});

test("get tables data from cricinfo webtable test", async ({ page }) => {
  await page.goto(
    "https://www.cricinfo.com/series/the-hundred-men-s-competition-2026-1521176/trent-rockets-men-vs-birmingham-phoenix-men-22nd-match-1521252/full-scorecard",
  );

  let playerName = "Will Smeed";

  let wicketTakerName = await page
    .locator("table.ci-scorecard-table")
    .first()
    .locator("tr")
    .filter({ hasText: `${playerName}` })
    .first()
    .locator("td")
    .nth(1)
    .locator("span span")
    .innerText();

  console.log(wicketTakerName);

  console.log("----------------");

  let playerScoreData = await page
    .locator("table.ci-scorecard-table")
    .first()
    .locator("tr")
    .filter({ hasText: "Will Smeed" })
    .first()
    .locator("td")
    .all();

  for (let playerData of playerScoreData) {
    let playerInfo = await playerData.textContent();
    console.log(playerInfo);
  }

  await page.pause();
});


//page.locator('table.ci-scorecard-table').last().locator(tr).filter({hasText:'Grace Harris'}).locator(td)