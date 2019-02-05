import { MDCRipple } from '@material/ripple/index';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  Prop,
  Watch,
} from '@stencil/core';

import { Color } from '../../utils/color';

@Component({
  tag: 'msc-card',
  styleUrl: 'msc-card.scss',
})
export class Card {
  /**
   * An array of two colors used to define the linear gradient displayed behind
   * the title in the Media section of the card.  This is used to ensure the
   * title remains legible.
   */
  private protectionColor: Color[] = [
    new Color(255, 255, 255, 0.8),
    new Color(255, 255, 255, 0.2),
  ];

  /**
   * An array of possible colors to select from for the title text.  This allows
   * the highest contrasting colour to be used relative to the text protection
   * color, ensuring maximal legibility.
   */
  private textColors = [new Color(255, 255, 255), new Color(0, 0, 0)];

  /**
   * Reference to the root element.
   */
  @Element() root!: HTMLStencilElement;

  /**
   * An array of name/link pairs that will be used to render Action buttons
   * for the card.
   */
  @Prop() buttons?: {name: string, link?: string}[];

  /**
   * An array of icon names corresponding to Material Icons.  Each string in the
   * array will be rendered as an icon button in the action section of the card.
   */
  @Prop() icons?: string[];

  // @Prop() cardData: { [keys: string]: string[] } | string = {};

  /**
   * A path to an image file that will be displayed in the media section of
   * this card.
   */
  @Prop() cardMedia = '';

  /**
   * The aspect ratio that the media section will be forced to use.
   */
  @Prop() cardMediaAspect: '16-9' | 'square' = 'square';

  /**
   * The method used to resize the image in the media section of the card.
   */
  @Prop() cardMediaSize: 'contain' | 'cover' = 'cover';

  /**
   * The text that will be displayed in the media section as the card title.
   */
  @Prop() cardTitle = '';

  // @Prop() titleInMedia = false;

  /**
   * Flag indicating if the entire card should be treated as an action/link.
   */
  @Prop() hasPrimaryAction = false;

  /**
   * A flag indicating that the card has no content whatsoever and the
   */
  @Prop() noContent = false;

  /**
   * A flag indicating that the card has only content and no media (or even
   * placeholder) should be displayed.
   */
  @Prop() noMedia = false;

  /**
   * Flag to remove the shadow elevation and display a hairline outline instead.
   */
  @Prop() outlined = false;

  /**
   * The color used when rendering the card.  Change this to change the text
   * protection color.
   */
  @Prop() cardColor: Color = new Color(255, 255, 255);
  @Watch('cardColor')
  cardColorChanged() {
    const col = this.cardColor.clone();
    this.protectionColor = [
      col,
      col.clone().setAlpha(0.5),
    ];
  }

  /**
   * An event that is fired when the entire card is clicked and
   * `hasPrimaryAction` is true.
   */
  @Event() cardClicked!: EventEmitter;

  componentWillLoad() {
    this.cardColorChanged();
  }

  _renderActions() {
    // Render nothing if no buttons and icons are defined.
    if (this.buttons === undefined && this.icons === undefined) {
      return;
    }

    // Render any actions.
    return (
      <div class="mdc-card__actions">
        {this.buttons ?
          <div class="mdc-card__action-buttons">
            {this.buttons.map(b =>
              <button class="mdc-button" ref={el => { const r = new MDCRipple(el); r.unbounded = false; }}>
                <a href={b.link}>{b.name}</a>
              </button>
            )}
          </div> : undefined
        }
        {this.icons ?
          <div class="mdc-card__action-icons">
            {this.icons.map(i =>
              <button class="mdc-icon-button" ref={el => { const r = new MDCRipple(el); r.unbounded = true; }}>
                <i class="material-icons mdc-icon-button__icon">{i}</i>
              </button>
            )}
          </div> : undefined
        }
      </div>
    );
  }

  _renderMedia() {
    const mediaFile =
        `url("${this.cardMedia ? this.cardMedia : '/src/assets/no_img.png'}")`;

    return (
      <div
          class={`mdc-card__media mdc-card__media--${this.cardMediaAspect}`}
          style={{ backgroundImage: mediaFile, backgroundSize: this.cardMediaSize }}
      >
        {this.cardTitle !== '' ?
          [
            <div
                class="msc-card__media-text-protection"
                style={{
                  background: `linear-gradient(to top, ${this.protectionColor[0].toRgb()},
                  ${this.protectionColor[1].toRgb()})`
                }}
            >
            </div>,
            <div
                class="msc-card__media-text"
                style={{
                  color: this.protectionColor[0].highContrast(this.textColors).toRgb(),
                }}
            >
              {this.cardTitle}
            </div>,
          ] : undefined
        }
      </div>
    );
  }

  _renderCard() {
    return ([
      this.noMedia ? undefined : this._renderMedia(),
      this.noContent ? undefined : [
        <div class="msc-card__primary">
          <slot name="primary" />
        </div>,
        <div class="msc-card__secondary">
          <slot name="secondary" />
        </div>
      ],
    ]);
  }

  hostData() {
    return {
      class: {
        'msc-card': true,
        'mdc-card': true,
        'mdc-card--outlined': this.outlined,
      },
    };
  }

  render() {
    return ([
      this.hasPrimaryAction ?
        <div
            class="mdc-card__primary-action"
            onClick={() => this.cardClicked.emit(this)}
            ref={el => { const r = new MDCRipple(el); r.unbounded = false; }}
        >
          {this._renderCard()}
        </div> :
        this._renderCard(),
      this._renderActions(),
    ]);
  }
}
