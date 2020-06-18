<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <win-grid>
        <win-grid-item
          v-for="i in 4"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </win-grid>
    </demo-block>

    <demo-block :title="t('columnNum')">
      <win-grid :column-num="3">
        <win-grid-item
          v-for="i in 6"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </win-grid>
    </demo-block>

    <demo-block :title="t('customContent')">
      <win-grid :border="false" :column-num="3">
        <win-grid-item>
          <win-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-1.jpg"
          />
        </win-grid-item>
        <win-grid-item>
          <win-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-2.jpg"
          />
        </win-grid-item>
        <win-grid-item>
          <win-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-3.jpg"
          />
        </win-grid-item>
      </win-grid>
    </demo-block>

    <demo-block :title="t('square')">
      <win-grid square>
        <win-grid-item
          v-for="i in 8"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </win-grid>
    </demo-block>

    <demo-block :title="t('gutter')">
      <win-grid :gutter="10">
        <win-grid-item
          v-for="i in 8"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </win-grid>
    </demo-block>

    <demo-block :title="t('horizontal')">
      <win-grid direction="horizontal" :column-num="3">
        <win-grid-item icon="photo-o" :text="t('text')" />
        <win-grid-item icon="photo-o" :text="t('text')" />
        <win-grid-item icon="photo-o" :text="t('text')" />
      </win-grid>
    </demo-block>

    <demo-block :title="t('route')">
      <win-grid clickable :column-num="2">
        <win-grid-item icon="home-o" :text="t('vueRoute')" to="/" />
        <win-grid-item
          icon="search"
          :text="t('urlRoute')"
          url="/vant/mobile.html"
        />
      </win-grid>
    </demo-block>

    <demo-block :title="t('showBadge')">
      <win-grid :column-num="2">
        <win-grid-item icon="home-o" :text="t('text')" dot />
        <win-grid-item icon="search" :text="t('text')" badge="99+" />
      </win-grid>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '文字',
      route: '页面导航',
      gutter: '格子间距',
      square: '正方形格子',
      columnNum: '自定义列数',
      customContent: '自定义内容',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转',
      showBadge: '徽标提示',
      horizontal: '内容横排',
    },
    'en-US': {
      text: 'Text',
      route: 'Route',
      gutter: 'Gutter',
      square: 'Square',
      columnNum: 'Column Num',
      customContent: 'Custom Content',
      urlRoute: 'URL',
      vueRoute: 'Vue Router',
      showBadge: 'Show Badge',
      horizontal: 'Horizontal',
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';
</style>
