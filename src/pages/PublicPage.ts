import { Page } from '@playwright/test';

export class PublicPage {
  constructor(private page: Page) {}

  async navigateTo() {
    await this.page.goto('https://webtestkit.onrender.com/public', {
      waitUntil: 'domcontentloaded' 
    });
  }
}