## List

```vue
<template>
  <m-list title="标题">
    <m-list-item>
      内容
    </m-list-item>
  </m-list>
</template>
```

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| color | 主题色 | string | primary/success/colorString | primary |
| font-color | 字色| string | — | — |
| closable | if closable or not | boolean | — | true |
| center | whether to center the text | boolean | — | false |
| close-text | customized close button text | string | — | — |
| show-icon | if a type icon is displayed | boolean | — | false |

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| close | fires when alert is closed | — |
