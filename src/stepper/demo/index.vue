<template>
  <demo-section>
    <win-cell center :title="t('basicUsage')">
      <win-stepper v-model="stepper1" />
    </win-cell>

    <win-cell center :title="t('step')">
      <win-stepper v-model="stepper2" step="2" />
    </win-cell>

    <win-cell center :title="t('range')">
      <win-stepper v-model="stepper3" :min="5" :max="8" />
    </win-cell>

    <win-cell center :title="t('integer')">
      <win-stepper v-model="stepper4" integer />
    </win-cell>

    <win-cell center :title="t('disabled')">
      <win-stepper v-model="stepper5" disabled />
    </win-cell>

    <win-cell center :title="t('disableInput')">
      <win-stepper v-model="disabledInput" disable-input />
    </win-cell>

    <win-cell center :title="t('decimalLength')">
      <win-stepper v-model="stepper8" :decimal-length="1" step="0.2" />
    </win-cell>

    <win-cell center :title="t('customSize')">
      <win-stepper v-model="stepper7" button-size="32px" input-width="40px" />
    </win-cell>

    <win-cell center :title="t('asyncChange')">
      <win-stepper :value="stepper6" async-change @change="onChange" />
    </win-cell>

    <win-cell v-if="!isWeapp" center :title="t('roundTheme')">
      <win-stepper
        v-model="stepperRound"
        theme="round"
        button-size="22"
        disable-input
      />
    </win-cell>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      step: '步长设置',
      range: '限制输入范围',
      integer: '限制输入整数',
      roundTheme: '圆角风格',
      asyncChange: '异步变更',
      customSize: '自定义大小',
      disableInput: '禁用输入框',
      decimalLength: '固定小数位数',
    },
    'en-US': {
      step: 'Step',
      range: 'Range',
      integer: 'Integer',
      roundTheme: 'Round Theme',
      asyncChange: 'Async Change',
      customSize: 'Custom Size',
      disableInput: 'Disable Input',
      decimalLength: 'Decimal Length',
    },
  },

  data() {
    return {
      stepper1: 1,
      stepper2: 1,
      stepper3: 1,
      stepper4: 1,
      stepper5: 1,
      stepper6: 1,
      stepper7: 1,
      stepper8: 1,
      stepperRound: 1,
      disabledInput: 1,
    };
  },

  methods: {
    onChange(value) {
      this.$toast.loading({ forbidClick: true });

      setTimeout(() => {
        this.stepper6 = value;
        this.$toast.clear();
      }, 500);
    },
  },
};
</script>
