import { later, mockScrollIntoView } from '../../../test';
import { mountForm, mountSimpleRulesForm, getSimpleRules } from './shared';

test('submit method', async () => {
  const onSubmit = jest.fn();

  mountForm({
    template: `
        <win-form ref="form" @submit="onSubmit">
          <win-field name="A" value="bar" />
          <win-button native-type="submit" />
        </win-form>
      `,
    mounted() {
      this.$refs.form.submit();
    },
    methods: {
      onSubmit,
    },
  });

  await later();
  expect(onSubmit).toHaveBeenCalledWith({ A: 'bar' });
});

test('validate method - validate all fields', (done) => {
  mountSimpleRulesForm({
    mounted() {
      this.$refs.form.validate().catch((err) => {
        expect(err).toEqual([
          { message: 'A failed', name: 'A' },
          { message: 'B failed', name: 'B' },
        ]);
        done();
      });
    },
  });
});

test('validate method - validate one field and passed', (done) => {
  mountSimpleRulesForm({
    mounted() {
      this.$refs.form.validate('A').catch((err) => {
        expect(err).toEqual({ message: 'A failed', name: 'A' });
        done();
      });
    },
  });
});

test('validate method - validate one field and failed', (done) => {
  mountForm({
    template: `
      <win-form ref="form" @failed="onFailed">
        <win-field name="A" :rules="rulesA" value="123" />
        <win-field name="B" :rules="rulesB" value="" />
        <win-button native-type="submit" />
      </win-form>
    `,
    data: getSimpleRules,
    mounted() {
      this.$refs.form.validate('A').then(done);
    },
  });
});

test('validate method - unexisted name', (done) => {
  mountSimpleRulesForm({
    mounted() {
      this.$refs.form.validate('unexisted').catch(done);
    },
  });
});

test('resetValidation method - reset all fields', (done) => {
  const wrapper = mountSimpleRulesForm({
    mounted() {
      this.$refs.form.validate().catch(() => {
        this.$refs.form.resetValidation();
        const errors = wrapper.findAll('.win-field__error-message');
        expect(errors.length).toEqual(0);
        done();
      });
    },
  });
});

test('resetValidation method - reset one field', (done) => {
  const wrapper = mountSimpleRulesForm({
    mounted() {
      this.$refs.form.validate().catch(() => {
        this.$refs.form.resetValidation('A');
        expect(wrapper).toMatchSnapshot();
        done();
      });
    },
  });
});

test('scrollToField method', (done) => {
  const fn = mockScrollIntoView();
  mountSimpleRulesForm({
    mounted() {
      this.$refs.form.scrollToField('unknown');
      expect(fn).toHaveBeenCalledTimes(0);

      this.$refs.form.scrollToField('A');
      expect(fn).toHaveBeenCalledTimes(1);
      done();
    },
  });
});
