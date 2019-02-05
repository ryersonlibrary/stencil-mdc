import { newE2EPage } from '@stencil/core/testing';

describe('dialog', () => {
  let page;
  let element; // The custom element being tested `msc-dialog`.

  beforeAll(async () => {
    page = await newE2EPage();
    await page.setContent('<msc-dialog></msc-dialog>');
    element = await page.find('msc-dialog');
  });

  it('renders with proper class', async () => {
    expect(element).toHaveClass('mdc-dialog');
  });

  it('opens', async () => {
    await element.callMethod('open');
    await page.waitForChanges();

    expect(element).toHaveClass('mdc-dialog--open');
  });
});
