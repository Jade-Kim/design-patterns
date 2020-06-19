import { newE2EPage } from '@stencil/core/testing';

describe('app-template', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-template></app-template>');

    const element = await page.find('app-template');
    expect(element).toHaveClass('hydrated');
  });
});
