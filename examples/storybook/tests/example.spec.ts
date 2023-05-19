import { test, expect } from '@playwright/test'

test('clock page', async ({ page }) => {
  await page.goto('http://localhost:6006/?path=/story/clock--default')
  expect(await page.screenshot()).toMatchSnapshot('clock-image.png')
})
