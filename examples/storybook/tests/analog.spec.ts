import { expect, test } from '@playwright/test'

import { waitForStorybookFrameRendered } from './util'

test('analog clock default', async ({ page }) => {
  const iframe = await waitForStorybookFrameRendered({
    page,
    path: '/?path=/story/base-clock-analog--default',
  })
  const screenshot = await iframe.screenshot()
  expect(screenshot).toMatchSnapshot('base-clock-analog--default.png')
})

test('analog clock roman', async ({ page }) => {
  const iframe = await waitForStorybookFrameRendered({
    page,
    path: '/?path=/story/base-clock-analog--roman',
  })
  const screenshot = await iframe.screenshot()
  expect(screenshot).toMatchSnapshot('base-clock-analog--roman.png')
})

test('analog clock sweep', async ({ page }) => {
  const iframe = await waitForStorybookFrameRendered({
    page,
    path: '/?path=/story/base-clock-analog--sweep',
  })
  const screenshot = await iframe.screenshot()
  expect(screenshot).toMatchSnapshot('base-clock-analog--sweep.png')
})

test('analog clock Tokyo', async ({ page }) => {
  const iframe = await waitForStorybookFrameRendered({
    page,
    path: '/?path=/story/base-clock-analog--tokyo',
  })
  const screenshot = await iframe.screenshot()
  expect(screenshot).toMatchSnapshot('base-clock-analog--tokyo.png')
})
