import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProtectedPage } from '../pages/ProtectedPage';
import { validCredentials } from '../testData/validCredentials';

test('User is logged out before accessing protected page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const protectedPage = new ProtectedPage(page);

  const { username, password } = validCredentials[0];

  await loginPage.navigateTo();
  await loginPage.login(username, password);

  await protectedPage.navigateTo();
  await protectedPage.clickLogoutButton();

  const pageTitle = await page.title();
  expect(pageTitle).toBe('Login');
});
