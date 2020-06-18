# IndexBar

### Install

```js
import Vue from 'vue';
import { IndexBar } from 'win-ui';

Vue.use(IndexBar);
Vue.use(IndexAnchor);
```

## Usage

### Basic Usage

```html
<win-index-bar>
  <win-index-anchor index="A" />
  <win-cell title="Text" />
  <win-cell title="Text" />
  <win-cell title="Text" />

  <win-index-anchor index="B" />
  <win-cell title="Text" />
  <win-cell title="Text" />
  <win-cell title="Text" />

  ...
</win-index-bar>
```

### Custom Index List

```html
<win-index-bar :index-list="indexList">
  <win-index-anchor index="1">Title 1</win-index-anchor>
  <win-cell title="Text" />
  <win-cell title="Text" />
  <win-cell title="Text" />

  <win-index-anchor index="2">Title 2</win-index-anchor>
  <win-cell title="Text" />
  <win-cell title="Text" />
  <win-cell title="Text" />

  ...
</win-index-bar>
```

```js
export default {
  data() {
    return {
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
};
```

## API

### IndexBar Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| index-list | Index List | _string[] \| number[]_ | `A-Z` |
| z-index | z-index | _number \| string_ | `1` |
| sticky | Whether to enable anchor sticky top | _boolean_ | `true` |
| sticky-offset-top `v2.0.7` | Anchor offset top when sticky | _number_ | `0` |
| highlight-color | Index character highlight color | _string_ | `#07c160` | - |

### IndexAnchor Props

| Attribute | Description | Type               | Default |
| --------- | ----------- | ------------------ | ------- |
| index     | Index       | _number \| string_ | -       |

### IndexBar Events

| Event  | Description                 | Arguments |
| ------ | --------------------------- | --------- |
| select | Triggered when select index | index     |

### IndexAnchor Slots

| Name    | Description                           |
| ------- | ------------------------------------- |
| default | Anchor content, show index by default |
