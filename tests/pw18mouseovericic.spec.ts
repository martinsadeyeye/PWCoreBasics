import { test, expect, Locator, webkit } from "@playwright/test";

test("mouse hover icici graph test", async ({ page }) => {
  await page.goto(
    "https://www.iciciprulife.com/insurance-guide/financial-planning-tools-calculators/power-compounding-calculator.html",
  );

  let allPoints = page.locator(".highcharts-markers .highcharts-point");
  let allDots = await allPoints.all();
  console.log("total number of dots in graph: ", allDots.length);

  for (let ele of allDots) {
    await ele.hover(); //trig the tool tip
    //await page.waitForTimeout(2000);

    let box = await ele.boundingBox();
    let x = box!.x + box!.width / 2;
    let y = box!.y + box!.height / 2;

    await page.mouse.move(x, y);
    let yearAmount = await page.locator(".highcharts-tooltip").textContent();
    console.log(yearAmount);

    await page.waitForTimeout(2000);
  }

  await page.pause();
});

test("mouse hover on all icici graph test", async ({ page }) => {
  await page.goto(
    "https://www.iciciprulife.com/insurance-guide/financial-planning-tools-calculators/power-compounding-calculator.html",
  );

  let allBar = page.locator(".highcharts-column-series path.highcharts-point");
  let allGrowthBar = await allBar.all();
  console.log("total number of dots in graph: ", allGrowthBar.length);

  for (let ele of allGrowthBar) {
    await ele.hover({ force: true }); // trigger the tooltip

    let box = await ele.boundingBox();
    let x = box!.x + box!.width / 2;
    let y = box!.y + box!.height / 2;

    await page.mouse.move(x, y);

    // Read directly from the element you hovered — no ambiguity
    // aria-label - this is the only attribute that show the
    let principleAmount = await ele.getAttribute("aria-label");

    console.log(principleAmount);

    await page.waitForTimeout(300); // 2s per point × 61 points is slow; trim if you don't need it
  }

  await page.pause();
});
