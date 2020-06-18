import Tabs from '../../tabs';
import { mount, later, triggerDrag, mockScrollTop } from '../../../test';

function createWrapper(options = {}) {
  return mount({
    template: `
      <win-tabs
        :color="color"
        :type="type"
        :sticky="sticky"
        :line-width="lineWidth"
        :lazy-render="lazyRender"
        @change="onChange"
      >
        ${options.extraTemplate || ''}
        <win-tab title="title1">Text</win-tab>
        <win-tab title="title2">Text</win-tab>
        <win-tab title="title3" disabled>Text</win-tab>
      </win-tabs>
    `,
    data() {
      return {
        color: '#ee0a24',
        type: 'line',
        sticky: true,
        lineWidth: 2,
        lazyRender: true,
      };
    },
    ...options,
  });
}

test('click to switch tab', async () => {
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <win-tabs @change="onChange">
        <win-tab title="title1">Text</win-tab>
        <win-tab title="title2">Text</win-tab>
        <win-tab title="title3" disabled>Text</win-tab>
      </win-tabs>
    `,
    methods: {
      onChange,
    },
  });

  await later();
  expect(wrapper).toMatchSnapshot();

  const tabs = wrapper.findAll('.win-tab');
  tabs.at(1).trigger('click');
  tabs.at(2).trigger('click');
  await later();
  expect(wrapper).toMatchSnapshot();
  expect(onChange).toHaveBeenCalledTimes(1);
});

test('swipe to switch tab', async () => {
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <win-tabs swipeable @change="onChange">
        <win-tab title="title1">Text</win-tab>
        <win-tab title="title2">Text</win-tab>
        <win-tab title="title3" disabled>Text</win-tab>
      </win-tabs>
    `,
    methods: {
      onChange,
    },
  });

  const content = wrapper.find('.win-tabs__content');
  await later();
  expect(wrapper).toMatchSnapshot();

  triggerDrag(content, -100, 0);
  expect(wrapper).toMatchSnapshot();
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith(1, 'title2');

  triggerDrag(content, -100, 0);
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(wrapper).toMatchSnapshot();

  await later();
  wrapper.destroy();
});

test('change tabs data', async () => {
  const wrapper = createWrapper();

  await later();

  expect(wrapper).toMatchSnapshot();

  wrapper.setData({
    swipeable: false,
    sticky: false,
    type: 'card',
    color: 'blue',
  });

  await later();
  expect(wrapper).toMatchSnapshot();
});

test('lazy render', async () => {
  const wrapper = createWrapper();

  expect(wrapper).toMatchSnapshot();

  wrapper.setData({
    lazyRender: false,
  });

  await later();
  expect(wrapper).toMatchSnapshot();
});

