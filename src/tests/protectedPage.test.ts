import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProtectedPage } from '../pages/ProtectedPage';
import { validCredentials } from '../testData/validCredentials';

test('User can visit the protected page only with authentication', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const protectedPage = new ProtectedPage(page);

  const { username, password } = validCredentials[0];

  await loginPage.navigateTo();
  await loginPage.login(username, password);
  
  await protectedPage.navigateTo();
  const pageTitle = await page.title();
  expect(pageTitle).toBe('Protected');
});