import { test, expect } from '@playwright/test'

import { waitForStorybookFrameRendered } from './util'

test('treemap', async ({ page }) => {
  const iframe = await waitForStorybookFrameRendered({
    page,
    path: '/?path=/story/base-treemap-example--default',
  })
  // wait for the treemap to render (using wasm module may take some additional loading time)
  await page.waitForLoadState('networkidle')
  const screenshot = await iframe.screenshot()
  expect(screenshot).toMatchSnapshot('base-treemap-example--default.png')
})
