import { mount } from '../../../test';

test('click grid item', () => {
  const onClick = jest.fn();
  const wrapper = mount({
    template: `
      <win-grid>
        <win-grid-item @click="onClick" />
      </win-grid>
    `,
    methods: {
      onClick,
    },
  });

  const Item = wrapper.find('.win-grid-item__content');
  Item.trigger('click');

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('sqaure and set gutter', () => {
  const wrapper = mount({
    template: `
      <win-grid square :column-num="2" gutter="10rem">
        <win-grid-item />
        <win-grid-item />
        <win-grid-item />
      </win-grid>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});

test('icon-size prop', () => {
  const wrapper = mount({
    template: `
      <win-grid icon-size="10">
        <win-grid-item icon="success" />
      </win-grid>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});

test('render icon-slot', () => {
  const wrapper = mount({
    template: `
      <win-grid icon-size="10">
        <win-grid-item info="1">
          <div slot="icon" />
        </win-grid-item>
      </win-grid>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});
