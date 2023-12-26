import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { AppPagePO } from 'e2e/page-objects/app.po';

const { Given, Then } = createBdd();

Given('I open the home page', async ({ page }) => {
  await AppPagePO.navigateTo(page, '/');
});

Then('I see "Welcome" in the toolbar', async ({ page }) => {
  await expect(AppPagePO.getTitle(page)).toHaveText('Welcome');
});

Then('I see "Angular app is running!" in the rocket section', async ({ page }) => {
  await expect(AppPagePO.getRocket(page)).toHaveText('Angular app is running!');
});
