<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <win-switch v-model="checked" />
    </demo-block>

    <demo-block :title="t('disabled')">
      <win-switch v-model="checked" disabled />
    </demo-block>

    <demo-block :title="t('loadingStatus')">
      <win-switch v-model="checked" loading />
    </demo-block>

    <demo-block :title="t('customSize')">
      <win-switch v-model="checked2" size="24px" />
    </demo-block>

    <demo-block :title="t('customColor')">
      <win-switch
        v-model="checked3"
        active-color="#07c160"
        inactive-color="#ee0a24"
      />
    </demo-block>

    <demo-block :title="t('asyncControl')">
      <win-switch :value="checked4" @input="onInput" />
    </demo-block>

    <demo-block :title="t('withCell')">
      <win-cell center :title="t('title')">
        <win-switch v-model="checked5" slot="right-icon" size="24" />
      </win-cell>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '标题',
      confirm: '提醒',
      message: '是否切换开关？',
      withCell: '搭配单元格使用',
      customSize: '自定义大小',
      customColor: '自定义颜色',
      asyncControl: '异步控制',
    },
    'en-US': {
      title: 'Title',
      confirm: 'Confirm',
      message: 'Are you sure to toggle switch?',
      withCell: 'Inside a Cell',
      customSize: 'Custom Size',
      customColor: 'Custom Color',
      asyncControl: 'Async Control',
    },
  },

  data() {
    return {
      checked: true,
      checked2: true,
      checked3: true,
      checked4: true,
      checked5: true,
      checked6: false,
    };
  },

  methods: {
    onInput(checked) {
      this.$dialog
        .confirm({
          title: this.t('title'),
          message: this.t('message'),
        })
        .then(() => {
          this.checked4 = checked;
        });
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-switch {
  .win-switch {
    margin-left: @padding-md;
  }
}
</style>
