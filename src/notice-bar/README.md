# NoticeBar

### Install

```js
import Vue from 'vue';
import { NoticeBar } from 'win-ui';

Vue.use(NoticeBar);
```

## Usage

### Basic Usage

```html
<win-notice-bar text="Notice Content" left-icon="volume-o" />
```

### Disable scroll

```html
<win-notice-bar :scrollable="false">
  Notice Content
</win-notice-bar>
```

### Wrapable

```html
<win-notice-bar wrapable :scrollable="false">
  Notice Content
</win-notice-bar>
```

### Mode

```html
<win-notice-bar mode="closeable">
  Notice Content
</win-notice-bar>

<win-notice-bar mode="link">
  Notice Content
</win-notice-bar>
```

### Custom Style

```html
<win-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
  Notice Content
</win-notice-bar>
```

### Vertical Scroll

```html
<win-notice-bar left-icon="volume-o" :scrollable="false">
  <win-swipe
    vertical
    class="notice-swipe"
    :autoplay="3000"
    :show-indicators="false"
  >
    <win-swipe-item>Content 1</win-swipe-item>
    <win-swipe-item>Content 2</win-swipe-item>
    <win-swipe-item>Content 3</win-swipe-item>
  </win-swipe>
</win-notice-bar>

<style>
  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
</style>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| mode | Mode, can be set to `closeable` `link` | _string_ | `''` |
| text | Notice text content | _string_ | `''` | - |
| color | Text color | _string_ | `#f60` |
| background | Background color | _string_ | `#fff7cc` |
| left-icon | Left Icon | _string_ | - |
| delay | Animation delay (s) | _number \| string_ | `1` |
| speed | Scroll speed (px/s) | _number \| string_ | `50` |
| scrollable | Whether to scroll content | _boolean_ | `true` |
| wrapable | Whether to enable text wrap | _boolean_ | `false` | - |

### Events

| Event           | Description                    | Arguments      |
| --------------- | ------------------------------ | -------------- |
| click           | Triggered when click NoticeBar | _event: Event_ |
| close           | Triggered when closed          | _event: Event_ |
| replay `v2.6.2` | Triggered when replay          | -              |

### Slots

| Name       | Description         |
| ---------- | ------------------- |
| default    | Notice text content |
| left-icon  | Custom left icon    |
| right-icon | Custom right icon   |
