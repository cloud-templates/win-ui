import { mount, later } from '../../../test';

export async function submitForm(wrapper) {
  wrapper.find('.win-button').trigger('click');
  return later();
}

export function mountForm(options) {
  return mount(options, { attachToDocument: true });
}

export function getSimpleRules() {
  return {
    rulesA: [{ required: true, message: 'A failed' }],
    rulesB: [{ required: true, message: 'B failed' }],
  };
}

export function mountSimpleRulesForm(options) {
  return mountForm({
    template: `
      <win-form ref="form" @failed="onFailed">
        <win-field name="A" :rules="rulesA" value="" />
        <win-field name="B" :rules="rulesB" value="" />
        <win-button native-type="submit" />
      </win-form>
    `,
    data: getSimpleRules,
    ...options,
  });
}
