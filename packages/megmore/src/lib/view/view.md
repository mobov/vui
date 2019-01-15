## View

```vue
<template>
  <m-view :fill-header="both"
          :fill-footer="both"
          headerSize=""
          footerSize=""
          leftSize=""
          rightSize="">
  </m-view>
</template>
```

### Attributes
| Name      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| fillHeader | 布局 | string | left/right/both/none | both |
| fillFooter | 布局 | string | left/right/both/none | both |
| headerSize | 头部尺寸 | Size | - | 5rem |
| footerSize | 底部尺寸 | Size | - | 2rem |
| leftSize | 左面板尺寸 | Size | - | 10rem |
| rightSize | 右面板尺寸 | Size | - | 10rem |


### Events
| Name | Description | Parameters |
|---------- |-------- |---------- |
