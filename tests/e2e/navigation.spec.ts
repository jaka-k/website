import { expect, test } from '@playwright/test'

test.describe('Navigation', () => {
  test.describe('Static pages', () => {
    test('should navigate to the about page', async ({ page }) => {
      await page.goto('http://localhost:3000/')

      await expect(
        page.locator('code', { hasText: 'src/app/page.tsx ' })
      ).toBeVisible()
    })
  })
})
