import { newE2EPage } from '@stencil/core/testing';

describe('app-state2', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-state2></app-state2>');

    const element = await page.find('app-state2');
    expect(element).toHaveClass('hydrated');
  });
});
