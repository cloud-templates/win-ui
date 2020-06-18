import Collapse from '..';
import CollapseItem from '../../collapse-item';
import { later, mount } from '../../../test';

const component = {
  template: `
  <win-collapse v-model="active" :accordion="accordion" :border="border">
    <win-collapse-item title="a" name="first">content</win-collapse-item>
    <win-collapse-item title="b">content</win-collapse-item>
    <win-collapse-item title="c">content</win-collapse-item>
  </win-collapse>
  `,
  props: {
    accordion: Boolean,
    border: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      active: this.accordion ? '' : [],
    };
  },
};

test('basic mode', async () => {
  const wrapper = mount(component);

  const titles = wrapper.findAll('.win-collapse-item__title');
  titles.at(0).trigger('click');
  expect(wrapper.vm.active).toEqual(['first']);

  await later();
  titles.at(1).trigger('click');
  expect(wrapper.vm.active).toEqual(['first', 1]);

  await later();
  titles.at(0).trigger('click');
  expect(wrapper.vm.active).toEqual([1]);

  wrapper.destroy();
});

test('accordion', async () => {
  const wrapper = mount(component, {
    propsData: {
      accordion: true,
    },
  });

  const titles = wrapper.findAll('.win-collapse-item__title');
  titles.at(0).trigger('click');
  expect(wrapper.vm.active).toEqual('first');

  titles.at(1).trigger('click');
  expect(wrapper.vm.active).toEqual(1);

  await later();
  titles.at(0).trigger('click');
  expect(wrapper.vm.active).toEqual('first');

  titles.at(0).trigger('click');
  expect(wrapper.vm.active).toEqual('');
});

test('render collapse-item slot', () => {
  const wrapper = mount({
    template: `
      <win-collapse v-model="active">
        <win-collapse-item>
          <template v-slot:title>this is title</template>
          <template v-slot:value>this is value</template>
          <template v-slot:icon>this is icon</template>
          <template v-slot:right-icon>this is right icon</template>
        </win-collapse-item>
      </win-collapse>
      `,
    data() {
      return {
        active: [],
      };
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('disable border', () => {
  const wrapper = mount(component, {
    propsData: {
      border: false,
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('lazy render collapse content', async () => {
  const wrapper = mount({
    template: `
      <collapse v-model="active">
        <collapse-item title="a" name="first" style="padding: 0;">content</collapse-item>
        <collapse-item title="b" style="padding: 0;">{{ content }}</collapse-item>
      </collapse>
    `,
    components: {
      Collapse,
      CollapseItem,
    },
    data() {
      return {
        content: '',
        active: [],
      };
    },
  });

  const titles = wrapper.findAll('.win-collapse-item__title');

  titles.at(1).trigger('click');
  wrapper.vm.content = 'content';
  expect(wrapper).toMatchSnapshot();
});

test('warn when value type is incorrect', () => {
  const originConsoleError = console.error;
  const error = jest.fn();
  console.error = error;

  mount({
    template: `
    <win-collapse v-model="active">
      <win-collapse-item title="a" name="first"></win-collapse-item>
    </win-collapse>
    `,
    data() {
      return {
        active: 0,
      };
    },
  });

  expect(error).toHaveBeenCalledTimes(1);
  console.error = originConsoleError;
});
