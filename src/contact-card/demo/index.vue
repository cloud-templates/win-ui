<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <win-contact-card
        :type="cardType"
        :name="currentContact.name"
        :tel="currentContact.tel"
        @click="showList = true"
      />

      <win-popup v-model="showList" position="bottom" :lazy-render="false">
        <win-contact-list
          v-model="chosenContactId"
          :list="list"
          :default-tag-text="t('defaultTagText')"
          @add="onAdd"
          @edit="onEdit"
          @select="onSelect"
        />
      </win-popup>

      <win-popup v-model="showEdit" position="bottom" :lazy-render="false">
        <win-contact-edit
          show-set-default
          :set-default-label="t('defaultLabel')"
          :contact-info="editingContact"
          :is-edit="isEdit"
          @save="onSave"
          @delete="onDelete"
        />
      </win-popup>
    </demo-block>

    <demo-block :title="t('uneditable')">
      <win-contact-card
        type="edit"
        :name="mockContact.name"
        :tel="mockContact.tel"
        :editable="false"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      name: '张三',
      defaultLabel: '设为默认联系人',
      defaultTagText: '默认',
    },
    'en-US': {
      name: 'John Snow',
      defaultLabel: 'Set as the default contact',
      defaultTagText: 'default',
    },
  },

  data() {
    return {
      chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      list: [],
    };
  },

  computed: {
    mockContact() {
      return {
        name: this.t('name'),
        tel: '13000000000',
        id: 0,
        isDefault: 1,
      };
    },

    cardType() {
      return this.chosenContactId !== null ? 'edit' : 'add';
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter((item) => item.id === id)[0] : {};
    },
  },

  created() {
    this.list.push(this.mockContact);
  },

  methods: {
    onAdd() {
      this.editingContact = { id: this.list.length };
      this.isEdit = false;
      this.showEdit = true;
    },

    onEdit(item) {
      this.isEdit = true;
      this.showEdit = true;
      this.editingContact = item;
    },

    onSelect() {
      this.showList = false;
    },

    onSave(info) {
      this.showEdit = false;
      this.showList = false;

      if (this.isEdit) {
        this.list = this.list.map((item) =>
          item.id === info.id ? info : item
        );
      } else {
        this.list.push(info);
      }
      this.chosenContactId = info.id;
    },

    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter((item) => item.id !== info.id);
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
    },
  },
};
</script>

<style lang="less">
.demo-contact-card {
  .win-popup {
    height: 100%;
    background-color: #f2f2f2;
  }
}
</style>
