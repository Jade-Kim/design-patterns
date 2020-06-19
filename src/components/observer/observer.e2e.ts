import { newE2EPage } from '@stencil/core/testing';

describe('app-observer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-observer></app-observer>');

    const element = await page.find('app-observer');
    expect(element).toHaveClass('hydrated');
  });
});
