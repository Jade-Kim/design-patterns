import { newE2EPage } from '@stencil/core/testing';

describe('app-proxy', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-proxy></app-proxy>');

    const element = await page.find('app-proxy');
    expect(element).toHaveClass('hydrated');
  });
});
