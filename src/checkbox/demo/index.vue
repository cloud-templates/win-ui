<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <win-checkbox v-model="checkbox1">{{ t('checkbox') }}</win-checkbox>
    </demo-block>

    <demo-block :title="t('disabled')">
      <win-checkbox :value="false" disabled>
        {{ t('checkbox') }}
      </win-checkbox>
      <win-checkbox :value="true" disabled>
        {{ t('checkbox') }}
      </win-checkbox>
    </demo-block>

    <demo-block :title="t('customShape')">
      <win-checkbox v-model="checkboxShape" shape="square">
        {{ t('customColor') }}
      </win-checkbox>
    </demo-block>

    <demo-block :title="t('customColor')">
      <win-checkbox v-model="checkbox2" checked-color="#07c160">
        {{ t('customColor') }}
      </win-checkbox>
    </demo-block>

    <demo-block :title="t('customIconSize')">
      <win-checkbox v-model="checboxIcon" icon-size="24px">
        {{ t('customIconSize') }}
      </win-checkbox>
    </demo-block>

    <demo-block :title="t('customIcon')">
      <win-checkbox v-model="checkbox3">
        {{ t('customIcon') }}
        <template #icon="{ checked }">
          <img :src="checked ? activeIcon : inactiveIcon" />
        </template>
      </win-checkbox>
    </demo-block>

    <demo-block :title="t('disableLabel')">
      <win-checkbox v-model="checkboxLabel" label-disabled>
        {{ t('checkbox') }}
      </win-checkbox>
    </demo-block>

    <demo-block :title="t('title3')">
      <win-checkbox-group v-model="result">
        <win-checkbox name="a">{{ t('checkbox') }} a</win-checkbox>
        <win-checkbox name="b">{{ t('checkbox') }} b</win-checkbox>
      </win-checkbox-group>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('horizontal')">
      <win-checkbox-group v-model="horizontalResult" direction="horizontal">
        <win-checkbox name="a">{{ t('checkbox') }} a</win-checkbox>
        <win-checkbox name="b">{{ t('checkbox') }} b</win-checkbox>
      </win-checkbox-group>
    </demo-block>

    <demo-block :title="t('title4')">
      <win-checkbox-group v-model="result2" :max="2">
        <win-checkbox name="a">{{ t('checkbox') }} a</win-checkbox>
        <win-checkbox name="b">{{ t('checkbox') }} b</win-checkbox>
        <win-checkbox name="c">{{ t('checkbox') }} c</win-checkbox>
      </win-checkbox-group>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('toggleAll')">
      <win-checkbox-group v-model="checkAllResult" ref="group">
        <win-checkbox name="a">{{ t('checkbox') }} a</win-checkbox>
        <win-checkbox name="b">{{ t('checkbox') }} b</win-checkbox>
        <win-checkbox name="c">{{ t('checkbox') }} c</win-checkbox>
      </win-checkbox-group>

      <div class="demo-checkbox-buttons">
        <win-button type="primary" @click="checkAll">
          {{ t('checkAll') }}
        </win-button>
        <win-button type="info" @click="toggleAll">
          {{ t('inverse') }}
        </win-button>
      </div>
    </demo-block>

    <demo-block :title="t('title5')">
      <win-checkbox-group v-model="result3">
        <win-cell-group>
          <win-cell
            v-for="(item, index) in list"
            clickable
            :key="index"
            :title="`${t('checkbox')} ${item}`"
            @click="toggle(index)"
          >
            <template #right-icon>
              <win-checkbox ref="checkboxes" :name="item" />
            </template>
          </win-cell>
        </win-cell-group>
      </win-checkbox-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      checkbox: '复选框',
      customIcon: '自定义图标',
      customIconSize: '自定义大小',
      customColor: '自定义颜色',
      customShape: '自定义形状',
      title3: '复选框组',
      title4: '限制最大可选数',
      title5: '搭配单元格组件使用',
      toggleAll: '全选与反选',
      checkAll: '全选',
      inverse: '反选',
      horizontal: '水平排列',
      disableLabel: '禁用文本点击',
    },
    'en-US': {
      checkbox: 'Checkbox',
      customIcon: 'Custom Icon',
      customIconSize: 'Custom Icon Size',
      customColor: 'Custom Color',
      customShape: 'Custom Shape',
      title3: 'Checkbox Group',
      title4: 'Maximum amount of checked options',
      title5: 'Inside a Cell',
      toggleAll: 'Toggle All',
      checkAll: 'Check All',
      inverse: 'Inverse',
      horizontal: 'Horizontal',
      disableLabel: 'Disable label click',
    },
  },

  data() {
    return {
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      checkboxShape: true,
      checkboxLabel: true,
      checboxIcon: true,
      list: ['a', 'b'],
      result: ['a', 'b'],
      result2: [],
      result3: [],
      checkAllResult: [],
      horizontalResult: [],
      activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
    };
  },

  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },

    checkAll() {
      this.$refs.group.toggleAll(true);
    },

    toggleAll() {
      this.$refs.group.toggleAll();
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-checkbox {
  background: @white;

  .win-checkbox {
    margin: 0 0 8px 20px;
  }

  .win-cell {
    .win-checkbox {
      margin: 0;
    }
  }

  img {
    height: 20px;
  }

  &-buttons {
    margin-top: @padding-md;

    .win-button {
      margin-left: @padding-md;
    }
  }

  .win-doc-demo-block__title {
    margin-top: -8px;
  }
}
</style>
