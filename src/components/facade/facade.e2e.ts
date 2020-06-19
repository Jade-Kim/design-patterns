import { newE2EPage } from '@stencil/core/testing';

describe('app-facade', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-facade></app-facade>');

    const element = await page.find('app-facade');
    expect(element).toHaveClass('hydrated');
  });
});
