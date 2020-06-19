import { newE2EPage } from '@stencil/core/testing';

describe('app-memento', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-memento></app-memento>');

    const element = await page.find('app-memento');
    expect(element).toHaveClass('hydrated');
  });
});
