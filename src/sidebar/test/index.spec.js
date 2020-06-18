import { mount } from '../../../test';
import Sidebar from '..';

test('click event & change event', () => {
  const onClick = jest.fn();
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <win-sidebar @change="onChange">
        <win-sidebar-item>Text</win-sidebar-item>
        <win-sidebar-item @click="onClick">Text</win-sidebar-item>
      </win-sidebar>
    `,
    methods: {
      onClick,
      onChange,
    },
  });

  wrapper.findAll('.win-sidebar-item').at(1).trigger('click');
  expect(onClick).toHaveBeenCalledWith(1);
  expect(onChange).toHaveBeenCalledWith(1);
  wrapper.vm.$destroy();
});

test('v-model', () => {
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <win-sidebar v-model="active" @change="onChange">
        <win-sidebar-item>Text</win-sidebar-item>
        <win-sidebar-item>Text</win-sidebar-item>
      </win-sidebar>
    `,
    data() {
      return {
        active: 0,
      };
    },
    methods: {
      onChange,
    },
  });

  wrapper.findAll('.win-sidebar-item').at(1).trigger('click');
  expect(wrapper.vm.active).toEqual(1);
  expect(onChange).toHaveBeenCalledWith(1);
});

test('disabled prop', () => {
  const wrapper = mount({
    template: `
      <win-sidebar v-model="active">
        <win-sidebar-item>Text</win-sidebar-item>
        <win-sidebar-item disabled>Text</win-sidebar-item>
      </win-sidebar>
    `,
    data() {
      return {
        active: 0,
      };
    },
  });

  wrapper.findAll('.win-sidebar-item').at(1).trigger('click');
  expect(wrapper.vm.active).toEqual(0);
});

test('without parent', () => {
  const consoleError = console.error;
  try {
    console.error = jest.fn();
    mount(Sidebar);
  } catch (err) {
    console.error = consoleError;
    expect(err).toBeTruthy();
  }
});
