<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <win-button type="danger" :text="t('basicUsage')" @click="showNotify" />
    </demo-block>

    <demo-block :title="t('notifyType')">
      <div style="margin-bottom: 15px;">
        <win-button
          type="info"
          :text="t('primary')"
          @click="showType('primary')"
        />
        <win-button
          type="primary"
          :text="t('success')"
          @click="showType('success')"
        />
      </div>

      <win-button
        type="danger"
        :text="t('danger')"
        @click="showType('danger')"
      />
      <win-button
        type="warning"
        :text="t('warning')"
        @click="showType('warning')"
      />
    </demo-block>

    <demo-block :title="t('customNotify')">
      <win-button
        type="primary"
        :text="t('customColor')"
        @click="showCustomColor"
      />
      <win-button
        type="primary"
        :text="t('customDuration')"
        @click="showCustomDuration"
      />
    </demo-block>

    <demo-block :title="t('componentCall')">
      <win-button
        type="primary"
        :text="t('componentCall')"
        @click="showComponentCall"
      />

      <win-notify v-model="show" type="success">
        <win-icon name="bell" style="margin-right: 4px;" />
        <span>{{ t('content') }}</span>
      </win-notify>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      primary: '主要通知',
      success: '成功通知',
      danger: '危险通知',
      warning: '警告通知',
      content: '通知内容',
      notifyType: '通知类型',
      customColor: '自定义颜色',
      customNotify: '自定义配置',
      componentCall: '组件调用',
      customDuration: '自定义时长',
    },
    'en-US': {
      primary: 'Primary',
      success: 'Success',
      danger: 'Danger',
      warning: 'Warning',
      content: 'Notify Message',
      notifyType: 'Notify Type',
      customColor: 'Custom Color',
      customNotify: 'Custom Notify',
      componentCall: 'Component Call',
      customDuration: 'Custom Duration',
    },
  },

  data() {
    return {
      show: false,
    };
  },

  methods: {
    showNotify() {
      this.$notify(this.t('content'));
    },

    showCustomColor() {
      this.$notify({
        message: this.t('customColor'),
        color: '#ad0000',
        background: '#ffe1e1',
      });
    },

    showCustomDuration() {
      this.$notify({
        message: this.t('customDuration'),
        duration: 1000,
      });
    },

    showType(type) {
      this.$notify({
        message: this.t('content'),
        type,
      });
    },

    showComponentCall() {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 2000);
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-notify {
  background-color: @white;

  .win-button {
    margin-left: @padding-md;
  }
}
</style>
