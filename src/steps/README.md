# Steps

### Install

```js
import Vue from 'vue';
import { Step, Steps } from 'win-ui';

Vue.use(Step);
Vue.use(Steps);
```

## Usage

### Basic Usage

```html
<win-steps :active="active">
  <win-step>Step1</win-step>
  <win-step>Step2</win-step>
  <win-step>Step3</win-step>
  <win-step>Step4</win-step>
</win-steps>
```

```js
export default {
  data() {
    return {
      active: 1,
    };
  },
};
```

### Custom Style

```html
<win-steps :active="active" active-icon="success" active-color="#38f">
  <win-step>Step1</win-step>
  <win-step>Step2</win-step>
  <win-step>Step3</win-step>
  <win-step>Step4</win-step>
</win-steps>
```

### Vertical Steps

```html
<win-steps direction="vertical" :active="0">
  <win-step>
    <h3>【City】Status1</h3>
    <p>2016-07-12 12:40</p>
  </win-step>
  <win-step>
    <h3>【City】Status2</h3>
    <p>2016-07-11 10:00</p>
  </win-step>
  <win-step>
    <h3>【City】Status3</h3>
    <p>2016-07-10 09:30</p>
  </win-step>
</win-steps>
```

## API

### Steps Props

| Attribute     | Description              | Type               | Default      |
| ------------- | ------------------------ | ------------------ | ------------ |
| active        | Active step              | _number \| string_ | `0`          |
| direction     | Can be set to `vertical` | _string_           | `horizontal` |
| active-color  | Active step color        | _string_           | `#07c160`    |
| active-icon   | Active icon name         | _string_           | `checked`    |
| inactive-icon | Active icon name         | _string_           | -            |

### Step Slots

| Name          | Description          |
| ------------- | -------------------- |
| active-icon   | Custom active icon   |
| inactive-icon | Custom inactive icon |

### Steps Events

| Event | Description | Arguments |
| --- | --- | --- |
| click-step `v2.5.9` | Triggered when a step's title or icon is clicked | _index: number_ |
