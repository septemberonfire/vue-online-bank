<template>
  <div class="card">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane v-for="tab in tabConfig" :key="tab.key" :tab="tab.tab">
        <AuthForm :headerText="tab.tab" :button="tab.button"></AuthForm>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'

import AuthForm from '@/components/AuthForm.vue'

export default {
  setup() {
    const activeKey = ref('login')
    const tabConfig = reactive([
      {
        key: 'login',
        tab: 'Вход в систему',
        button: { text: 'Войти', handler: (values) => console.log('Войти', values) },
      },
      {
        key: 'register',
        tab: 'Регистрация',
        button: {
          text: 'Зарегистрироваться',
          handler: () => console.log('Зарегистрировался'),
        },
      },
    ])
    return {
      activeKey,
      tabConfig,
    }
  },
  components: { AuthForm },
}
</script>

<style scoped></style>
