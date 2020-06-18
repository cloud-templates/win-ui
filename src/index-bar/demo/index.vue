<template>
  <demo-section>
    <win-tabs v-model="activeTab" :color="BLUE">
      <win-tab :title="t('basicUsage')">
        <win-index-bar>
          <div v-for="index in indexList" :key="index">
            <win-index-anchor :index="index" />
            <win-cell :title="t('text')" />
            <win-cell :title="t('text')" />
            <win-cell :title="t('text')" />
          </div>
        </win-index-bar>
      </win-tab>

      <win-tab :title="t('customIndexList')">
        <win-index-bar :index-list="customIndexList">
          <div v-for="index in customIndexList" :key="index">
            <win-index-anchor :index="index">
              {{ t('title') + index }}
            </win-index-anchor>
            <win-cell :title="t('text')" />
            <win-cell :title="t('text')" />
            <win-cell :title="t('text')" />
          </div>
        </win-index-bar>
      </win-tab>
    </win-tabs>
  </demo-section>
</template>

<script>
import { BLUE } from '../../utils/constant';

export default {
  i18n: {
    'zh-CN': {
      text: '文本',
      customIndexList: '自定义索引列表',
    },
    'en-US': {
      text: 'Text',
      customIndexList: 'Custom Index List',
    },
  },

  data() {
    const indexList = [];
    const charCodeOfA = 'A'.charCodeAt(0);
    for (let i = 0; i < 26; i++) {
      indexList.push(String.fromCharCode(charCodeOfA + i));
    }

    return {
      BLUE,
      activeTab: 0,
      indexList,
      customIndexList: [1, 2, 3, 4, 5, 6, 8, 9, 10],
    };
  },
};
</script>
