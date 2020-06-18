# Radio

### Install

```js
import Vue from 'vue';
import { RadioGroup, Radio } from 'win-ui';

Vue.use(Radio);
Vue.use(RadioGroup);
```

## Usage

### Basic Usage

Use `v-model` to bind the name of checked radio

```html
<win-radio-group v-model="radio">
  <win-radio name="1">Radio 1</win-radio>
  <win-radio name="2">Radio 2</win-radio>
</win-radio-group>
```

```js
export default {
  data() {
    return {
      radio: '1',
    };
  },
};
```

### Horizontal

```html
<win-radio-group v-model="radio" direction="horizontal">
  <win-radio name="1">Radio 1</win-radio>
  <win-radio name="2">Radio 2</win-radio>
</win-radio-group>
```

### Disabled

```html
<win-radio-group v-model="radio" disabled>
  <win-radio name="1">Radio 1</win-radio>
  <win-radio name="2">Radio 2</win-radio>
</win-radio-group>
```

### Custom Shape

```html
<win-radio-group v-model="radio">
  <win-radio name="1" shape="square">Radio 1</win-radio>
  <win-radio name="2" shape="square">Radio 2</win-radio>
</win-radio-group>
```

### Custom Color

```html
<win-radio-group v-model="radio">
  <win-radio name="1" checked-color="#07c160">Radio 1</win-radio>
  <win-radio name="2" checked-color="#07c160">Radio 2</win-radio>
</win-radio-group>
```

### Custom Icon Size

```html
<win-radio-group v-model="radio">
  <win-radio name="1" icon-size="24px">Radio 1</win-radio>
  <win-radio name="2" icon-size="24px">Radio 2</win-radio>
</win-radio-group>
```

### Custom Icon

Use icon slot to custom icon

```html
<win-radio-group v-model="radio">
  <win-radio name="1">
    Radio 1
    <template #icon="props">
      <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
    </template>
  </win-radio>
  <win-radio name="2">
    Radio 2
    <template #icon="props">
      <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
    </template>
  </win-radio>
</win-radio-group>

<style>
  .img-icon {
    height: 20px;
  }</style
>>
```

```js
export default {
  data() {
    return {
      radio: '1',
      activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
    };
  },
};
```

### Disable Label Click

```html
<win-radio-group v-model="radio">
  <win-radio name="1" label-disabled>Radio 1</win-radio>
  <win-radio name="2" label-disabled>Radio 2</win-radio>
</win-radio-group>
```

### Inside a Cell

```html
<win-radio-group v-model="radio">
  <win-cell-group>
    <win-cell title="Radio 1" clickable @click="radio = '1'">
      <template #right-icon>
        <win-radio name="1" />
      </template>
    </win-cell>
    <win-cell title="Radio 2" clickable @click="radio = '2'">
      <template #right-icon>
        <win-radio name="2" />
      </template>
    </win-cell>
  </win-cell-group>
</win-radio-group>
```

## API

### Radio Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| name | Radio name | _any_ | - |
| shape | Can be set to `square` | _string_ | `round` |
| disabled | Whether to disable radio | _boolean_ | `false` |
| label-disabled | Whether to disable label click | _boolean_ | `false` |
| label-position | Can be set to `left` | _string_ | `right` |
| icon-size | Icon size | _number \| string_ | `20px` |
| checked-color | Checked color | _string_ | `#1989fa` | - |

### RadioGroup Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model (v-model) | Name of checked radio | _any_ | - |
| disabled | Disable all radios | _boolean_ | `false` |
| direction `v2.5.0` | Direction, can be set to `horizontal` | _string_ | `vertical` |
| icon-size `v2.2.3` | Icon size of all radios | _number \| string_ | `20px` |
| checked-color `v2.2.3` | Checked color of all radios | _string_ | `#1989fa` | - |

### Radio Events

| Event | Description                | Parameters     |
| ----- | -------------------------- | -------------- |
| click | Triggered when click radio | _event: Event_ |

### RadioGroup Events

| Event  | Description                  | Parameters     |
| ------ | ---------------------------- | -------------- |
| change | Triggered when value changed | _name: string_ |

### Radio Slots

| Name    | Description  | SlotProps          |
| ------- | ------------ | ------------------ |
| default | Custom label | -                  |
| icon    | Custom icon  | _checked: boolean_ |
