import { MDCSelect } from '@material/select/index';
import {
  Component,
  Element,
  Prop,
} from '@stencil/core';

/**
 * A component used to wrap a basic Material Button.
 */
@Component({
  tag: 'msc-select',
  styleUrl: 'msc-select.scss',
})
export class Select {
  /**
   * Internal reference to the Select DOM element.
   */
  private select!: HTMLDivElement;

  /**
   * Internal reference to the root DOM element.
   */
  @Element() root!: HTMLElement;

  /**
   * Flag indicating if the style of the select should be an outline.
   */
  @Prop() outlined = false;

  /**
   * Flag indicating if this select menu is disabled.
   */
  @Prop() disabled = false;

  /**
   * The placeholder/label that is displayed over top of the selected item and
   * in place of a selected item when none are selected.
   */
  @Prop() label = '';

  /**
   * A flag indicating whether or not a `select` DOM structure should be used
   * in favour of a `ul`/`li` styled structure.
   */
  @Prop() native = false;

  /**
   * The list of items that will be displayed in the dropdown menu.
   */
  @Prop() items: { value: string, label: string }[] = [];

  /**
   * The width of the select box.  Must be specified when not using the native
   * flag.
   */
  @Prop() selectWidth = 100;

  componentDidLoad() {
    new MDCSelect(this.select);
  }

  render() {
    const { disabled, label, outlined, selectWidth } = this;
    const selectClasses = {
      'mdc-select': true,
      'mdc-select--outlined': outlined,
    };
    const widthStyle = {
      'width': `${selectWidth}px`
    };

    return (
      <div class={selectClasses} ref={el => this.select = el as HTMLDivElement} aria-disabled={disabled} style={widthStyle}>
        {this.native ?
          ([
            <i class="mdc-select__dropdown-icon"></i>,
            <select class="mdc-select__native-control">
              {this.items.map(item =>
                <option value={item.value}>{item.label}</option>
              )}
              <slot></slot>
            </select>,
          ]) :
          ([
            <input type="hidden" name="enhanced-select" />,
            <i class="mdc-select__dropdown-icon"></i>,
            <div class="mdc-select__selected-text"></div>,
            <div class="mdc-select__menu mdc-menu mdc-menu-surface" style={widthStyle}>
              <ul class="mdc-list">
                {this.items.map(item =>
                  <li class="mdc-list-item" data-value={item.value}>{item.label}</li>
                )}
                <slot></slot>
              </ul>
            </div>
          ])
        }
        <span class="mdc-floating-label">{label}</span>
        <div class="mdc-line-ripple"></div>
      </div>
    );
  }
}
