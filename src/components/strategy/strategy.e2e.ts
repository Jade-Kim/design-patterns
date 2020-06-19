import { newE2EPage } from '@stencil/core/testing';

describe('app-strategy', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-strategy></app-strategy>');

    const element = await page.find('app-strategy');
    expect(element).toHaveClass('hydrated');
  });
});
