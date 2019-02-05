import { newE2EPage } from '@stencil/core/testing';

describe('button', () => {
  let page;
  let element; // The custom element being tested `msc-button`.
  let button;

  beforeAll(async () => {
    page = await newE2EPage();
    await page.setContent('<msc-button></msc-button>');
    element = await page.find('msc-button');
    button = await element.find('button');
  });

  it('renders as a plain button', async () => {
    expect(button).toHaveClass('mdc-button');
  });

  it('renders as a raised button', async () => {
    element.setProperty('raised', true);
    await page.waitForChanges();

    expect(button).toHaveClass('mdc-button--raised');
  });

  it('renders as an unelevated button', async () => {
    element.setProperty('raised', false);
    element.setProperty('unelevated', true);
    await page.waitForChanges();

    expect(button).not.toHaveClass('mdc-button--raised');
    expect(button).toHaveClass('mdc-button--unelevated');
  });

  it('renders as an outlined button', async () => {
    element.setProperty('unelevated', false);
    element.setProperty('outlined', true);
    await page.waitForChanges();

    expect(button).not.toHaveClass('mdc-button--unelevated');
    expect(button).toHaveClass('mdc-button--outlined');
  });

  it('renders as a dense button', async () => {
    element.setProperty('outlined', false);
    element.setProperty('dense', true);
    await page.waitForChanges();

    expect(button).not.toHaveClass('mdc-button--outlined');
    expect(button).toHaveClass('mdc-button--dense');
  });

  it('renders as a disabled button', async () => {
    element.setProperty('dense', false);
    element.setProperty('disabled', true);
    await page.waitForChanges();

    expect(button).toEqualHtml(`
      <button class="mdc-button mdc-ripple-upgraded" disabled>
        <span class="mdc-button__label"></span>
      </button>
    `);
  });

  it('renders with a leading icon', async () => {
    element.setProperty('disabled', false);
    element.setProperty('icon', 'event');
    await page.waitForChanges();

    expect(button).toEqualHtml(`
      <button class="mdc-button mdc-ripple-upgraded">
        <i class="material-icons mdc-button__icon">event</i>
        <span class="mdc-button__label"></span>
      </button>
    `);
  });

  it('renders with a label', async () => {
    element.setProperty('icon', '');
    element.setProperty('trailing', false);
    element.setProperty('label', 'button label');
    await page.waitForChanges();

    expect(button).not.toHaveClass('mdc-button--dense');
    expect(button).toEqualHtml(`
      <button class="mdc-button mdc-ripple-upgraded">
        <span class="mdc-button__label">button label</span>
      </button>
    `);
  });

  it('renders with a trailing icon', async () => {
    element.setProperty('trailing', true);
    element.setProperty('icon', 'event');
    element.setProperty('label', 'trailing');
    await page.waitForChanges();

    expect(button).toEqualHtml(`
      <button class="mdc-button mdc-ripple-upgraded">
        <span class="mdc-button__label">trailing</span>
        <i class="material-icons mdc-button__icon">event</i>
      </button>
    `);
  });
});
