# msc-dialog

A Stencil component that is a simple wrapper for a [Material Dialog](https://material.io/develop/web/components/dialogs/) .

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute      | Description                                                                                                                                                                                                                | Type       | Default           |
| --------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------------- |
| `dialogActions` | --             | The possible actions of the Dialog window.  Strings specified here will be displayed as the Dialog buttons and the lowercase version of each string will be passed as the `detail.action` of the `MDCDialog:closed` event. | `string[]` | `['No', 'Yes']`   |
| `dialogTitle`   | `dialog-title` | The title of the dialog window.                                                                                                                                                                                            | `string`   | `'Default Title'` |


## Methods

### `open() => void`

Opens the dialog.

#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
