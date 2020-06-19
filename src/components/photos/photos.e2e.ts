import { newE2EPage } from '@stencil/core/testing';

describe('pattern-photos', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pattern-photos></pattern-photos>');

    const element = await page.find('pattern-photos');
    expect(element).toHaveClass('hydrated');
  });
});
