<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <win-radio-group v-model="radio1" class="demo-radio-group">
        <win-radio name="1">{{ t('radio') }} 1</win-radio>
        <win-radio name="2">{{ t('radio') }} 2</win-radio>
      </win-radio-group>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('horizontal')">
      <win-radio-group
        v-model="radioHorizontal"
        class="demo-radio-group"
        direction="horizontal"
      >
        <win-radio name="1">{{ t('radio') }} 1</win-radio>
        <win-radio name="2">{{ t('radio') }} 2</win-radio>
      </win-radio-group>
    </demo-block>

    <demo-block :title="t('disabled')">
      <win-radio-group v-model="radio2" class="demo-radio-group" disabled>
        <win-radio name="1">{{ t('radio') }} 1</win-radio>
        <win-radio name="2">{{ t('radio') }} 2</win-radio>
      </win-radio-group>
    </demo-block>

    <demo-block :title="t('customShape')">
      <win-radio-group v-model="radioShape" class="demo-radio-group">
        <win-radio name="1" shape="square">{{ t('radio') }} 1</win-radio>
        <win-radio name="2" shape="square">{{ t('radio') }} 2</win-radio>
      </win-radio-group>
    </demo-block>

    <demo-block :title="t('customColor')">
      <win-radio-group v-model="radio3" class="demo-radio-group">
        <win-radio name="1" checked-color="#07c160">
          {{ t('radio') }} 1
        </win-radio>
        <win-radio name="2" checked-color="#07c160">
          {{ t('radio') }} 2
        </win-radio>
      </win-radio-group>
    </demo-block>

    <demo-block :title="t('customIconSize')">
      <win-radio-group v-model="radioIconSize" class="demo-radio-group">
        <win-radio name="1" checked-color="#07c160" icon-size="24px">
          {{ t('radio') }} 1
        </win-radio>
        <win-radio name="2" checked-color="#07c160" icon-size="24px">
          {{ t('radio') }} 2
        </win-radio>
      </win-radio-group>
    </demo-block>

    <demo-block :title="t('customIcon')">
      <win-radio-group v-model="radio4" class="demo-radio-group">
        <win-radio name="1">
          {{ t('radio') }} 1
          <template #icon="{ checked }">
            <img :src="checked ? icon.active : icon.inactive" />
          </template>
        </win-radio>
        <win-radio name="2">
          {{ t('radio') }} 2
          <template #icon="{ checked }">
            <img :src="checked ? icon.active : icon.inactive" />
          </template>
        </win-radio>
      </win-radio-group>
    </demo-block>

    <demo-block :title="t('disableLabel')">
      <win-radio-group v-model="radioLabel" class="demo-radio-group">
        <win-radio name="1" label-disabled>{{ t('radio') }} 1</win-radio>
        <win-radio name="2" label-disabled>{{ t('radio') }} 2</win-radio>
      </win-radio-group>
    </demo-block>

    <demo-block :title="t('withCell')">
      <win-radio-group v-model="radio5">
        <win-cell-group>
          <win-cell clickable :title="t('radio') + 1" @click="radio5 = '1'">
            <win-radio name="1" slot="right-icon" />
          </win-cell>
          <win-cell clickable :title="t('radio') + 2" @click="radio5 = '2'">
            <win-radio name="2" slot="right-icon" />
          </win-cell>
        </win-cell-group>
      </win-radio-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      radio: '单选框',
      text1: '未选中禁用',
      text2: '选中且禁用',
      withCell: '与 Cell 组件一起使用',
      horizontal: '水平排列',
      customIcon: '自定义图标',
      customColor: '自定义颜色',
      customShape: '自定义形状',
      customIconSize: '自定义大小',
      disableLabel: '禁用文本点击',
    },
    'en-US': {
      radio: 'Radio',
      text1: 'Disabled',
      text2: 'Disabled and checked',
      withCell: 'Inside a Cell',
      horizontal: 'Hrizontal',
      customIcon: 'Custom Icon',
      customColor: 'Custom Color',
      customShape: 'Custom Shape',
      customIconSize: 'Custom Icon Size',
      disableLabel: 'Disable label click',
    },
  },

  data() {
    return {
      radio1: '1',
      radio2: '2',
      radio3: '1',
      radio4: '1',
      radio5: '1',
      radioLabel: '1',
      radioShape: '1',
      radioIconSize: '1',
      radioHorizontal: '1',
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
      },
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-radio {
  background: @white;

  &-group {
    padding: 0 16px;

    .win-radio {
      margin-bottom: 8px;
    }
  }

  img {
    height: 20px;
  }

  .win-doc-demo-block__title {
    margin-top: -8px;
  }
}
</style>
