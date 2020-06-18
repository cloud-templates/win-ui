<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <win-progress :percentage="50" />
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('strokeWidth')">
      <win-progress :percentage="50" stroke-width="8" />
    </demo-block>

    <demo-block :title="t('title2')">
      <win-progress inactive :percentage="50" />
    </demo-block>

    <demo-block :title="t('title3')">
      <win-progress
        color="#f2826a"
        :percentage="25"
        :pivot-text="t('orange')"
      />
      <win-progress color="#ee0a24" :percentage="50" :pivot-text="t('red')" />
      <win-progress
        :percentage="75"
        :pivot-text="t('purple')"
        pivot-color="#7232dd"
        color="linear-gradient(to right, #be99ff, #7232dd)"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '置灰',
      title3: '样式定制',
      strokeWidth: '线条粗细',
    },
    'en-US': {
      title2: 'Inactive',
      title3: 'Custom Style',
      strokeWidth: 'Stroke Width',
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-progress {
  background: @white;

  .win-progress {
    margin: 20px;

    &:first-of-type {
      margin-top: 5px;
    }
  }
}
</style>
