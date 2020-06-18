# Collapse

### Install

```js
import Vue from 'vue';
import { Collapse, CollapseItem } from 'win-ui';

Vue.use(Collapse);
Vue.use(CollapseItem);
```

## Usage

### Basic Usage

Use `v-model` to control the name of active panels

```html
<win-collapse v-model="activeNames">
  <win-collapse-item title="Title1" name="1">Content</win-collapse-item>
  <win-collapse-item title="Title2" name="2">Content</win-collapse-item>
  <win-collapse-item title="Title3" name="3" disabled
    >Content</win-collapse-item
  >
</win-collapse>
```

```js
export default {
  data() {
    return {
      activeNames: ['1'],
    };
  },
};
```

### Accordion

In accordion mode, only one panel can be expanded at the same time.

```html
<win-collapse v-model="activeName" accordion>
  <win-collapse-item title="Title1" name="1">Content</win-collapse-item>
  <win-collapse-item title="Title2" name="2">Content</win-collapse-item>
  <win-collapse-item title="Title3" name="3">Content</win-collapse-item>
</win-collapse>
```

```js
export default {
  data() {
    return {
      activeName: '1',
    };
  },
};
```

### Custom title

```html
<win-collapse v-model="activeNames">
  <win-collapse-item name="1">
    <template #title>
      <div>Title1 <win-icon name="question-o" /></div>
    </template>
    Content
  </win-collapse-item>
  <win-collapse-item title="Title2" name="2" icon="shop-o">
    Content
  </win-collapse-item>
</win-collapse>
```

```js
export default {
  data() {
    return {
      activeNames: ['1'],
    };
  },
};
```

## API

### Collapse Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Names of current active panels | accordion mode： _number \| string_<br>non-accordion mode：_(number \| string)[]_ | - |
| accordion | Whether to be accordion mode | _boolean_ | `false` |
| border | Whether to show outer border | _boolean_ | `true` |

### Collapse Events

| Event  | Description                 | Arguments   |
| ------ | --------------------------- | ----------- |
| change | Triggered when switch panel | activeNames |

### CollapseItem Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| name | Name | _number \| string_ | `index` |
| icon | Left Icon | _string_ | - |
| size | Title size，can be set to `large` | _string_ | - |
| title | Title | _number \| string_ | - |
| value | Right text | _number \| string_ | - |
| label | Description below the title | _string_ | - |
| border | Whether to show inner border | _boolean_ | `true` |
| disabled | Whether to disabled collapse | _boolean_ | `false` |
| is-link | Whether to show link icon | _boolean_ | `true` |
| title-class | Title className | _string_ | - |
| value-class | Value className | _string_ | - |
| label-class | Label className | _string_ | - |

### CollapseItem Slots

| Name       | Description       |
| ---------- | ----------------- |
| default    | Content           |
| value      | Custom value      |
| icon       | Custom icon       |
| title      | Custom title      |
| right-icon | Custom right icon |
