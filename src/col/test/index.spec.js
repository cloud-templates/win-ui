import Col from '..';
import Row from '../../row';
import { mount } from '../../../test';

test('Col click event', () => {
  const wrapper = mount(Col);
  wrapper.trigger('click');

  expect(wrapper.emitted('click')).toBeTruthy();
});

test('Row click event', () => {
  const wrapper = mount(Row);
  wrapper.trigger('click');

  expect(wrapper.emitted('click')).toBeTruthy();
});

test('gutter prop', () => {
  const wrapper = mount({
    template: `
      <win-row gutter="24">
        <win-col span="24">24</win-col>

        <win-col span="12">12</win-col>
        <win-col span="12">12</win-col>

        <win-col span="8">8</win-col>
        <win-col span="8">8</win-col>
        <win-col span="8">8</win-col>

        <win-col span="6">6</win-col>
        <win-col span="6">6</win-col>
        <win-col span="6">6</win-col>
        <win-col span="6">6</win-col>

        <win-col span="7">7</win-col>
        <win-col span="6">6</win-col>
        <win-col span="5">5</win-col>
        <win-col span="4">4</win-col>
        <win-col span="3">3</win-col>
        <win-col span="2">2</win-col>
      </win-row>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});
