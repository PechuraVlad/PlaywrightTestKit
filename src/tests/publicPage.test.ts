import { test, expect } from '@playwright/test';
import { PublicPage } from '../pages/PublicPage';

test('The user can visit the public page without authorization.', async ({ page }) => {
  const publicPage = new PublicPage(page);

  await publicPage.navigateTo();
  const pageTitle = await page.title();
  expect(pageTitle).toBe('Public');
});