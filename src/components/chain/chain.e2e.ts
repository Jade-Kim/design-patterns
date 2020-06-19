import { newE2EPage } from '@stencil/core/testing';

describe('app-chain', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-chain></app-chain>');

    const element = await page.find('app-chain');
    expect(element).toHaveClass('hydrated');
  });
});
