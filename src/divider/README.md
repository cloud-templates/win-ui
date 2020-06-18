# Divider

### Install

```js
import Vue from 'vue';
import { Divider } from 'win-ui';

Vue.use(Divider);
```

## Usage

### Basic Usage

```html
<win-divider />
```

### With Text

```html
<win-divider>Text</win-divider>
```

### Content Position

```html
<win-divider content-position="left">Text</win-divider>
<win-divider content-position="right">Text</win-divider>
```

### Dashed

```html
<win-divider dashed>Text</win-divider>
```

### Custom Style

```html
<win-divider
  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
>
  Text
</win-divider>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| dashed | Whether to use dashed border | _boolean_ | `false` |
| hairline | Whether to use hairline | _boolean_ | `true` |
| content-position | Content position，can be set to `left` `right` | _string_ | `center` |

### Slots

| Name    | Description |
| ------- | ----------- |
| default | content     |
