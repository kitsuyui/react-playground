import type { Page } from '@playwright/test'

export const waitForStorybookFrameRendered = async ({
  page,
  path,
}: {
  page: Page
  path: string
}) => {
  await page.goto(path)
  await page.waitForSelector('iframe[data-is-loaded="true"]')
  const iframe = await page.locator('#storybook-preview-iframe')
  return iframe
}
