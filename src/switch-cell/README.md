# SwitchCell

### Deprecate Tip

The SwitchCell component will be deprecated in version 3.0. Please use the Cell and Switch components instead.

### Install

```js
import Vue from 'vue';
import { SwitchCell } from 'win-ui';

Vue.use(SwitchCell);
```

## Usage

### Basic Usage

```html
<win-cell-group>
  <win-switch-cell v-model="checked" title="Title" />
</win-cell-group>
```

```js
export default {
  data() {
    return {
      checked: true,
    };
  },
};
```

### Disabled

use `disabled` property to disable the component

```html
<win-cell-group>
  <win-switch-cell v-model="checked" disabled title="Title" />
</win-cell-group>
```

### Loading

use `loading` property to keep component in loading state

```html
<win-cell-group>
  <win-switch-cell v-model="checked" loading title="Title" />
</win-cell-group>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | on-off state of the switch | _any_ | `false` |
| title | the left side title | _string_ | `''` |
| border | whether to show cell border | _boolean_ | `true` |
| cell-size | Cell size，can be set to `large` | _string_ | - |
| loading | whether switch is loading | _boolean_ | `false` |
| disabled | whether to disable switch | _boolean_ | `false` |
| size | Size of switch | _number \| string_ | `24px` |
| active-color | Background of switch color when active | _string_ | `#1989fa` |
| inactive-color | Background of switch color when inactive | _string_ | `white` |
| active-value | Value when active | _any_ | `true` |
| inactive-value | Value when inactive | _any_ | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | triggered when the on-off state is changed | checked: switch is on or not |
