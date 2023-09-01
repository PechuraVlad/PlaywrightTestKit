import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProtectedPage } from '../pages/ProtectedPage';
import { validCredentials } from '../testData/validCredentials';

test('User can login and logout with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const protectedPage = new ProtectedPage(page);

  const { username, password } = validCredentials[0];

  await loginPage.navigateTo();
  await loginPage.login(username, password);
  
  const pageTitle = await page.title();
  expect(pageTitle).toBe('Protected');

  await protectedPage.clickLogoutButton();
  const pageTitleAfterLogout = await page.title();
  expect(pageTitleAfterLogout).toBe('Login');
});