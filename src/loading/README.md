# Loading

### Install

```js
import Vue from 'vue';
import { Loading } from 'wint';

Vue.use(Loading);
```

## Usage

### Type

```html
<win-loading /> <win-loading type="spinner" />
```

### Color

```html
<win-loading color="#1989fa" /> <win-loading type="spinner" color="#1989fa" />
```

### Size

```html
<win-loading size="24" /> <win-loading type="spinner" size="24px" />
```

### Text

```html
<win-loading size="24px">Loading...</win-loading>
```

### Vertical

```html
<win-loading size="24px" vertical>Loading...</win-loading>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| color | Loading color | _string_ | `#c9c9c9` |
| type | Can be set to `spinner` | _string_ | `circular` |
| size | Icon size | _number \| string_ | `30px` |
| text-size | Text font size | _number \| string_ | `14px` |
| vertical | Whether to arrange icons and text content vertically | _boolean_ | `false` |

### Slots

| Name    | Description  |
| ------- | ------------ |
| default | Loading text |
