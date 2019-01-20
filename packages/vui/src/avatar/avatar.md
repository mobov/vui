## Avatar

```vue
<template>
  <m-avatar color=""
            font-colot=""
            size=""
            src=""></m-avatar>
</template>
```

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| color | 主题色 | string | primary/success/colorString | primary |
| font-color | 字色 | string | — | — |
| size | if closable or not | boolean | — | true |
### Slots
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| close | fires when alert is closed | — |

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| close | fires when alert is closed | — |
