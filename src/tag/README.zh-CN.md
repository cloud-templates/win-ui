# Tag 标记

### 引入

```js
import Vue from 'vue';
import { Tag } from 'win-ui';

Vue.use(Tag);
```

## 代码演示

### 基础用法

通过`type`属性控制标签颜色，默认为灰色

```html
<win-tag>标签</win-tag>
<win-tag type="primary">标签</win-tag>
<win-tag type="success">标签</win-tag>
<win-tag type="danger">标签</win-tag>
<win-tag type="warning">标签</win-tag>
```

### 圆角样式

通过`round`设置为圆角样式

```html
<win-tag round>标签</win-tag>
<win-tag round type="primary">标签</win-tag>
<win-tag round type="success">标签</win-tag>
<win-tag round type="danger">标签</win-tag>
<win-tag round type="warning">标签</win-tag>
```

### 标记样式

通过`mark`设置为标记样式(半圆角)

```html
<win-tag mark>标签</win-tag>
<win-tag mark type="primary">标签</win-tag>
<win-tag mark type="success">标签</win-tag>
<win-tag mark type="danger">标签</win-tag>
<win-tag mark type="warning">标签</win-tag>
```

### 空心样式

设置`plain`属性设置为空心样式

```html
<win-tag plain>标签</win-tag>
<win-tag plain type="primary">标签</win-tag>
<win-tag plain type="success">标签</win-tag>
<win-tag plain type="danger">标签</win-tag>
<win-tag plain type="warning">标签</win-tag>
```

### 自定义颜色

```html
<win-tag color="#f2826a">标签</win-tag>
<win-tag color="#f2826a" plain>标签</win-tag>
<win-tag color="#7232dd">标签</win-tag>
<win-tag color="#7232dd" plain>标签</win-tag>
<win-tag color="#ffe1e1" text-color="#ad0000">标签</win-tag>
```

### 标签大小

```html
<win-tag type="danger">标签</win-tag>
<win-tag type="danger" size="medium">标签</win-tag>
<win-tag type="danger" size="large">标签</win-tag>
```

### 可关闭标签

添加`closeable`属性表示标签是可关闭的，关闭标签时会触发`close`事件，在`close`事件中可以执行隐藏标签的逻辑

```html
<win-tag
  v-if="show.primary"
  closeable
  size="medium"
  type="primary"
  @close="close('primary')"
>
  标签
</win-tag>
<win-tag
  v-if="show.success"
  closeable
  size="medium"
  type="success"
  @close="close('success')"
>
  标签
</win-tag>
```

```js
export default {
  data() {
    return {
      show: {
        primary: true,
        success: true,
      },
    };
  },
  methods: {
    close(type) {
      this.show[type] = false;
    },
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为`primary` `success` `danger` `warning` | _string_ | `default` |
| size | 大小, 可选值为`large` `medium` | _string_ | - |
| color | 标签颜色 | _string_ | - |
| plain | 是否为空心样式 | _boolean_ | `false` |
| round | 是否为圆角样式 | _boolean_ | `false` |
| mark | 是否为标记样式 | _boolean_ | `false` |
| text-color | 文本颜色，优先级高于`color`属性 | _string_ | `white` |
| closeable `v2.2.9` | 是否为可关闭标签 | _boolean_ | `false` |

### Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 标签显示内容 |

### Events

| 事件名 | 说明           | 回调参数       |
| ------ | -------------- | -------------- |
| click  | 点击时触发     | _event: Event_ |
| close  | 关闭标签时触发 | -              |
