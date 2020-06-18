<template>
  <demo-section>
    <demo-block :title="t('type')">
      <win-loading />
      <win-loading type="spinner" />
    </demo-block>

    <demo-block :title="t('color')">
      <win-loading color="#1989fa" />
      <win-loading type="spinner" color="#1989fa" />
    </demo-block>

    <demo-block :title="t('size')">
      <win-loading size="24" />
      <win-loading type="spinner" size="24" />
    </demo-block>

    <demo-block :title="t('text')">
      <win-loading size="24px">
        {{ t('loading') }}
      </win-loading>
    </demo-block>

    <demo-block :title="t('vertical')">
      <win-loading size="24px" vertical>
        {{ t('loading') }}
      </win-loading>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      type: '加载类型',
      text: '加载文案',
      size: '自定义大小',
      color: '自定义颜色',
      vertical: '垂直排列',
    },
    'en-US': {
      type: 'Type',
      text: 'Text',
      size: 'Size',
      color: 'Color',
      vertical: 'Vertical',
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-loading {
  background: @white;

  .win-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;

    &--vertical {
      display: inline-flex;
    }
  }
}
</style>
