# msc-card

A Stencil component that is a simple wrapper for a [Material Card](https://material.io/develop/web/components/cards/) .

## Usage

Add `<msc-card>` to the page structure and use the properties below to customize
the component. 

## Slots

Content for the card is specified by using one of two named slots; `primary` and `secondary`.

```html
<msc-card>
  <div slot="primary">I'm the primary content</div>
  <div slot="secondary">I'm the secondary content</div>
</msc-card>
```

<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                                                                                                             | Type                                                           | Default                    |
| ------------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------- |
| `buttons`          | --                   | An array of name/link pairs that will be used to render Action buttons for the card.                                                                    | `undefined \| { name: string; link?: string \| undefined; }[]` | `undefined`                |
| `cardColor`        | --                   | The color used when rendering the card.  Change this to change the text protection color.                                                               | `Color`                                                        | `new Color(255, 255, 255)` |
| `cardMedia`        | `card-media`         | A path to an image file that will be displayed in the media section of this card.                                                                       | `string`                                                       | `''`                       |
| `cardMediaAspect`  | `card-media-aspect`  | The aspect ratio that the media section will be forced to use.                                                                                          | `"16-9" \| "square"`                                           | `'square'`                 |
| `cardMediaSize`    | `card-media-size`    | The method used to resize the image in the media section of the card.                                                                                   | `"contain" \| "cover"`                                         | `'cover'`                  |
| `cardTitle`        | `card-title`         | The text that will be displayed in the media section as the card title.                                                                                 | `string`                                                       | `''`                       |
| `hasPrimaryAction` | `has-primary-action` | Flag indicating if the entire card should be treated as an action/link.                                                                                 | `boolean`                                                      | `false`                    |
| `icons`            | --                   | An array of icon names corresponding to Material Icons.  Each string in the array will be rendered as an icon button in the action section of the card. | `string[] \| undefined`                                        | `undefined`                |
| `noContent`        | `no-content`         | A flag indicating that the card has no content whatsoever and the                                                                                       | `boolean`                                                      | `false`                    |
| `noMedia`          | `no-media`           | A flag indicating that the card has only content and no media (or even placeholder) should be displayed.                                                | `boolean`                                                      | `false`                    |
| `outlined`         | `outlined`           | Flag to remove the shadow elevation and display a hairline outline instead.                                                                             | `boolean`                                                      | `false`                    |


## Events

| Event         | Description                                                                            | Type                |
| ------------- | -------------------------------------------------------------------------------------- | ------------------- |
| `cardClicked` | An event that is fired when the entire card is clicked and `hasPrimaryAction` is true. | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
