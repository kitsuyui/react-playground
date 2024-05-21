import type { Page } from '@playwright/test'

export const waitForStorybookFrameRendered = async ({
  page,
  path,
}: {
  page: Page
  path: string
}) => {
  await page.goto(path)
  const iframeSelector = 'iframe[data-is-loaded="true"]#storybook-preview-iframe'
  await page.waitForSelector(iframeSelector)
  const iframe = await page.locator(iframeSelector).elementHandle()
  return iframe
}
