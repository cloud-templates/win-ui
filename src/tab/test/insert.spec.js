import { mount, later } from '../../../test';

// this case will throw wierd error in index.spec.js
// so separate it
test('insert tab dynamically', async () => {
  const wrapper = mount({
    template: `
      <win-tabs v-model="active">
        <win-tab title="1">1</win-tab>
        <div v-if="insert">
          <win-tab title="2">2</win-tab>
        </div>
        <win-tab title="3">3</win-tab>
      </win-tabs>
    `,
    data() {
      return {
        insert: false,
        active: 1,
      };
    },
  });

  await later();
  wrapper.setData({ insert: true });
  expect(wrapper).toMatchSnapshot();
});

// this case will throw wierd error in index.spec.js
// so separate it
test('insert tab with child component', async () => {
  const wrapper = mount({
    template: `
      <win-tabs v-model="active">
        <win-tab title="1">1</win-tab>
        <my-tab />
        <win-tab title="3">3</win-tab>
      </win-tabs>
    `,
    components: {
      'my-tab': {
        template: `<win-tab title="2">2</win-tab>`,
      },
    },
  });

  await later();
  expect(wrapper).toMatchSnapshot();
});
