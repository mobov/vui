## AppBar

```vue
<template>
  <m-button :color=""></m-button>
</template>
```

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| **title** | title **REQUIRED** | string | — | — |
| type | component type | string | success/warning/info/error | info |
| description | descriptive text. Can also be passed with the default slot | string | — | — |
| closable | if closable or not | boolean | — | true |
| center | whether to center the text | boolean | — | false |
| close-text | customized close button text | string | — | — |
| show-icon | if a type icon is displayed | boolean | — | false |

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| close | fires when alert is closed | — |