<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <win-tabbar v-model="active">
        <win-tabbar-item icon="home-o">{{ t('tab') }}</win-tabbar-item>
        <win-tabbar-item icon="search">{{ t('tab') }}</win-tabbar-item>
        <win-tabbar-item icon="friends-o">{{ t('tab') }}</win-tabbar-item>
        <win-tabbar-item icon="setting-o">{{ t('tab') }}</win-tabbar-item>
      </win-tabbar>
    </demo-block>

    <demo-block :title="t('matchByName')">
      <win-tabbar v-model="activeName">
        <win-tabbar-item name="home" icon="home-o">
          {{ t('tab') }}
        </win-tabbar-item>
        <win-tabbar-item name="search" icon="search">
          {{ t('tab') }}
        </win-tabbar-item>
        <win-tabbar-item name="friends" icon="friends-o">
          {{ t('tab') }}
        </win-tabbar-item>
        <win-tabbar-item name="setting" icon="setting-o">
          {{ t('tab') }}
        </win-tabbar-item>
      </win-tabbar>
    </demo-block>

    <demo-block :title="t('badge')">
      <win-tabbar v-model="active2">
        <win-tabbar-item icon="home-o">{{ t('tab') }}</win-tabbar-item>
        <win-tabbar-item icon="search" dot>{{ t('tab') }}</win-tabbar-item>
        <win-tabbar-item icon="friends-o" badge="5">
          {{ t('tab') }}
        </win-tabbar-item>
        <win-tabbar-item icon="setting-o" badge="20">
          {{ t('tab') }}
        </win-tabbar-item>
      </win-tabbar>
    </demo-block>

    <demo-block :title="t('customIcon')">
      <win-tabbar v-model="active3">
        <win-tabbar-item badge="3">
          <span>{{ t('custom') }}</span>
          <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
          </template>
        </win-tabbar-item>
        <win-tabbar-item icon="search">{{ t('tab') }}</win-tabbar-item>
        <win-tabbar-item icon="setting-o">{{ t('tab') }}</win-tabbar-item>
      </win-tabbar>
    </demo-block>

    <demo-block :title="t('customColor')">
      <win-tabbar
        v-model="active4"
        active-color="#07c160"
        inactive-color="#000"
      >
        <win-tabbar-item icon="home-o">{{ t('tab') }}</win-tabbar-item>
        <win-tabbar-item icon="search">{{ t('tab') }}</win-tabbar-item>
        <win-tabbar-item icon="friends-o">{{ t('tab') }}</win-tabbar-item>
        <win-tabbar-item icon="setting-o">{{ t('tab') }}</win-tabbar-item>
      </win-tabbar>
    </demo-block>

    <demo-block :title="t('switchEvent')">
      <win-tabbar v-model="active5" @change="onChange">
        <win-tabbar-item icon="home-o">{{ t('tab') + 1 }}</win-tabbar-item>
        <win-tabbar-item icon="search">{{ t('tab') + 2 }}</win-tabbar-item>
        <win-tabbar-item icon="friends-o">{{ t('tab') + 3 }}</win-tabbar-item>
        <win-tabbar-item icon="setting-o">{{ t('tab') + 4 }}</win-tabbar-item>
      </win-tabbar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      badge: '徽标提示',
      customIcon: '自定义图标',
      customColor: '自定义颜色',
      matchByName: '通过名称匹配',
      switchEvent: '监听切换事件',
      selectTip: '你切换到了',
    },
    'en-US': {
      badge: 'Show Badge',
      customIcon: 'Custom Icon',
      customColor: 'Custom Color',
      matchByName: 'Match by name',
      switchEvent: 'Change Event',
      selectTip: 'You select ',
    },
  },

  data() {
    return {
      active: 0,
      active2: 0,
      active3: 0,
      active4: 0,
      active5: 0,
      activeName: 'home',
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
      },
    };
  },

  methods: {
    onChange(index) {
      this.$notify({
        type: 'primary',
        message: `${this.t('selectTip')} ${this.t('tab')}${index + 1}`,
      });
    },
  },
};
</script>

<style lang="less">
.demo-tabbar {
  .win-tabbar {
    position: relative;
    padding-bottom: 0;
  }
}
</style>
