<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <win-row>
        <win-col span="8">span: 8</win-col>
        <win-col span="8">span: 8</win-col>
        <win-col span="8">span: 8</win-col>
      </win-row>

      <win-row>
        <win-col span="4">span: 4</win-col>
        <win-col span="10" offset="4">
          offset: 4, span: 10
        </win-col>
      </win-row>

      <win-row>
        <win-col offset="12" span="12">
          offset: 12, span: 12
        </win-col>
      </win-row>
    </demo-block>

    <demo-block :title="t('title2')">
      <win-row gutter="20">
        <win-col span="8">span: 8</win-col>
        <win-col span="8">span: 8</win-col>
        <win-col span="8">span: 8</win-col>
      </win-row>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('title3')">
      <win-row type="flex">
        <win-col span="6">span: 6</win-col>
        <win-col span="6">span: 6</win-col>
        <win-col span="6">span: 6</win-col>
      </win-row>

      <win-row type="flex" justify="center">
        <win-col span="6">span: 6</win-col>
        <win-col span="6">span: 6</win-col>
        <win-col span="6">span: 6</win-col>
      </win-row>

      <win-row type="flex" justify="end">
        <win-col span="6">span: 6</win-col>
        <win-col span="6">span: 6</win-col>
        <win-col span="6">span: 6</win-col>
      </win-row>

      <win-row type="flex" justify="space-between">
        <win-col span="6">span: 6</win-col>
        <win-col span="6">span: 6</win-col>
        <win-col span="6">span: 6</win-col>
      </win-row>

      <win-row type="flex" justify="space-around">
        <win-col span="6">span: 6</win-col>
        <win-col span="6">span: 6</win-col>
        <win-col span="6">span: 6</win-col>
      </win-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '在列元素之间增加间距',
      title3: 'Flex 布局',
    },
    'en-US': {
      title2: 'Column Spacing',
      title3: 'Flex Layout',
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-col {
  background: @white;

  .win-doc-demo-block {
    padding: 0 @padding-md;
  }

  .win-doc-demo-block__title {
    padding-left: 0;
  }

  .win-col {
    margin-bottom: 10px;
    color: @white;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
}
</style>
