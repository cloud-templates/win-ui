<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <win-tag>{{ t('tag') }}</win-tag>
      <win-tag type="primary">{{ t('tag') }}</win-tag>
      <win-tag type="success">{{ t('tag') }}</win-tag>
      <win-tag type="danger">{{ t('tag') }}</win-tag>
      <win-tag type="warning">{{ t('tag') }}</win-tag>
    </demo-block>

    <demo-block :title="t('round')">
      <win-tag round>{{ t('tag') }}</win-tag>
      <win-tag round type="primary">{{ t('tag') }}</win-tag>
      <win-tag round type="success">{{ t('tag') }}</win-tag>
      <win-tag round type="danger">{{ t('tag') }}</win-tag>
      <win-tag round type="warning">{{ t('tag') }}</win-tag>
    </demo-block>

    <demo-block :title="t('mark')">
      <win-tag mark>{{ t('tag') }}</win-tag>
      <win-tag mark type="primary">{{ t('tag') }}</win-tag>
      <win-tag mark type="success">{{ t('tag') }}</win-tag>
      <win-tag mark type="danger">{{ t('tag') }}</win-tag>
      <win-tag mark type="warning">{{ t('tag') }}</win-tag>
    </demo-block>

    <demo-block :title="t('plain')">
      <win-tag plain>{{ t('tag') }}</win-tag>
      <win-tag plain type="primary">{{ t('tag') }}</win-tag>
      <win-tag plain type="success">{{ t('tag') }}</win-tag>
      <win-tag plain type="danger">{{ t('tag') }}</win-tag>
      <win-tag plain type="warning">{{ t('tag') }}</win-tag>
    </demo-block>

    <demo-block :title="t('customColor')">
      <win-tag color="#f2826a">{{ t('tag') }}</win-tag>
      <win-tag color="#f2826a" plain>{{ t('tag') }}</win-tag>
      <win-tag color="#7232dd">{{ t('tag') }}</win-tag>
      <win-tag color="#7232dd" plain>{{ t('tag') }}</win-tag>
      <win-tag color="#ffe1e1" text-color="#ad0000">{{ t('tag') }}</win-tag>
    </demo-block>

    <demo-block :title="t('customSize')">
      <win-tag type="success">{{ t('tag') }}</win-tag>
      <win-tag type="success" size="medium">{{ t('tag') }}</win-tag>
      <win-tag type="success" size="large">{{ t('tag') }}</win-tag>
    </demo-block>

    <demo-block :title="t('closeable')">
      <win-tag
        v-if="show.primary"
        size="medium"
        closeable
        type="primary"
        @close="close('primary')"
      >
        {{ t('tag') }}
      </win-tag>
      <win-tag
        v-if="show.success"
        size="medium"
        closeable
        type="success"
        @close="close('success')"
      >
        {{ t('tag') }}
      </win-tag>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      plain: '空心样式',
      round: '圆角样式',
      mark: '标记样式',
      closeable: '可关闭标签',
      customColor: '自定义颜色',
      customSize: '标签大小',
    },
    'en-US': {
      plain: 'Plain style',
      round: 'Round style',
      mark: 'Mark style',
      closeable: 'Closeable',
      customColor: 'Custom Color',
      customSize: 'Custom Size',
    },
  },

  data() {
    return {
      show: {
        primary: true,
        success: true,
      },
    };
  },

  methods: {
    close(tag) {
      this.show[tag] = false;
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-tag {
  background-color: @white;

  .win-tag {
    &:first-of-type {
      margin-left: @padding-md;
    }
  }

  .win-tag + .win-tag {
    margin-left: @padding-xs;
  }
}
</style>
