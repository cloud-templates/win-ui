import VueRouter from 'vue-router';
import { mount, later, mockGetBoundingClientRect } from '../../../test';
import Vue from 'vue';
import Tabbar from '..';

Vue.use(VueRouter);

test('route mode', async () => {
  const router = new VueRouter();
  const wrapper = mount({
    router,
    template: `
      <win-tabbar route>
        <win-tabbar-item replace to="/">
          Tab
        </win-tabbar-item>
        <win-tabbar-item replace to="/search">
          Tab
        </win-tabbar-item>
        <win-tabbar-item replace :to="{ path: '/star' }">
          Tab
        </win-tabbar-item>
        <win-tabbar-item>
          Tab
        </win-tabbar-item>
      </win-tabbar>
    `,
  });

  expect(wrapper).toMatchSnapshot();

  const items = wrapper.findAll('.win-tabbar-item');

  items.at(1).trigger('click');
  await later();
  expect(wrapper).toMatchSnapshot();

  items.at(2).trigger('click');
  items.at(3).trigger('click');
  await later();
  expect(wrapper).toMatchSnapshot();
});

test('route mode match by name', async () => {
  const Foo = { render: () => 'Foo' };
  const Bar = { render: () => 'Bar' };
  const router = new VueRouter({
    routes: [
      { path: '/foo', component: Foo, name: 'foo' },
      { path: '/bar', component: Bar, name: 'bar' },
    ],
  });

  const wrapper = mount({
    router,
    template: `
      <win-tabbar route>
        <win-tabbar-item :to="{ name: 'foo' }">
          Tab
        </win-tabbar-item>
        <win-tabbar-item :to="{ name: 'bar' }">
          Tab
        </win-tabbar-item>
      </win-tabbar>
    `,
  });

  const items = wrapper.findAll('.win-tabbar-item');
  items.at(0).trigger('click');
  await later();
  expect(wrapper).toMatchSnapshot();

  items.at(1).trigger('click');
  await later();
  expect(wrapper).toMatchSnapshot();
});

test('router NavigationDuplicated', async (done) => {
  expect(async () => {
    const router = new VueRouter();
    const wrapper = mount({
      router,
      template: `
      <win-tabbar route>
        <win-tabbar-item replace to="/home">
          Tab
        </win-tabbar-item>
      </win-tabbar>
    `,
    });

    const item = wrapper.find('.win-tabbar-item');
    item.trigger('click');
    item.trigger('click');

    await later();
    done();
  }).not.toThrow();
});

test('watch tabbar value', () => {
  const wrapper = mount({
    template: `
      <win-tabbar :value="value">
        <win-tabbar-item>Tab</win-tabbar-item>
        <win-tabbar-item>Tab</win-tabbar-item>
      </win-tabbar>
    `,
    data() {
      return {
        value: 0,
      };
    },
  });

  wrapper.setData({ value: 1 });
  expect(wrapper).toMatchSnapshot();
});

test('click event', () => {
  const onClick = jest.fn();
  const onChange = jest.fn();

  const wrapper = mount({
    template: `
      <win-tabbar @change="onChange">
        <win-tabbar-item @click="onClick">Tab</win-tabbar-item>
      </win-tabbar>
    `,
    methods: {
      onClick,
      onChange,
    },
  });

  wrapper.find('.win-tabbar-item').trigger('click');
  expect(onClick).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledTimes(0);
});

test('name prop', () => {
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <win-tabbar :value="value" @change="onChange">
        <win-tabbar-item name="a">Tab</win-tabbar-item>
        <win-tabbar-item name="b">Tab</win-tabbar-item>
      </win-tabbar>
    `,
    data() {
      return {
        value: 'a',
      };
    },
    methods: {
      onChange,
    },
  });

  wrapper.findAll('.win-tabbar-item').at(1).trigger('click');

  expect(onChange).toHaveBeenCalledWith('b');
});

test('disable border', () => {
  const wrapper = mount(Tabbar, {
    propsData: {
      border: false,
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('placeholder prop', () => {
  const restore = mockGetBoundingClientRect({ height: 50 });

  const wrapper = mount(Tabbar, {
    propsData: {
      fixed: true,
      placeholder: true,
    },
  });

  expect(wrapper).toMatchSnapshot();

  restore();
});
