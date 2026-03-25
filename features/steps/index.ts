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

Given('I am logged in TSTs env', async ({}) => {
  // Step: Given I am logged in TSTs env
  // From: features\homepage.feature:14:5
});

When('I open the projects module', async ({}) => {
  // Step: When I open the projects module
  // From: features\homepage.feature:15:5
});

When('I search project with name {string}', async ({}, arg: string) => {
  // Step: And I search project with name "Teste Projecto Com Entidades"
  // From: features\homepage.feature:16:5
});

Then('I validate I see the project with a simple expect', async ({}) => {
  // Step: Then I validate I see the project with a simple expect
  // From: features\homepage.feature:17:5
});