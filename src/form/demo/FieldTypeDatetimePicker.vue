<template>
  <win-field
    readonly
    clickable
    name="datetimePicker"
    :value="value"
    :label="t('label')"
    :placeholder="t('placeholder')"
    @click="showPicker = true"
  >
    <win-popup
      v-model="showPicker"
      slot="extra"
      position="bottom"
      get-container="body"
    >
      <win-datetime-picker
        type="time"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </win-popup>
  </win-field>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      label: '时间选择',
      placeholder: '点击选择时间',
    },
    'en-US': {
      label: 'Datetime Picker',
      placeholder: 'Select time',
    },
  },

  data() {
    return {
      value: '',
      showPicker: false,
    };
  },

  methods: {
    onConfirm(time) {
      console.log('time', time);
      this.value = time;
      this.showPicker = false;
    },
    onCancel() {
      this.showPicker = false;
    },
  },
};
</script>
