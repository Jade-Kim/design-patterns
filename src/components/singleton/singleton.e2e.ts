import { newE2EPage } from '@stencil/core/testing';

describe('app-singleton', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-singleton></app-singleton>');

    const element = await page.find('app-singleton');
    expect(element).toHaveClass('hydrated');
  });
});
