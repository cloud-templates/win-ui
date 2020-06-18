<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <win-cell-group>
        <win-switch-cell v-model="checked" :title="t('title')" />
      </win-cell-group>
    </demo-block>

    <demo-block :title="t('disabled')">
      <win-cell-group>
        <win-switch-cell v-model="checked" disabled :title="t('title')" />
      </win-cell-group>
    </demo-block>

    <demo-block :title="t('loadingStatus')">
      <win-cell-group>
        <win-switch-cell v-model="checked" loading :title="t('title')" />
      </win-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
};
</script>
