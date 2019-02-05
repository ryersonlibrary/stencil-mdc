import { MDCRipple } from '@material/ripple/index';
import {
  Component,
  Element,
  Prop,
} from '@stencil/core';

/**
 * A component used to wrap a basic Material Button.
 */
@Component({
  tag: 'msc-button',
  styleUrl: 'msc-button.scss',
})
export class Button {
  private ripple!: MDCRipple;

  private btn!: HTMLButtonElement;

  @Element() root!: HTMLElement;

  /**
   * Styles the button such that it appears to be raised off the surface it is
   * on.
   */
  @Prop() raised = false;

  /**
   * Style the button such that it appears to be flush with the surface it is on.
   */
  @Prop() unelevated = false;

  /**
   * Style the button with an outline.
   */
  @Prop() outlined = false;

  /**
   * Style the button with slightly smaller text and container.
   */
  @Prop() dense = false;

  /**
   * Prevent the button from being clicked.
   */
  @Prop() disabled = false;

  /**
   * The name of the icon to use with the button.  Name must be that of the
   * [Material Icons](https://material.io/tools/icons/?style=baseline).
   */
  @Prop() icon = '';

  /**
   * A flag indicating if the icon comes after the label.
   */
  @Prop() trailing = false;

  /**
   * The label text to display on the button.
   */
  @Prop() label = '';

  /**
   * Component lifecycle event called when the component has entered the DOM
   * and been rendered.
   */
  componentDidLoad() {
    this.ripple = new MDCRipple(this.btn);
    this.ripple.unbounded = false;
  }

  /**
   * Render the component.
   */
  render() {
    const { disabled, icon, label, trailing } = this;
    const iconDom = (<i class="material-icons mdc-button__icon">{icon}</i>);
    const classes = {
      'mdc-button': true,
      'mdc-button--raised': this.raised,
      'mdc-button--unelevated': this.unelevated,
      'mdc-button--outlined': this.outlined,
      'mdc-button--dense': this.dense,
    };

    return (
      <button
          ref={el => this.btn = el as HTMLButtonElement}
          class={classes}
          disabled={disabled}
      >
        {(icon && !trailing) ? iconDom : undefined}
        <span class="mdc-button__label">{label ? label : (<slot />)}</span>
        {(icon && trailing) ? iconDom : undefined}
      </button>
    );
  }
}
