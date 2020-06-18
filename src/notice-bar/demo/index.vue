<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <win-notice-bar :text="t('text')" left-icon="volume-o" />
    </demo-block>

    <demo-block :title="t('unscrollable')">
      <win-notice-bar :scrollable="false" :text="t('text')" />
    </demo-block>

    <demo-block :title="t('wrapable')">
      <win-notice-bar wrapable :scrollable="false" :text="t('text')" />
    </demo-block>

    <demo-block :title="t('mode')">
      <win-notice-bar mode="closeable" :text="t('text')" />
      <win-notice-bar mode="link" :text="t('text')" />
    </demo-block>

    <demo-block :title="t('customStyle')">
      <win-notice-bar
        :text="t('text')"
        color="#1989fa"
        background="#ecf9ff"
        left-icon="info-o"
      />
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('verticalScroll')">
      <win-notice-bar left-icon="volume-o" :scrollable="false">
        <win-swipe
          vertical
          class="notice-swipe"
          :autoplay="3000"
          :show-indicators="false"
        >
          <win-swipe-item>{{ t('content') }} 1</win-swipe-item>
          <win-swipe-item>{{ t('content') }} 2</win-swipe-item>
          <win-swipe-item>{{ t('content') }} 3</win-swipe-item>
        </win-swipe>
      </win-notice-bar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text:
        '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。',
      mode: '通知栏模式',
      content: '内容',
      wrapable: '多行展示',
      unscrollable: '禁用滚动',
      customStyle: '自定义样式',
      verticalScroll: '垂直滚动',
    },
    'en-US': {
      text:
        'Only those who have the patience to do simple things perfectly ever acquire the skill to do difficult things easily.',
      mode: 'Mode',
      content: 'Content',
      wrapable: 'Wrapable',
      customStyle: 'Custom Style',
      unscrollable: 'Disable scroll',
      verticalScroll: 'Vertical Scroll',
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-notice-bar {
  background: @white;

  .win-notice-bar:not(:first-of-type) {
    margin-top: 4px;
  }

  .win-doc-demo-block__title {
    padding-top: 24px;
  }

  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
}
</style>
