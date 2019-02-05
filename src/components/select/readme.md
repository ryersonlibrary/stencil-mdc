# msc-select

A Stencil component that is a simple wrapper for a [Material Select Menus](https://material.io/develop/web/components/input-controls/select-menus/) .

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                                                   | Type                                  | Default |
| ------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ------- |
| `disabled`    | `disabled`     | Flag indicating if this select menu is disabled.                                                                              | `boolean`                             | `false` |
| `items`       | --             | The list of items that will be displayed in the dropdown menu.                                                                | `{ value: string; label: string; }[]` | `[]`    |
| `label`       | `label`        | The placeholder/label that is displayed over top of the selected item and in place of a selected item when none are selected. | `string`                              | `''`    |
| `native`      | `native`       | A flag indicating whether or not a `select` DOM structure should be used in favour of a `ul`/`li` styled structure.           | `boolean`                             | `false` |
| `outlined`    | `outlined`     | Flag indicating if the style of the select should be an outline.                                                              | `boolean`                             | `false` |
| `selectWidth` | `select-width` | The width of the select box.  Must be specified when not using the native flag.                                               | `number`                              | `100`   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
