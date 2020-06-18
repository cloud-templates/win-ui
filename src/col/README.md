# Layout

### Intro

Quickly and easily create layouts with `win-row` and `win-col`

### Install

```js
import Vue from 'vue';
import { Col, Row } from 'win-ui';

Vue.use(Col);
Vue.use(Row);
```

## Usage

### Basic Usage

Layout are based on 24-column. The attribute `span` in `Col` means the number of column the grid spans. Of course, You can use `offset` attribute to set number of spacing on the left side of the grid.

```html
<win-row>
  <win-col span="8">span: 8</win-col>
  <win-col span="8">span: 8</win-col>
  <win-col span="8">span: 8</win-col>
</win-row>

<win-row>
  <win-col span="4">span: 4</win-col>
  <win-col span="10" offset="4">offset: 4, span: 10</win-col>
  <win-col span="6">span: 6</win-col>
</win-row>

<win-row>
  <win-col offset="12" span="12">offset: 12, span: 12</win-col>
</win-row>
```

### Column Spacing

Set grid spacing using `gutter` attribute. The default value is 0

```html
<win-row gutter="20">
  <win-col span="8">span: 8</win-col>
  <win-col span="8">span: 8</win-col>
  <win-col span="8">span: 8</win-col>
</win-row>
```

### Flex Layout

Setting `type` to `flex` to enable flex layout

```html
<win-row type="flex">
  <win-col span="6">span: 6</win-col>
  <win-col span="6">span: 6</win-col>
  <win-col span="6">span: 6</win-col>
</win-row>

<win-row type="flex" justify="center">
  <win-col span="6">span: 6</win-col>
  <win-col span="6">span: 6</win-col>
  <win-col span="6">span: 6</win-col>
</win-row>

<win-row type="flex" justify="end">
  <win-col span="6">span: 6</win-col>
  <win-col span="6">span: 6</win-col>
  <win-col span="6">span: 6</win-col>
</win-row>

<win-row type="flex" justify="space-between">
  <win-col span="6">span: 6</win-col>
  <win-col span="6">span: 6</win-col>
  <win-col span="6">span: 6</win-col>
</win-row>

<win-row type="flex" justify="space-around">
  <win-col span="6">span: 6</win-col>
  <win-col span="6">span: 6</win-col>
  <win-col span="6">span: 6</win-col>
</win-row>
```

## API

### Row Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Layout type, can be set to `flex` | _string_ | - |
| gutter | Grid spacing（px） | _number \| string_ | - |
| tag | Custom element tag | _string_ | `div` |
| justify | Flex main axis，can be set to end/center/space-around/space-between | _string_ | `start` |
| align | Flex cross axis, be set to center/bottom | _string_ | `top` |

### Col Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| span | number of column the grid spans | _number \| string_ | - |
| offset | number of spacing on the left side of the grid | _number \| string_ | - |
| tag | Custom element tag | _string_ | `div` |

### Row Events

| Event | Description              | Arguments      |
| ----- | ------------------------ | -------------- |
| click | Triggered when click row | _event: Event_ |

### Col Events

| Event | Description              | Arguments      |
| ----- | ------------------------ | -------------- |
| click | Triggered when click col | _event: Event_ |
