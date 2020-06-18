# Tabbar

### Install

```js
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'win-ui';

Vue.use(Tabbar);
Vue.use(TabbarItem);
```

## Usage

### Basic Usage

```html
<win-tabbar v-model="active">
  <win-tabbar-item icon="home-o">Tab</win-tabbar-item>
  <win-tabbar-item icon="search">Tab</win-tabbar-item>
  <win-tabbar-item icon="friends-o">Tab</win-tabbar-item>
  <win-tabbar-item icon="setting-o">Tab</win-tabbar-item>
</win-tabbar>
```

```js
export default {
  data() {
    return {
      active: 0,
    };
  },
};
```

### Match by name

```html
<win-tabbar v-model="active">
  <win-tabbar-item name="home" icon="home-o">Tab</win-tabbar-item>
  <win-tabbar-item name="search" icon="search">Tab</win-tabbar-item>
  <win-tabbar-item name="friends" icon="friends-o">Tab</win-tabbar-item>
  <win-tabbar-item name="setting" icon="setting-o">Tab</win-tabbar-item>
</win-tabbar>
```

```js
export default {
  data() {
    return {
      active: 'home',
    };
  },
};
```

### Show Badge

```html
<win-tabbar v-model="active">
  <win-tabbar-item icon="home-o">Tab</win-tabbar-item>
  <win-tabbar-item icon="search" dot>Tab</win-tabbar-item>
  <win-tabbar-item icon="friends-o" badge="5">Tab</win-tabbar-item>
  <win-tabbar-item icon="setting-o" badge="20">Tab</win-tabbar-item>
</win-tabbar>
```

### Custom Icon

Use `icon` slot to custom icon

```html
<win-tabbar v-model="active">
  <win-tabbar-item badge="3">
    <span>Custom</span>
    <template #icon="props">
      <img :src="props.active ? icon.active : icon.inactive" />
    </template>
  </win-tabbar-item>
  <win-tabbar-item icon="search">Tab</win-tabbar-item>
  <win-tabbar-item icon="setting-o">Tab</win-tabbar-item>
</win-tabbar>
```

```js
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
      },
    };
  },
};
```

### Custom Color

```html
<win-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
  <win-tabbar-item icon="home-o">Tab</win-tabbar-item>
  <win-tabbar-item icon="search">Tab</win-tabbar-item>
  <win-tabbar-item icon="friends-o">Tab</win-tabbar-item>
  <win-tabbar-item icon="setting-o">Tab</win-tabbar-item>
</win-tabbar>
```

### Change Event

```html
<win-tabbar v-model="active" @change="onChange">
  <win-tabbar-item icon="home-o">Tab1</win-tabbar-item>
  <win-tabbar-item icon="search">Tab2</win-tabbar-item>
  <win-tabbar-item icon="friends-o">Tab3</win-tabbar-item>
  <win-tabbar-item icon="setting-o">Tab4</win-tabbar-item>
</win-tabbar>
```

```js
import { Notify } from 'win-ui';

export default {
  methods: {
    onChange(index) {
      Notify({ type: 'primary', message: index });
    },
  },
};
```

### Route Mode

```html
<router-view />

<win-tabbar route>
  <win-tabbar-item replace to="/home" icon="home-o">
    Tab
  </win-tabbar-item>
  <win-tabbar-item replace to="/search" icon="search">
    Tab
  </win-tabbar-item>
</win-tabbar>
```

## API

### Tabbar Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Identifier of current tab | _number \| string_ | `0` |
| fixed | Whether to fixed bottom | _boolean_ | `true` |
| border | Whether to show border | _boolean_ | `true` |
| z-index | Z-index | _number \| string_ | `1` |
| active-color | Color of active tab item | _string_ | `#1989fa` |
| inactive-color | Color of inactive tab item | _string_ | `#7d7e80` |
| route | Whether to enable route mode | _boolean_ | `false` |
| placeholder `v2.6.0` | Whether to generage a placeholder element when fixed | _boolean_ | `false` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `false` |

### Tabbar Events

| Event  | Description                      | Arguments                    |
| ------ | -------------------------------- | ---------------------------- |
| change | Triggered when change active tab | active: index of current tab |

### TabbarItem Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| name | Identifier | _number \| string_ | Item index |
| icon | Icon name | _string_ | - |
| icon-prefix `v2.5.3` | Icon className prefix | _string_ | `win-icon` |
| dot | Whether to show red dot | _boolean_ | - |
| badge `v2.5.6` | Content of the badge | _number \| string_ | `''` |
| url | Link | _string_ | - |
| to | Target route of the link, same as to of vue-router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |

### TabbarItem Slots

| Name | Description | SlotProps |
| ---- | ----------- | --------- |
| icon | Custom icon | active    |
