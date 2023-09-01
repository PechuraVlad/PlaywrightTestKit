import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User cannot login with invalid username and password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const invalidUsername = 'invalidUsername';
  const invalidPassword = 'invalidPassword';

  await loginPage.navigateTo();
  await loginPage.login(invalidUsername, invalidPassword);

  const pageTitle = await page.title();
  expect(pageTitle).toBe('Login');
});

test('User cannot login with valid username and invalid password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const validUsername = 'Anyone';
  const invalidPassword = 'invalidPassword';

  await loginPage.navigateTo();
  await loginPage.login(validUsername, invalidPassword);

  const pageTitle = await page.title();
  expect(pageTitle).toBe('Login');
});

test('User cannot login with invalid username and valid password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const invalidUsername = 'invalidUsername';
  const validPassword = 'Accurate';

  await loginPage.navigateTo();
  await loginPage.login(invalidUsername, validPassword);

  const pageTitle = await page.title();
  expect(pageTitle).toBe('Login');
});
