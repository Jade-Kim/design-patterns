import { newE2EPage } from '@stencil/core/testing';

describe('app-decorator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-decorator></app-decorator>');

    const element = await page.find('app-decorator');
    expect(element).toHaveClass('hydrated');
  });
});
