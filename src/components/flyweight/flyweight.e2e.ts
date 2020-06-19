import { newE2EPage } from '@stencil/core/testing';

describe('app-flyweight', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-flyweight></app-flyweight>');

    const element = await page.find('app-flyweight');
    expect(element).toHaveClass('hydrated');
  });
});
