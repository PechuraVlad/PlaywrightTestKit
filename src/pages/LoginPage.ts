import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigateTo() {
    await this.page.goto('https://webtestkit.onrender.com/login', {
      waitUntil: 'domcontentloaded'
    });
  }

  async login(username: string, password: string) {
    await this.page.fill('//input[@name="username"]', username);
    await this.page.fill('//input[@name="password"]', password);
    await this.page.click('//input[@type="submit"]');
  }
}