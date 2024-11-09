import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://gabrielromero.dev');
  await page.getByRole('heading',{
    name: 'Gabriel Romero'
  }).click();

  await expect(page).toHaveScreenshot();
})