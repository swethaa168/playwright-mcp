import { test, expect } from '@playwright/test';

const URL = 'https://orangehrm.com/';

test('OrangeHRM: click Book a Free Demo and close tab', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to OrangeHRM site
  await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 60000 });

  // Wait for "Book a Free Demo" button and click it
  const bookDemoButton = page.getByText(/book a free demo/i);
  await expect(bookDemoButton).toBeVisible({ timeout: 15000 });
  await bookDemoButton.click();

  // Wait a moment for the tab/window to open
  await page.waitForTimeout(2000);

  // Close the current tab/context
  await context.close();
});
