# Sticky

### Install

```js
import Vue from 'vue';
import { Sticky } from 'win-ui';

Vue.use(Sticky);
```

## Usage

### Basic Usage

```html
<win-sticky>
  <win-button type="primary">Basic Usage</win-button>
</win-sticky>
```

### Offset Top

```html
<win-sticky :offset-top="50">
  <win-button type="info">Offset Top</win-button>
</win-sticky>
```

### Set Container

```html
<div ref="container" style="height: 150px;">
  <win-sticky :container="container">
    <win-button type="warning">Set Container</win-button>
  </win-sticky>
</div>
```

```js
export default {
  data() {
    return {
      container: null,
    };
  },
  mounted() {
    this.container = this.$refs.container;
  },
};
```

## API

### Props

| Attribute  | Description         | Type               | Default |
| ---------- | ------------------- | ------------------ | ------- |
| offset-top | Offset top          | _number \| string_ | `0`     |
| z-index    | z-index when sticky | _number \| string_ | `99`    |
| container  | Container DOM       | _Element_          | -       |

### Events

| Event  | Description           | Arguments                      |
| ------ | --------------------- | ------------------------------ |
| scroll | Triggered when scroll | object: { scrollTop, isFixed } |
