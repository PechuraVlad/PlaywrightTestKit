import { test, expect } from '@playwright/test';
import { ProtectedPage } from '../pages/ProtectedPage';

test('User cannot access protected page without authentication', async ({ page }) => {
  const protectedPage = new ProtectedPage(page);

  await protectedPage.navigateTo();

  const pageTitle = await page.title();
  expect(pageTitle).toBe('Login');
});
