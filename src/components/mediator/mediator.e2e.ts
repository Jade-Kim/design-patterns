import { newE2EPage } from '@stencil/core/testing';

describe('app-mediator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-mediator></app-mediator>');

    const element = await page.find('app-mediator');
    expect(element).toHaveClass('hydrated');
  });
});
