# Button

### Install

```js
import Vue from 'vue';
import { Button } from 'win-ui';

Vue.use(Button);
```

## Usage

### Type

```html
<win-button type="default">Default</win-button>
<win-button type="primary">Primary</win-button>
<win-button type="info">Info</win-button>
<win-button type="danger">Danger</win-button>
<win-button type="warning">Warning</win-button>
```

### Plain

```html
<win-button plain type="primary">Primary</win-button>
<win-button plain type="info">Danger</win-button>
```

### Hairline

```html
<win-button plain hairline type="primary">Hairline</win-button>
<win-button plain hairline type="info">Hairline</win-button>
```

### Disabled

```html
<win-button disabled type="primary">Diabled</win-button>
<win-button disabled type="info">Diabled</win-button>
```

### Loading

```html
<win-button loading type="primary" />
<win-button loading type="primary" loading-type="spinner" />
<win-button loading type="info" loading-text="Loading..." />
```

### Shape

```html
<win-button square type="primary">Square</win-button>
<win-button round type="info">Round</win-button>
```

### Icon

```html
<win-button icon="star-o" type="primary" />
<win-button icon="star-o" type="primary">Button</win-button>
<win-button icon="https://img.yzcdn.cn/vant/logo.png" type="info"
  >Button</win-button
>
```

### Size

```html
<win-button type="primary" size="large">Large</win-button>
<win-button type="primary" size="normal">Normal</win-button>
<win-button type="primary" size="small">Small</win-button>
<win-button type="primary" size="mini">Mini</win-button>
```

### Block Element

```html
<win-button type="primary" block>Block Element</win-button>
```

### Route

```html
<win-button type="primary" url="/vant/mobile.html">URL</win-button>
<win-button type="primary" to="index">Vue Router</win-button>
```

### Custom Color

```html
<win-button color="#7232dd">Pure</win-button>
<win-button color="#7232dd" plain>Pure</win-button>
<win-button color="linear-gradient(to right, #4bb0ff, #6149f6)"
  >Gradient</win-button
>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Can be set to `primary` `info` `warning` `danger` | _string_ | `default` |
| size | Can be set to `large` `small` `mini` | _string_ | `normal` |
| text | Text | _string_ | - |
| color `v2.1.8` | Color, support linear-gradient | _string_ | - |
| icon | Left Icon | _string_ | - |
| icon-prefix `v2.6.0` | Icon className prefix | _string_ | `win-icon` |
| tag | HTML Tag | _string_ | `button` |
| native-type | Native Type Attribute | _string_ | `''` |
| plain | Whether to be plain button | _boolean_ | `false` |
| block | Whether to set display block | _boolean_ | `false` |
| round | Whether to be round button | _boolean_ | `false` |
| square | Whether to be square button | _boolean_ | `false` |
| disabled | Whether to disable button | _boolean_ | `false` |
| loading | Whether show loading status | _boolean_ | `false` |
| loading-text | Loading text | _string_ | - |
| loading-type | Loading type, can be set to `spinner` | _string_ | `circular` |
| loading-size | Loading icon size | _string_ | `20px` |
| url | Link URL | _string_ | - |
| to | Target route of the link, same as to of vue-router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Triggered when click button and not disabled or loading | _event: Event_ |
| touchstart | Triggered when touch start | _event: TouchEvent_ |
