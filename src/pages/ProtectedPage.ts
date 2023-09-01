import { Page } from '@playwright/test';

export class ProtectedPage {
  constructor(private page: Page) {}

  async navigateTo() {
    await this.page.goto('https://webtestkit.onrender.com/protected', {
      waitUntil: 'domcontentloaded'
    });;
  }

  async clickLogoutButton() {
    await Promise.all([
      this.page.click('//button[@id="logoutButton"]'),
      this.page.waitForNavigation({ waitUntil: 'domcontentloaded' }) // Очікування переходу
    ]);
  }
}