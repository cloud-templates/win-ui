# Tag

### Install

```js
import Vue from 'vue';
import { Tag } from 'win-ui';

Vue.use(Tag);
```

## Usage

### Basic Usage

```html
<win-tag>Tag</win-tag>
<win-tag type="primary">Tag</win-tag>
<win-tag type="success">Tag</win-tag>
<win-tag type="danger">Tag</win-tag>
<win-tag type="warning">Tag</win-tag>
```

### Round style

```html
<win-tag round>Tag</win-tag>
<win-tag round type="primary">Tag</win-tag>
<win-tag round type="success">Tag</win-tag>
<win-tag round type="danger">Tag</win-tag>
<win-tag round type="warning">Tag</win-tag>
```

### Mark style

```html
<win-tag mark>Tag</win-tag>
<win-tag mark type="primary">Tag</win-tag>
<win-tag mark type="success">Tag</win-tag>
<win-tag mark type="danger">Tag</win-tag>
<win-tag mark type="warning">Tag</win-tag>
```

### Plain style

```html
<win-tag plain>Tag</win-tag>
<win-tag plain type="primary">Tag</win-tag>
<win-tag plain type="success">Tag</win-tag>
<win-tag plain type="danger">Tag</win-tag>
<win-tag plain type="warning">Tag</win-tag>
```

### Custom Color

```html
<win-tag color="#f2826a">Tag</win-tag>
<win-tag color="#f2826a" plain>Tag</win-tag>
<win-tag color="#7232dd">Tag</win-tag>
<win-tag color="#7232dd" plain>Tag</win-tag>
<win-tag color="#ffe1e1" text-color="#ad0000">Tag</win-tag>
```

### Custom Size

```html
<win-tag type="danger">Tag</win-tag>
<win-tag type="danger" size="medium">Tag</win-tag>
<win-tag type="danger" size="large">Tag</win-tag>
```

### Closeable

```html
<win-tag
  v-if="show.primary"
  closeable
  size="medium"
  type="primary"
  @close="close('primary')"
>
  Tag
</win-tag>
<win-tag
  v-if="show.success"
  closeable
  size="medium"
  type="success"
  @close="close('success')"
>
  Tag
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

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Type, can be set to `primary` `success` `danger` `warning` | _string_ | `default` |
| size | Size, can be set to `large` `medium` | _string_ | - |
| color | Custom color | _string_ | - |
| plain | Whether to be plain style | _boolean_ | `false` |
| round | Whether to be round style | _boolean_ | `false` |
| mark | Whether to be mark style | _boolean_ | `false` |
| text-color | Text color | _string_ | `white` |
| closeable `v2.2.9` | Whether to be closeable | _boolean_ | `false` |

### Slots

| Name    | Description  |
| ------- | ------------ |
| default | Default slot |

### Events

| Event | Description                     | Arguments      |
| ----- | ------------------------------- | -------------- |
| click | Triggered when clicked          | _event: Event_ |
| close | Triggered when click close icon | -              |
