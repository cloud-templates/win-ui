# Panel

### Deprecate Tip

The Panel component will be deprecated in version 3.0. Please use the Cell and Button components instead.

### Install

```js
import Vue from 'vue';
import { Panel } from 'win-ui';

Vue.use(Panel);
```

## Usage

### Basic Usage

```html
<win-panel title="Title" desc="Description" status="Status">
  <div>Content</div>
</win-panel>
```

### Advanced Usage

```html
<win-panel title="Title" desc="Description" status="Status">
  <div>Content</div>
  <template #footer>
    <win-button size="small">Button</win-button>
    <win-button size="small" type="danger">Button</win-button>
  </template>
</win-panel>
```

## API

### Props

| Attribute | Description | Type     | Default |
| --------- | ----------- | -------- | ------- |
| icon      | Left Icon   | _string_ | -       |
| title     | Title       | _string_ | -       |
| desc      | Description | _string_ | -       |
| status    | Status      | _string_ | -       |

### Slots

| Name    | Description   |
| ------- | ------------- |
| default | Default slot  |
| header  | Custom header |
| footer  | Custom footer |
