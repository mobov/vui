## AppBar

```vue
<template>
  <m-app>
    <m-app-bar :color="red"></m-app-bar>
  </m-app>
</template>
```

### Attributes
| Name      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| color | 主题色 | string | primary/success/colorString | primary |
| font-color | 字色| string | — | — |
| size | 尺寸 | string | Size | Size.md
| shape | 轮廓 | string | Shape | Shape.corner |
| variety | 形态| string | 'normal'/'flat'/'outline'/'pure'  | 'normal' |
| block | 块级按钮, width:100% | boolean | - | false |
| icon | 内嵌icon | string | Icon.name | - |

### Events
| Name | Description | Parameters |
|---------- |-------- |---------- |
| click | 点击事件 | event |
