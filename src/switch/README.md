# Switch

### Install

```js
import Vue from 'vue';
import { Switch } from 'win-ui';

Vue.use(Switch);
```

## Usage

### Basic Usage

```html
<win-switch v-model="checked" />
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

```html
<win-switch v-model="checked" disabled />
```

### Loading

```html
<win-switch v-model="checked" loading />
```

### Custom Size

```html
<win-switch v-model="checked" size="24px" />
```

### Custom Color

```html
<win-switch v-model="checked" active-color="#07c160" inactive-color="#ee0a24" />
```

### Async Control

```html
<win-switch :value="checked" @input="onInput" />
```

```js
export default {
  data() {
    return {
      checked: true,
    };
  },
  methods: {
    onInput(checked) {
      Dialog.confirm({
        title: 'Confirm',
        message: 'Are you sure to toggle switch?',
      }).then(() => {
        this.checked = checked;
      });
    },
  },
};
```

### Inside a Cell

```html
<win-cell center title="Title">
  <template #right-icon>
    <win-switch v-model="checked" size="24" />
  </template>
</win-cell>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Check status of Switch | _ActiveValue \| InactiveValue_ | `false` |
| loading | Whether to show loading icon | _boolean_ | `false` |
| disabled | Whether to disable switch | _boolean_ | `false` |
| size `v2.2.11` | Size of switch | _number \| string_ | `30px` |
| active-color | Background color when active | _string_ | `#1989fa` |
| inactive-color | Background color when inactive | _string_ | `white` |
| active-value | Value when active | _any_ | `true` |
| inactive-value | Value when inactive | _any_ | `false` |

### Events

| Event           | Description                         | Parameters     |
| --------------- | ----------------------------------- | -------------- |
| change          | Triggered when check status changed | _value: any_   |
| click `v2.2.11` | Triggered when clicked              | _event: Event_ |
