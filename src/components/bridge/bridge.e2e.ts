import { newE2EPage } from '@stencil/core/testing';

describe('app-bridge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-bridge></app-bridge>');

    const element = await page.find('app-bridge');
    expect(element).toHaveClass('hydrated');
  });
});
