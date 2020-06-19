import { newE2EPage } from '@stencil/core/testing';

describe('app-adapter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-adapter></app-adapter>');

    const element = await page.find('app-adapter');
    expect(element).toHaveClass('hydrated');
  });
});
