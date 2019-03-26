import { MDCDialog } from '@material/dialog/index';
import {
  Component,
  Element,
  Method,
  Prop,
} from '@stencil/core';

let nextId = 0;

@Component({
  tag: 'msc-dialog',
  styleUrl: 'msc-dialog.scss',
})

export class Dialog {
  /**
   * Internal element index.
   */
  private index = nextId++;

  /**
   * Reference to the Material Dialig component.
   */
  private _mdcDialog?: MDCDialog;

  /**
   * Reference to the DOM root element.
   */
  @Element() root!: HTMLElement;

  /**
   * The title of the dialog window.
   */
  @Prop() dialogTitle = 'Default Title';

  /**
   * The possible actions of the Dialog window.  Strings specified here will
   * be displayed as the Dialog buttons and the lowercase version of each string
   * will be passed as the `detail.action` of the `MDCDialog:closed` event.
   */
  @Prop() dialogActions: string[] = ['No', 'Yes'];

  /**
   * Lifecycle event called when the component has entered the DOM and rendered.
   */
  componentDidLoad() {
    this._mdcDialog = new MDCDialog(this.root);
  }

  /**
   * Lifecycle event called when the component is removed from the DOM.
   */
  componentDiDUnload() {
    if (this._mdcDialog) {
      this._mdcDialog.destroy();
    }
  }

  /**
   * Opens the dialog.
   */
  @Method()
  open() {
    if (this._mdcDialog) {
      this._mdcDialog.open();
    }
  }

  /**
   * Lifecycle event used to dynamically update the attributes and properties
   * of the host element.
   */
  hostData() {
    return {
      class: {
        'mdc-dialog': true,
        'rl-detail-dialog': true,
      },
      role: 'alertdialog',
      'aria-modal': 'true',
      'aria-labelledby': `rl-detail-dialog__title-${this.index}`,
      'aria-describedby': `rl-detail_dialog__content-${this.index}`
    };
  }

  /**
   * Render the component.
   */
  render() {
    const { index, dialogTitle, dialogActions } = this;

    return ([
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          <h2 class="mdc-dialog__title" id={`rl-detail-dialog__title-${index}`}>
            {dialogTitle}
          </h2>
          <div class="mdc-dialog__content" id={`rl-detail-dialog__content-${index}`}>
            <slot />
          </div>
          <footer class="mdc-dialog__actions">
            {dialogActions.map(action =>
              <button
                  class="mdc-button mdc-dialog__button"
                  data-mdc-dialog-action={action.toLowerCase()}
                  type="button"
              >
                <span class="mdc-button__label">{action}</span>
              </button>
            )}
          </footer>
        </div>
      </div>,
      <div class="mdc-dialog__scrim" />,
    ]);
  }
}
