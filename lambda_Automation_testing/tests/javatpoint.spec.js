const { test, expect } = require("@playwright/test");
const { HomePage } = require("../pages/home");
const { Navigation } = require("../pages/navigation");
const data = require("../data/data.json");
require("dotenv").config();

test.beforeEach(async ({ page }) => {
  const home = new HomePage(page);
  await page.goto(process.env.BASE_URL);
  await expect(home.logo).toBeVisible();
});

test("has title", async ({ page }) => {
  const navigation = new Navigation(page);
  for (const platformOfferings of data.masterData.navigation.platform.values) {
    await navigation.ohoverLink(data.masterData.navigation.platform.name);
    // await page.waitForTimeout(5000);
    await test.step("verify  and click on sublink", async () => {
      await navigation.clickLink(platformOfferings.name);
      // await page.waitForTimeout(5000);
      for (const offering of platformOfferings.offerings) {
        const navigation = new Navigation(page);
        expect(
          await navigation.headings(offering).count()
        ).toBeGreaterThanOrEqual(1);
      }
    });
  }
});
