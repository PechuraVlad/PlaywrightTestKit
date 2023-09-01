import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PublicPage } from '../pages/PublicPage';
import { validCredentials } from '../testData/validCredentials';

test('User can access public page after authentication', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const publicPage = new PublicPage(page);

  const { username, password } = validCredentials[0];

  await loginPage.navigateTo();
  await loginPage.login(username, password);

  await publicPage.navigateTo();

  const pageTitle = await page.title();
  expect(pageTitle).toBe('Public');
});
