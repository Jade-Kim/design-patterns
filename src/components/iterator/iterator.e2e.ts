import { newE2EPage } from '@stencil/core/testing';

describe('app-iterator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-iterator></app-iterator>');

    const element = await page.find('app-iterator');
    expect(element).toHaveClass('hydrated');
  });
});
