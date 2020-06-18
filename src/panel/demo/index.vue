<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <win-panel :title="t('title')" :desc="t('desc')" :status="t('status')">
        <div>{{ t('content') }}</div>
      </win-panel>
    </demo-block>

    <demo-block :title="t('advancedUsage')">
      <win-panel :title="t('title')" :desc="t('desc')" :status="t('status')">
        <div>{{ t('content') }}</div>
        <template #footer>
          <win-button size="small">{{ t('button') }}</win-button>
          <win-button size="small" type="danger">
            {{ t('button') }}
          </win-button>
        </template>
      </win-panel>
    </demo-block>
  </demo-section>
</template>

<script>
export default {};
</script>

<style lang="less">
.demo-panel {
  .win-panel__footer {
    text-align: right;

    .win-button {
      margin-left: 5px;
    }
  }

  .win-panel__content {
    padding: 20px;
  }
}
</style>
