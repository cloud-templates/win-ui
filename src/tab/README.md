# Tab

### Install

```js
import Vue from 'vue';
import { Tab, Tabs } from 'win-ui';

Vue.use(Tab);
Vue.use(Tabs);
```

## Usage

### Basic Usage

The first tab is actived by default, you can set `v-model` to active specified tab.

```html
<win-tabs v-model="active">
  <win-tab v-for="index in 4" :title="'tab' + index">
    content of tab {{ index }}
  </win-tab>
</win-tabs>
```

```js
export default {
  data() {
    return {
      active: 2,
    };
  },
};
```

### Match By Name

```html
<win-tabs v-model="activeName">
  <win-tab title="tab 1" name="a">content of tab 1</win-tab>
  <win-tab title="tab 2" name="b">content of tab 2</win-tab>
  <win-tab title="tab 3" name="c">content of tab 3</win-tab>
</win-tabs>
```

```js
export default {
  data() {
    return {
      activeName: 'a',
    };
  },
};
```

### Swipe Tabs

By default more than 4 tabs, you can scroll through the tabs. You can set `swipe-threshold` attribute to customize threshold number.

```html
<win-tabs>
  <win-tab v-for="index in 8" :title="'tab' + index">
    content of tab {{ index }}
  </win-tab>
</win-tabs>
```

### Disabled Tab

You can set `disabled` attribute on the corresponding `win-tab`.

```html
<win-tabs @disabled="onClickDisabled">
  <win-tab v-for="index in 3" :title="'tab' + index" :disabled="index === 2">
    content of tab {{ index }}
  </win-tab>
</win-tabs>
```

```js
import { Toast } from 'win-ui';

export default {
  methods: {
    onClickDisabled(name, title) {
      Toast(title + ' is disabled');
    },
  },
};
```

### Card Style

Tabs styled as cards.

```html
<win-tabs type="card">
  <win-tab v-for="index in 3" :title="'tab' + index">
    content of tab {{ index }}
  </win-tab>
</win-tabs>
```

### Click Event

```html
<win-tabs @click="onClick">
  <win-tab v-for="index in 2" :title="'tab' + index">
    content of tab {{ index }}
  </win-tab>
</win-tabs>
```

```js
import { Toast } from 'win-ui';

export default {
  methods: {
    onClick(name, title) {
      Toast(title);
    },
  },
};
```

### Sticky

In sticky mode, the tab will be fixed to top when scroll to top

```html
<win-tabs v-model="active" sticky>
  <win-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </win-tab>
</win-tabs>
```

### Custom title

Use title slot to custom tab title

```html
<win-tabs v-model="active">
  <win-tab v-for="index in 2" :key="index">
    <template #title> <win-icon name="more-o" />tab </template>
    content {{ index }}
  </win-tab>
</win-tabs>
```

### Switch Animation

Use `animated` props to change tabs with animation

```html
<win-tabs v-model="active" animated>
  <win-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </win-tab>
</win-tabs>
```

### Swipeable

In swipeable mode, you can switch tabs with swipe gestrue in the content

```html
<win-tabs v-model="active" swipeable>
  <win-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </win-tab>
</win-tabs>
```

### Scrollspy

In scrollspy mode, the list of content will be tiled

```html
<win-tabs v-model="active" scrollspy sticky>
  <win-tab v-for="index in 8" :title="'tab ' + index">
    content {{ index }}
  </win-tab>
</win-tabs>
```

## API

### Tabs Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Index of active tab | _number \| string_ | `0` |
| type | Can be set to `line` `card` | _string_ | `line` |
| color | Tab color | _string_ | `#ee0a24` |
| background | Background color | _string_ | `white` |
| duration | Toggle tab's animation time | _number \| string_ | `0.3` | - |
| line-width | Width of tab line | _number \| string_ | Width of active tab |
| line-height | Height of tab line | _number \| string_ | `3px` |
| animated | Whether to change tabs with animation | _boolean_ | `false` |
| border | Whether to show border when `type="line"` | _boolean_ | `true` |
| ellipsis | Whether to ellipsis too long title | _boolean_ | `true` |
| sticky | Whether to use sticky mode | _boolean_ | `false` |
| swipeable | Whether to switch tabs with swipe gestrue in the content | _boolean_ | `false` |
| lazy-render | Whether to enable tab content lazy render | _boolean_ | `true` |
| scrollspy `v2.3.0` | Whether to use scrollspy mode | _boolean_ | `false` |
| offset-top | Offset top when use sticky mode | _number \| string_ | `0` |
| swipe-threshold | Set swipe tabs threshold | _number \| string_ | `4` | - |
| title-active-color | Title active color | _string_ | - |
| title-inactive-color | Title inactive color | _string_ | - |

### Tab Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | _string_ | - |
| disabled | Whether to disable tab | _boolean_ | `false` |
| dot `v2.3.0` | Whether to show red dot on the title | _boolean_ | `false` |
| badge `v2.5.6` | Content of the badge on the title | _number \| string_ | - |
| name `v2.0.6` | Identifier | _number \| string_ | Index of tab |
| url `v2.2.1` | Link | _string_ | - |
| to `v2.2.1` | Target route of the link, same as to of vue-router | _string \| object_ | - |
| replace `v2.2.1` | If true, the navigation will not leave a history record | _boolean_ | `false` |
| title-style `v2.2.14` | Custom title style | _any_ | - |

### Tabs Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Triggered when click tab | name，title |
| change | Triggered when active tab changed | name，title |
| disabled | Triggered when click disabled tab | name，title |
| rendered `v2.3.0` | Triggered when content first rendered in lazy-render mode | name，title |
| scroll | Triggered when tab scroll in sticky mode | object: { scrollTop, isFixed } |

### Tabs Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Tabs instance and call instance methods

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| resize | Resize Tabs when container element resized | - | void |

### Tabs Slots

| Name      | Description              |
| --------- | ------------------------ |
| nav-left  | Custom nav left content  |
| nav-right | Custom nav right content |

### Tab Slots

| Name    | Description      |
| ------- | ---------------- |
| default | Content of tab   |
| title   | Custom tab title |
