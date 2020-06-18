# Grid

### Install

```js
import Vue from 'vue';
import { Grid, GridItem } from 'win-ui';

Vue.use(Grid);
Vue.use(GridItem);
```

## Usage

### Basic Usage

```html
<win-grid>
  <win-grid-item icon="photo-o" text="Text" />
  <win-grid-item icon="photo-o" text="Text" />
  <win-grid-item icon="photo-o" text="Text" />
  <win-grid-item icon="photo-o" text="Text" />
</win-grid>
```

### Column Num

```html
<win-grid :column-num="3">
  <win-grid-item v-for="value in 6" :key="value" icon="photo-o" text="Text" />
</win-grid>
```

### Custom Content

```html
<win-grid :border="false" :column-num="3">
  <win-grid-item>
    <win-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
  </win-grid-item>
  <win-grid-item>
    <win-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
  </win-grid-item>
  <win-grid-item>
    <win-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
  </win-grid-item>
</win-grid>
```

### Square

```html
<win-grid square>
  <win-grid-item v-for="value in 8" :key="value" icon="photo-o" text="Text" />
</win-grid>
```

### Gutter

```html
<win-grid :gutter="10">
  <win-grid-item v-for="value in 8" :key="value" icon="photo-o" text="Text" />
</win-grid>
```

### Horizontal

```html
<win-grid direction="horizontal" :column-num="2">
  <win-grid-item icon="photo-o" text="文字" />
  <win-grid-item icon="photo-o" text="文字" />
  <win-grid-item icon="photo-o" text="文字" />
</win-grid>
```

### Route

```html
<win-grid clickable :column-num="2">
  <win-grid-item icon="home-o" text="Vue Router" to="/" />
  <win-grid-item icon="search" text="URL" url="/vant/mobile.html" />
</win-grid>
```

### Show Badge

```html
<win-grid :column-num="2">
  <win-grid-item icon="home-o" text="Text" dot />
  <win-grid-item icon="search" text="Text" badge="99+" />
</win-grid>
```

## API

### Grid Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| column-num `v2.0.4` | Column Num | _number \| string_ | `4` |
| icon-size `v2.2.6` | Icon size | _number \| string_ | `28px` |
| gutter | Gutter | _number \| string_ | `0` |
| border | Whether to show border | _boolean_ | `true` |
| center | Whether to center content | _boolean_ | `true` |
| square | Whether to be square shape | _boolean_ | `false` |
| clickable | Whether to show click feedback when clicked | _boolean_ | `false` |
| direction `v2.8.2` | Content arrangement direction, can be set to `horizontal` | _string_ | `vertical` |

### GridItem Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| text | Text | _string_ | - |
| icon | Icon name or URL | _string_ | - |
| icon-prefix `v2.5.3` | Icon className prefix | _string_ | `win-icon` |
| dot `v2.2.1` | Whether to show red dot | _boolean_ | `false` |
| badge `v2.5.6` | Content of the badge | _number \| string_ | - |
| url | Link URL | _string_ | - |
| to | Target route of the link, same as to of vue-router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |

### GridItem Events

| Event | Description            | Arguments      |
| ----- | ---------------------- | -------------- |
| click | Triggered when clicked | _event: Event_ |

### GridItem Slots

| Name    | Description    |
| ------- | -------------- |
| default | Custom content |
| icon    | Custom icon    |
| text    | Custom text    |
