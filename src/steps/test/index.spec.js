import { mount } from '../../../test';

test('icon slot', () => {
  const wrapper = mount({
    template: `
    <win-steps :active="1">
      <win-step>
        <template v-slot:inactive-icon>Custim Inactive Icon</template>
        A
      </win-step>
      <win-step>
        <template v-slot:active-icon>Custim Active Icon</template>
        B
      </win-step>
      <win-step>
        <template v-slot:inactive-icon>Custim Inactive Icon</template>
        C
      </win-step>
    </win-steps>
    `,
  });
  expect(wrapper).toMatchSnapshot();
});

test('click-step event', () => {
  const onClickStep = jest.fn();
  const wrapper = mount({
    template: `
      <win-steps :active="1" @click-step="onClickStep">
        <win-step>A</win-step>
        <win-step>B</win-step>
        <win-step>C</win-step>
      </win-steps>
    `,
    methods: {
      onClickStep,
    },
  });

  wrapper.find('.win-step').trigger('click');
  expect(onClickStep).toHaveBeenCalledTimes(0);

  wrapper.find('.win-step__title').trigger('click');
  expect(onClickStep).toHaveBeenCalledWith(0);

  wrapper.findAll('.win-step__circle-container').at(2).trigger('click');
  expect(onClickStep).toHaveBeenCalledTimes(2);
  expect(onClickStep).toHaveBeenLastCalledWith(2);
});
