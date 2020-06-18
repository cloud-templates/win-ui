<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <win-empty :description="t('description')" />
    </demo-block>

    <demo-block :title="t('imageType')">
      <win-tabs v-model="active">
        <win-tab name="error" :title="t('error')">
          <win-empty image="error" :description="t('description')" />
        </win-tab>
        <win-tab name="network" :title="t('network')">
          <win-empty image="network" :description="t('description')" />
        </win-tab>
        <win-tab name="search" :title="t('search')">
          <win-empty image="search" :description="t('description')" />
        </win-tab>
      </win-tabs>
    </demo-block>

    <demo-block :title="t('customImage')">
      <win-empty
        class="custom-image"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        :description="t('description')"
      />
    </demo-block>

    <demo-block :title="t('bottomContent')">
      <win-empty :description="t('description')">
        <win-button round type="danger" class="bottom-button">
          {{ t('button') }}
        </win-button>
      </win-empty>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      error: '通用错误',
      search: '搜索提示',
      network: '网络错误',
      imageType: '图片类型',
      description: '描述文字',
      customImage: '自定义图片',
      bottomContent: '底部内容',
    },
    'en-US': {
      error: 'Error',
      search: 'Search',
      network: 'Network',
      imageType: 'Image Type',
      description: 'Description',
      customImage: 'Custom Image',
      bottomContent: 'Bottom Content',
    },
  },

  data() {
    return {
      active: 'error',
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-empty {
  background: @white;

  .custom-image {
    .win-empty__image {
      width: 90px;
      height: 90px;
    }
  }

  .bottom-button {
    width: 160px;
    height: 40px;
  }
}
</style>
