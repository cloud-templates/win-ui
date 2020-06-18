<template>
  <demo-section>
    <win-tabs v-model="tab" sticky :color="BLUE">
      <win-tab :title="t('demo')">
        <demo-block :title="t('basicUsage')">
          <win-col span="6" @click="copy(demoIcon)">
            <win-icon :name="demoIcon" />
          </win-col>
          <win-col span="6" @click="copy(demoImage)">
            <win-icon :name="demoImage" />
          </win-col>
        </demo-block>

        <demo-block :title="t('badge')">
          <win-col span="6" @click="copy(demoIcon, { dot: true })">
            <win-icon :name="demoIcon" dot />
          </win-col>
          <win-col span="6" @click="copy(demoIcon, { badge: '9' })">
            <win-icon :name="demoIcon" badge="9" />
          </win-col>
          <win-col span="6" @click="copy(demoIcon, { badge: '99+' })">
            <win-icon :name="demoIcon" badge="99+" />
          </win-col>
        </demo-block>

        <demo-block :title="t('color')">
          <win-col span="6" @click="copy(demoIcon, { color: BLUE })">
            <win-icon :name="demoIcon" :color="BLUE" />
          </win-col>
          <win-col span="6" @click="copy(demoIcon, { color: GREEN })">
            <win-icon :name="demoIcon" :color="GREEN" />
          </win-col>
        </demo-block>

        <demo-block :title="t('size')">
          <win-col span="6" @click="copy(demoIcon, { size: '40' })">
            <win-icon :name="demoIcon" size="40" />
          </win-col>
          <win-col span="6" @click="copy(demoIcon, { size: '3rem' })">
            <win-icon :name="demoIcon" size="3rem" />
          </win-col>
        </demo-block>
      </win-tab>

      <win-tab :title="t('basic')">
        <win-col
          v-for="icon in icons.basic"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <win-icon :name="icon" />
          <span>{{ icon }}</span>
        </win-col>
      </win-tab>

      <win-tab :title="t('outline')">
        <win-col
          v-for="icon in icons.outline"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <win-icon :name="icon" />
          <span>{{ icon }}</span>
        </win-col>
      </win-tab>

      <win-tab :title="t('filled')">
        <win-col
          v-for="icon in icons.filled"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <win-icon :name="icon" />
          <span>{{ icon }}</span>
        </win-col>
      </win-tab>
    </win-tabs>
  </demo-section>
</template>

<script>
import icons from '@vant/icons';
import { BLUE, GREEN } from '../../utils/constant';

// from https://30secondsofcode.org
function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);

  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;

  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
}

export default {
  i18n: {
    'zh-CN': {
      title: '图标列表',
      badge: '徽标提示',
      basic: '基础图标',
      copied: '复制成功',
      outline: '线框风格',
      filled: '实底风格',
      demo: '用法示例',
      color: '图标颜色',
      size: '图标大小',
    },
    'en-US': {
      title: 'Icon List',
      badge: 'Show Badge',
      basic: 'Basic',
      copied: 'Copied',
      outline: 'Outline',
      filled: 'Filled',
      demo: 'Demo',
      color: 'Icon Color',
      size: 'Icon Size',
    },
  },

  data() {
    this.BLUE = BLUE;
    this.GREEN = GREEN;
    this.icons = icons;
    return {
      tab: 0,
      demoIcon: 'chat-o',
      demoImage: 'https://b.yzcdn.cn/vant/icon-demo-1126.png',
    };
  },

  methods: {
    copy(icon, option = {}) {
      let tag = `<win-icon name="${icon}"`;
      if ('dot' in option) {
        tag = `${tag} ${option.dot ? 'dot' : ''}`;
      }
      if ('badge' in option) {
        tag = `${tag} badge="${option.badge}"`;
      }
      if ('color' in option) {
        tag = `${tag} color="${option.color}"`;
      }
      if ('size' in option) {
        tag = `${tag} size="${option.size}"`;
      }
      tag = `${tag} />`;
      copyToClipboard(tag);

      this.$notify({
        type: 'success',
        duration: 1500,
        className: 'demo-icon-notify',
        message: `${this.t('copied')}：${tag}`,
      });
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-icon {
  font-size: 0;

  &-list {
    box-sizing: border-box;
    min-height: calc(100vh - 65px);
    padding-top: 10px;
  }

  &-notify {
    font-size: 13px;
  }

  .win-col {
    display: inline-block;
    float: none;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;

    span {
      display: block;
      height: 36px;
      margin: -4px 0 4px;
      padding: 0 5px;
      color: @gray-7;
      font-size: 12px;
      line-height: 18px;
    }

    &:active {
      background-color: @active-color;
    }
  }

  .win-icon {
    margin: 16px 0 16px;
    color: @text-color;
    font-size: 32px;
  }

  .win-tab__pane {
    width: auto;
    margin: 20px;
    background-color: #fff;
    border-radius: 12px;
  }
}
</style>
