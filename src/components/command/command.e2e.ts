import { newE2EPage } from '@stencil/core/testing';

describe('app-command', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-command></app-command>');

    const element = await page.find('app-command');
    expect(element).toHaveClass('hydrated');
  });
});