test('render nav-left & nav-right slot', async () => {
  const wrapper = createWrapper({
    extraTemplate: `
      <template v-slot:nav-left>Nav Left</template>
      <template v-slot:nav-right>Nav Right</template>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});

test('border props', async () => {
  const wrapper = mount(Tabs, {
    propsData: {
      border: false,
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('click event', async () => {
  const onClick = jest.fn();
  const onDisabled = jest.fn();

  const wrapper = mount({
    template: `
      <win-tabs @click="onClick" @disabled="onDisabled">
        <win-tab title="title1">Text</win-tab>
        <win-tab title="title2" disabled>Text</win-tab>
      </win-tabs>
    `,
    methods: {
      onClick,
      onDisabled,
    },
  });

  const tabs = wrapper.findAll('.win-tab');

  tabs.at(0).trigger('click');
  expect(onClick).toHaveBeenCalledWith(0, 'title1');

  tabs.at(1).trigger('click');
  expect(onDisabled).toHaveBeenCalledWith(1, 'title2');
});

test('name prop', async () => {
  const onClick = jest.fn();
  const onChange = jest.fn();
  const onDisabled = jest.fn();

  const wrapper = mount({
    template: `
      <win-tabs @click="onClick" @disabled="onDisabled" @change="onChange">
        <win-tab title="title1" name="a">Text</win-tab>
        <win-tab title="title2" name="b">Text</win-tab>
        <win-tab title="title3" name="c" disabled>Text</win-tab>
      </win-tabs>
    `,
    methods: {
      onClick,
      onChange,
      onDisabled,
    },
  });

  await later();
  expect(wrapper).toMatchSnapshot();

  const tabs = wrapper.findAll('.win-tab');
  tabs.at(1).trigger('click');

  expect(onClick).toHaveBeenCalledWith('b', 'title2');
  expect(onChange).toHaveBeenCalledWith('b', 'title2');
  expect(onChange).toHaveBeenCalledTimes(1);

  tabs.at(2).trigger('click');
  expect(onDisabled).toHaveBeenCalledWith('c', 'title3');
  expect(onChange).toHaveBeenCalledTimes(1);
});

test('set name to zero', async () => {
  const onClick = jest.fn();

  const wrapper = mount({
    template: `
      <win-tabs @click="onClick">
        <win-tab title="title1" :name="1">Text</win-tab>
        <win-tab title="title2" :name="0">Text</win-tab>
      </win-tabs>
    `,
    methods: {
      onClick,
    },
  });

  const tabs = wrapper.findAll('.win-tab');
  tabs.at(1).trigger('click');
  expect(onClick).toHaveBeenCalledWith(0, 'title2');
});

test('title-style prop', () => {
  const wrapper = mount({
    template: `
      <win-tabs>
        <win-tab title="title1" title-style="color: red;">Text</win-tab>
      </win-tabs>
    `,
  });

  expect(wrapper.find('.win-tab').element.style.color).toEqual('red');
});

test('dot prop', () => {
  const wrapper = mount({
    template: `
      <win-tabs>
        <win-tab dot>Text</win-tab>
      </win-tabs>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});

test('info prop', () => {
  const wrapper = mount({
    template: `
      <win-tabs>
        <win-tab info="10">Text</win-tab>
      </win-tabs>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});

test('scrollspy', async () => {
  const onChange = jest.fn();
  window.scrollTo = jest.fn();

  const wrapper = mount({
    template: `
      <win-tabs scrollspy sticky @change="onChange">
        <win-tab name="a" title="title1">Text</win-tab>
        <win-tab name="b" title="title2">Text</win-tab>
        <win-tab name="c" title="title3">Text</win-tab>
      </win-tabs>
    `,
    methods: {
      onChange,
    },
  });

  await later();
  expect(wrapper).toMatchSnapshot();

  const tabs = wrapper.findAll('.win-tab');
  tabs.at(2).trigger('click');
  expect(onChange).toHaveBeenCalledWith('c', 'title3');

  await later();
  mockScrollTop(100);
  expect(wrapper).toMatchSnapshot();
  expect(onChange).toHaveBeenCalledWith('c', 'title3');
});

test('rendered event', async () => {
  const onRendered = jest.fn();

  const wrapper = mount({
    template: `
      <win-tabs v-model="active" @rendered="onRendered">
        <win-tab name="a" title="title1">Text</win-tab>
        <win-tab name="b" title="title2">Title2</win-tab>
      </win-tabs>
    `,
    data() {
      return {
        active: 'a',
      };
    },
    methods: {
      onRendered,
    },
  });

  await later();
  expect(onRendered).toHaveBeenCalledWith('a', 'title1');
  expect(wrapper.find('.win-tab__pane')).toMatchSnapshot();

  const tabs = wrapper.findAll('.win-tab');
  tabs.at(1).trigger('click');
  tabs.at(0).trigger('click');

  await later();
  expect(onRendered).toHaveBeenCalledTimes(2);
});

test('should not trigger rendered event when disable lazy-render', async () => {
  const onRendered = jest.fn();

  mount({
    template: `
      <win-tabs :lazy-render="false" @rendered="onRendered">
        <win-tab>Text</win-tab>
        <win-tab>Title2</win-tab>
      </win-tabs>
    `,
    methods: {
      onRendered,
    },
  });

  await later();
  expect(onRendered).toHaveBeenCalledTimes(0);
});
