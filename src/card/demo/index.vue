<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <win-card
        num="2"
        price="2.00"
        :desc="t('desc')"
        :title="t('title')"
        :thumb="imageURL"
      />
    </demo-block>

    <demo-block :title="t('discountInfo')">
      <win-card
        num="2"
        price="2.00"
        origin-price="10.00"
        :tag="t('tag')"
        :desc="t('desc')"
        :title="t('title')"
        :thumb="imageURL"
      />
    </demo-block>

    <demo-block :title="t('customContent')">
      <win-card
        num="2"
        price="2.00"
        :desc="t('desc')"
        :title="t('title')"
        :thumb="imageURL"
      >
        <template #tags>
          <div>
            <win-tag plain type="danger" style="margin-right: 5px;">
              标签
            </win-tag>
            <win-tag plain type="danger">
              标签
            </win-tag>
          </div>
        </template>

        <template #footer>
          <div>
            <win-button round size="mini">
              {{ t('button') }}
            </win-button>
            <win-button round size="mini">
              {{ t('button') }}
            </win-button>
          </div>
        </template>
      </win-card>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '商品名称',
      discountInfo: '营销信息',
      customContent: '自定义内容',
    },
    'en-US': {
      discountInfo: 'Discount Info',
      customContent: 'Custom Content',
    },
  },

  data() {
    return {
      imageURL: 'https://img.yzcdn.cn/vant/ipad.jpeg',
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-card {
  background-color: @white;
}
</style>
