import { Locator, Page } from '@playwright/test';

export class AppPagePO {
  static navigateTo(page: Page, path: string): Promise<unknown> {
    return page.goto(path);
  }

  static getTitle(page: Page): Locator {
    return page.locator('.toolbar span');
  }

  static getRocket(page: Page): Locator {
    return page.locator('#message-section');
  }
}
