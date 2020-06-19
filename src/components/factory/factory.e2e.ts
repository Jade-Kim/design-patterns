import { newE2EPage } from '@stencil/core/testing';

describe('app-factory', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-factory></app-factory>');

    const element = await page.find('app-factory');
    expect(element).toHaveClass('hydrated');
  });
});
