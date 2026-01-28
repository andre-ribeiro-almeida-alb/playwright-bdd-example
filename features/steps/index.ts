import { expect } from '@playwright/test';
import { Given, When, Then } from './fixtures';

Given('I am on Playwright home page', async ({ page }) => {
  await page.goto('https://playwright.dev');
});

When('I click link {string}', async ({ page }, name: string) => {
  await page.getByRole('link', { name }).click();
});

Then('I see in title {string}', async ({ page }, text: string) => {
  await expect(page).toHaveTitle(new RegExp(text));
});

Then('This step should/texts be matched with slash', async ({ page }) => {
  await expect(page).toHaveURL(/.*playwright\.dev.*/);
});

Then('This step should/texts be matched with quote {string} with slash', async ({ page }) => {
  await expect(page).toHaveURL(/.*playwright\.dev.*/);
});

Then('This step should be matched with quote {string} without slash', async ({ page }) => {
  await expect(page).toHaveURL(/.*playwright\.dev.*/);
});

Then('This step should/texts be matched with unquoted word {word} with slash', async ({ page }) => {
  await expect(page).toHaveURL(/.*playwright\.dev.*/);
});