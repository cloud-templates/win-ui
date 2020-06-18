import { mountForm, submitForm } from './shared';

function mountFormWithChild({ template, data }) {
  const onSubmit = jest.fn();
  const onFailed = jest.fn();

  const wrapper = mountForm({
    template: `
      <win-form @submit="onSubmit" @failed="onFailed">
        <win-field name="A" :rules="[{ required: true, message: 'foo' }]">
          <template #input>${template}</template>
        </win-field>
        <win-button native-type="submit" />
      </win-form>
    `,
    data,
    methods: {
      onSubmit,
      onFailed,
    },
  });

  return {
    wrapper,
    onSubmit,
    onFailed,
  };
}

test('use switch', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: '<win-switch v-model="value" />',
    data() {
      return { value: false };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: false },
  });

  wrapper.setData({ value: true });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: true });
});

test('use checkbox', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: '<win-checkbox v-model="value" />',
    data() {
      return { value: false };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: false },
  });

  wrapper.setData({ value: true });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: true });
});

test('use checkbox-group', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: `
      <win-checkbox-group v-model="checkboxGroup">
        <win-checkbox name="1">1</win-checkbox>
        <win-checkbox name="2">2</win-checkbox>
      </win-checkbox-group>
    `,
    data() {
      return { checkboxGroup: [] };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: [] },
  });

  wrapper.setData({ checkboxGroup: ['1'] });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: ['1'] });
});

test('use radio', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: `
      <win-radio-group v-model="radio">
        <win-radio name="1">1</win-radio>
        <win-radio name="2">2</win-radio>
      </win-radio-group>
    `,
    data() {
      return { radio: '' };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: '' },
  });

  wrapper.setData({ radio: '1' });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: '1' });
});

test('use stepper', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: '<win-stepper v-model="value" :min="0" />',
    data() {
      return { value: 0 };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: 0 },
  });

  wrapper.setData({ value: 1 });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: 1 });
});

test('use rate', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: '<win-rate v-model="value" />',
    data() {
      return { value: 0 };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: 0 },
  });

  wrapper.setData({ value: 1 });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: 1 });
});

test('use slider', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: '<win-slider v-model="value" />',
    data() {
      return { value: 0 };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: 0 },
  });

  wrapper.setData({ value: 50 });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: 50 });
});

test('use uploader', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: '<win-uploader v-model="value" />',
    data() {
      return { value: [] };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: [] },
  });

  wrapper.setData({ value: [{ url: 'foo' }] });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: [{ url: 'foo' }] });
});

test('should not get formValue from button slot', async () => {
  const onSubmit = jest.fn();

  const wrapper = mountForm({
    template: `
      <win-form @submit="onSubmit">
        <win-field name="A" value="foo" :rules="[{ required: true, message: 'foo' }]">
          <template #button>
            <win-checkbox :value="false" />
          </template>
        </win-field>
        <win-button native-type="submit" />
      </win-form>
    `,
    methods: {
      onSubmit,
    },
  });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: 'foo' });
});
