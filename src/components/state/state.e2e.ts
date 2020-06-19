import { newE2EPage } from '@stencil/core/testing';

describe('app-state', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-state></app-state>');

    const element = await page.find('app-state');
    expect(element).toHaveClass('hydrated');
  });
});
