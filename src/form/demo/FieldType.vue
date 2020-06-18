<template>
  <demo-block :title="t('fieldType')">
    <win-form @submit="onSubmit">
      <win-field name="switch" :label="t('switch')">
        <template #input>
          <win-switch v-model="switchChecked" size="20" />
        </template>
      </win-field>

      <win-field name="checkbox" :label="t('checkbox')">
        <template #input>
          <win-checkbox v-model="checkbox" shape="square" />
        </template>
      </win-field>

      <win-field name="checkboxGroup" :label="t('checkboxGroup')">
        <template #input>
          <win-checkbox-group v-model="checkboxGroup" direction="horizontal">
            <win-checkbox name="1" shape="square">
              {{ t('checkbox') }} 1
            </win-checkbox>
            <win-checkbox name="2" shape="square">
              {{ t('checkbox') }} 2
            </win-checkbox>
          </win-checkbox-group>
        </template>
      </win-field>

      <win-field name="radio" :label="t('radio')">
        <template #input>
          <win-radio-group v-model="radio" direction="horizontal">
            <win-radio name="1">{{ t('radio') }} 1</win-radio>
            <win-radio name="2">{{ t('radio') }} 2</win-radio>
          </win-radio-group>
        </template>
      </win-field>

      <win-field name="stepper" :label="t('stepper')">
        <template #input>
          <win-stepper v-model="stepper" />
        </template>
      </win-field>

      <win-field name="rate" :label="t('rate')">
        <template #input>
          <win-rate v-model="rate" />
        </template>
      </win-field>

      <win-field name="slider" :label="t('slider')">
        <template #input>
          <win-slider v-model="slider" />
        </template>
      </win-field>

      <win-field name="uploader" :label="t('uploader')">
        <template #input>
          <win-uploader v-model="uploader" max-count="2" />
        </template>
      </win-field>

      <field-type-picker />
      <field-type-datetime-picker />
      <field-type-area />
      <field-type-calendar />

      <div style="margin: 16px 16px 0;">
        <win-button round block type="info" native-type="submit">
          {{ t('submit') }}
        </win-button>
      </div>
    </win-form>
  </demo-block>
</template>

<script>
import FieldTypeArea from './FieldTypeArea';
import FieldTypePicker from './FieldTypePicker';
import FieldTypeCalendar from './FieldTypeCalendar';
import FieldTypeDatetimePicker from './FieldTypeDatetimePicker';

export default {
  i18n: {
    'zh-CN': {
      rate: '评分',
      radio: '单选框',
      submit: '提交',
      switch: '开关',
      slider: '滑块',
      picker: '选择器',
      stepper: '步进器',
      checkbox: '复选框',
      uploader: '文件上传',
      fieldType: '表单项类型',
      checkboxGroup: '复选框组',
      requireCheckbox: '请勾选复选框',
    },
    'en-US': {
      rate: 'Rate',
      radio: 'Radio',
      submit: 'Submit',
      switch: 'Switch',
      slider: 'Slider',
      picker: 'Picker',
      stepper: 'Stepper',
      checkbox: 'Checkbox',
      uploader: 'Uploader',
      fieldType: 'Field Type',
      checkboxGroup: 'Checkbox Group',
      requireCheckbox: 'Checkbox is required',
    },
  },

  components: {
    FieldTypeArea,
    FieldTypePicker,
    FieldTypeCalendar,
    FieldTypeDatetimePicker,
  },

  data() {
    return {
      rate: 3,
      radio: '1',
      slider: 50,
      stepper: 1,
      uploader: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],
      checkbox: false,
      checkboxGroup: [],
      switchChecked: false,
    };
  },

  methods: {
    onSubmit(values) {
      console.log(values);
    },
  },
};
</script>
