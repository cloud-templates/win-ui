<template>
  <demo-section>
    <demo-block :title="t('type')">
      <div class="demo-button-row">
        <win-button type="default">{{ t('default') }}</win-button>
        <win-button type="primary">{{ t('primary') }}</win-button>
        <win-button type="info">{{ t('info') }}</win-button>
      </div>
      <win-button type="danger">{{ t('danger') }}</win-button>
      <win-button type="warning">{{ t('warning') }}</win-button>
    </demo-block>

    <demo-block :title="t('plain')">
      <win-button plain type="primary" :text="t('plain')" />
      <win-button plain type="info" :text="t('plain')" />
    </demo-block>

    <demo-block :title="t('hairline')">
      <win-button plain hairline type="primary" :text="t('hairlineButton')" />
      <win-button plain hairline type="info" :text="t('hairlineButton')" />
    </demo-block>

    <demo-block :title="t('disabled')">
      <win-button disabled type="primary" :text="t('disabled')" />
      <win-button disabled type="info" :text="t('disabled')" />
    </demo-block>

    <demo-block :title="t('loadingStatus')">
      <win-button loading type="primary" />
      <win-button loading type="primary" loading-type="spinner" />
      <win-button loading :loading-text="t('loadingText')" type="info" />
    </demo-block>

    <demo-block :title="t('shape')">
      <win-button type="primary" square :text="t('square')" />
      <win-button type="info" round :text="t('round')" />
    </demo-block>

    <demo-block :title="t('icon')">
      <win-button type="primary" icon="star-o" />
      <win-button type="primary" icon="star-o" :text="t('button')" />
      <win-button
        plain
        type="primary"
        icon="https://img.yzcdn.cn/vant/logo.png"
        :text="t('button')"
      />
    </demo-block>

    <demo-block :title="t('size')">
      <win-button type="primary" size="large">{{ t('large') }}</win-button>
      <win-button type="primary" size="normal">{{ t('normal') }}</win-button>
      <win-button type="primary" size="small">{{ t('small') }}</win-button>
      <win-button type="primary" size="mini">{{ t('mini') }}</win-button>
    </demo-block>

    <demo-block :title="t('blockElement')">
      <win-button type="primary" block>{{ t('blockElement') }}</win-button>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('router')">
      <win-button
        :text="t('urlRoute')"
        type="primary"
        url="/vant/mobile.html"
      />
      <win-button :text="t('vueRoute')" type="primary" to="index" />
    </demo-block>

    <demo-block :title="t('customColor')">
      <win-button color="#7232dd" :text="t('pure')" />
      <win-button plain color="#7232dd" :text="t('pure')" />
      <win-button
        color="linear-gradient(to right, #4bb0ff, #6149f6)"
        :text="t('gradient')"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      type: '按钮类型',
      size: '按钮尺寸',
      icon: '图标按钮',
      loading: '加载状态',
      shape: '按钮形状',
      default: '默认按钮',
      primary: '主要按钮',
      info: '信息按钮',
      danger: '危险按钮',
      warning: '警告按钮',
      large: '大号按钮',
      normal: '普通按钮',
      small: '小型按钮',
      mini: '迷你按钮',
      plain: '朴素按钮',
      square: '方形按钮',
      round: '圆形按钮',
      hairline: '细边框',
      hairlineButton: '细边框按钮',
      loadingText: '加载中...',
      router: '页面导航',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转',
      customColor: '自定义颜色',
      pure: '单色按钮',
      gradient: '渐变色按钮',
      blockElement: '块级元素',
    },
    'en-US': {
      type: 'Type',
      size: 'Size',
      icon: 'Icon',
      loading: 'Loading',
      shape: 'Shape',
      default: 'Default',
      primary: 'Primary',
      info: 'Info',
      danger: 'Danger',
      warning: 'Warning',
      large: 'Large',
      normal: 'Normal',
      small: 'Small',
      mini: 'Mini',
      plain: 'Plain',
      square: 'Square',
      round: 'Round',
      hairline: 'Hairline',
      hairlineButton: 'Hairline',
      loadingText: 'Loading...',
      router: 'Router',
      urlRoute: 'URL',
      vueRoute: 'Vue Router',
      customColor: 'Custom Color',
      pure: 'Pure',
      gradient: 'Gradient',
      blockElement: 'Block Element',
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-button {
  background: @white;

  .win-button {
    &--large {
      margin-bottom: @padding-md;
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: @padding-md;
    }
  }

  .van-doc-demo-block {
    padding: 0 @padding-md;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: @padding-sm;
  }
}
</style>
