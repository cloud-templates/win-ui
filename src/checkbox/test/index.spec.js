import Checkbox from '..';
import { mount, later } from '../../../test';

test('switch checkbox', async () => {
  const wrapper = mount(Checkbox);

  wrapper.vm.$on('input', (value) => {
    wrapper.setData({ value });
  });

  const icon = wrapper.find('.win-checkbox__icon');
  icon.trigger('click');
  await later();
  icon.trigger('click');
  await later();
  expect(wrapper.emitted('input')).toEqual([[true], [false]]);
  expect(wrapper.emitted('change')).toEqual([[true], [false]]);
});

test('disabled', () => {
  const wrapper = mount(Checkbox, {
    propsData: {
      disabled: true,
    },
  });

  wrapper.find('.win-checkbox__icon').trigger('click');
  expect(wrapper.emitted('input')).toBeFalsy();
});

test('label disabled', () => {
  const wrapper = mount(Checkbox, {
    scopedSlots: {
      default: () => 'Label',
    },
    propsData: {
      labelDisabled: true,
    },
  });

  wrapper.find('.win-checkbox__label').trigger('click');
  expect(wrapper.emitted('input')).toBeFalsy();
  expect(wrapper).toMatchSnapshot();
});

test('checkbox group', async () => {
  const wrapper = mount({
    template: `
      <win-checkbox-group v-model="result" :max="2">
        <win-checkbox name="a" />
        <win-checkbox name="b" />
        <win-checkbox name="c" />
      </win-checkbox-group>
    `,
    data() {
      return {
        result: [],
      };
    },
  });

  const icons = wrapper.findAll('.win-checkbox__icon');
  icons.at(0).trigger('click');
  await later();
  icons.at(1).trigger('click');
  await later();
  icons.at(2).trigger('click');
  expect(wrapper.vm.result).toEqual(['a', 'b']);

  await later();
  icons.at(0).trigger('click');
  await later();
  expect(wrapper.vm.result).toEqual(['b']);
});

test('click event', async () => {
  const onClick = jest.fn();
  const wrapper = mount(Checkbox, {
    listeners: {
      click: onClick,
    },
  });

  wrapper.trigger('click');
  await later();
  expect(onClick).toHaveBeenCalledTimes(1);

  const icon = wrapper.find('.win-checkbox__icon');
  icon.trigger('click');
  await later();
  expect(onClick).toHaveBeenCalledTimes(2);
});

test('label-position prop', () => {
  const wrapper = mount(Checkbox, {
    scopedSlots: {
      default: () => 'Label',
    },
    propsData: {
      labelPosition: 'left',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('icon-size prop', () => {
  const wrapper = mount({
    template: `
      <win-checkbox-group icon-size="10rem">
        <win-checkbox>label</win-checkbox>
        <win-checkbox icon-size="5rem">label</win-checkbox>
      </win-checkbox-group>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});

test('checked-color prop', () => {
  const wrapper = mount({
    template: `
      <win-checkbox-group :value="['a', 'b']" checked-color="black">
        <win-checkbox name="a" :value="true">label</win-checkbox>
        <win-checkbox name="b" :value="true" checked-color="white">label</win-checkbox>
      </win-checkbox-group>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});

test('bind-group prop', async () => {
  const wrapper = mount({
    template: `
      <win-checkbox-group v-model="result">
        <win-checkbox v-model="value" :bind-group="false" />
        <win-checkbox v-for="item in list" :key="item" :name="item"></win-checkbox>
      </win-checkbox-group>
    `,
    data() {
      return {
        value: false,
        result: [],
        list: ['a', 'b', 'c'],
      };
    },
  });

  const icons = wrapper.findAll('.win-checkbox__icon');
  icons.at(0).trigger('click');
  await later();
  expect(wrapper.vm.result).toEqual([]);
  expect(wrapper.vm.value).toBeTruthy();
});

test('toggleAll method', async () => {
  const wrapper = mount({
    template: `
      <win-checkbox-group v-model="result" ref="group">
        <win-checkbox name="a" />
        <win-checkbox name="b" />
        <win-checkbox name="c" />
      </win-checkbox-group>
    `,
    data() {
      return {
        result: ['a'],
      };
    },
    methods: {
      toggleAll(checked) {
        this.$refs.group.toggleAll(checked);
      },
    },
  });

  wrapper.vm.toggleAll();
  await later();
  expect(wrapper.vm.result).toEqual(['b', 'c']);

  wrapper.vm.toggleAll(false);
  await later();
  expect(wrapper.vm.result).toEqual([]);

  wrapper.vm.toggleAll(true);
  await later();
  expect(wrapper.vm.result).toEqual(['a', 'b', 'c']);
});
