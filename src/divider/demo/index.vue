<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <win-divider />
    </demo-block>

    <demo-block :title="t('withText')">
      <win-divider>
        {{ t('text') }}
      </win-divider>
    </demo-block>

    <demo-block :title="t('contentPosition')">
      <win-divider content-position="left">
        {{ t('text') }}
      </win-divider>

      <win-divider content-position="right">
        {{ t('text') }}
      </win-divider>
    </demo-block>

    <demo-block :title="t('dashed')">
      <win-divider dashed :hairline="false">
        {{ t('text') }}
      </win-divider>
    </demo-block>

    <demo-block :title="t('customStyle')">
      <win-divider
        :style="{ borderColor: BLUE, color: BLUE, padding: '0 16px' }"
      >
        {{ t('text') }}
      </win-divider>
    </demo-block>
  </demo-section>
</template>

<script>
import { BLUE } from '../../utils/constant';

export default {
  i18n: {
    'zh-CN': {
      text: '文本',
      dashed: '虚线',
      withText: '展示文本',
      contentPosition: '内容位置',
      customStyle: '自定义样式',
    },
    'en-US': {
      text: 'Text',
      dashed: 'Dashed',
      withText: 'With Text',
      contentPosition: 'Content Position',
      customStyle: 'Custom Style',
    },
  },

  data() {
    return {
      BLUE,
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-divider {
  background-color: @white;

  .win-doc-demo-block__title {
    padding-top: @padding-md;
  }
}
</style>
