<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <win-sticky>
        <win-button type="primary" style="margin-left: 15px;">
          {{ t('basicUsage') }}
        </win-button>
      </win-sticky>
    </demo-block>

    <demo-block :title="t('offsetTop')">
      <win-sticky :offset-top="50">
        <win-button type="info" style="margin-left: 115px;">
          {{ t('offsetTop') }}
        </win-button>
      </win-sticky>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('setContainer')">
      <div ref="container" style="height: 150px; background-color: #fff;">
        <win-sticky :container="container">
          <win-button type="warning" style="margin-left: 215px;">
            {{ t('setContainer') }}
          </win-button>
        </win-sticky>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      offsetTop: '吸顶距离',
      setContainer: '指定容器',
    },
    'en-US': {
      offsetTop: 'Offset Top',
      setContainer: 'Set Container',
    },
  },

  data() {
    return {
      container: null,
    };
  },

  mounted() {
    this.container = this.$refs.container;
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-sticky {
  height: 200vh;

  .win-button {
    margin-left: @padding-md;
  }
}
</style>
