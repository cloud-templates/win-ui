# Empty

### Install

```js
import Vue from 'vue';
import { Empty } from 'win-ui';

Vue.use(Empty);
```

## Usage

### Basic Usage

```html
<win-empty description="Description" />
```

### Image Type

Use the image prop to display different placeholder images

```html
<!-- Error -->
<win-empty image="error" description="Description" />
<!-- Network -->
<win-empty image="network" description="Description" />
<!-- Search -->
<win-empty image="search" description="Description" />
```

### Custom Image

```html
<win-empty
  class="custom-image"
  image="https://img.yzcdn.cn/vant/leaf.jpg"
  description="Description"
/>

<style>
  .custom-image img {
    border-radius: 100%;
  }
</style>
```

### Bottom Content

```html
<win-empty description="Description">
  <win-button round type="danger" class="bottom-button">
    Button
  </win-button>
</win-empty>

<style>
  .bottom-button {
    width: 160px;
    height: 40px;
  }
</style>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| image | Image type，can be set to `error` `network` `search` or image URL | _string_ | `default` |
| description | Desciption | _string_ | - |

### Slots

| Name        | Description           |
| ----------- | --------------------- |
| default     | Custom bottom content |
| image       | Custom image          |
| description | Custom description    |
