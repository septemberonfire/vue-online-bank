<template>
  <div class="card">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane v-for="tab in tabConfig" :key="tab.key" :tab="tab.tab">
        <p v-if="errMessage" class="auth-error-message">{{ errMessage }}</p>
        <AuthForm :headerText="tab.tab" :button="tab.button" ></AuthForm>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '@/main.ts'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import AuthForm from '@/components/AuthForm.vue'


export default {
  setup() {
    const router = useRouter()
    const activeKey = ref('login')
    const errMessage = ref('')
    
    const tabConfig = reactive([
      {
        key: 'login',
        tab: 'Вход в систему',
        button: {
          text: 'Войти',
          handler: async (values) => {
            console.log('Войти', values)
            try {
              await signInWithEmailAndPassword(auth, values.username, values.password)
              localStorage.setItem('username', values.username)
              router.push('/')              
            } catch (error: any) {
              console.log(error.code);
              if (error.code === 'auth/invalid-login-credentials') {
                errMessage.value = 'Пользователь с такими данными не найден'
              }
            }
          },
        },
      },
      {
        key: 'register',
        tab: 'Регистрация',
        button: {
          text: 'Зарегистрироваться',
          handler: async (values) => {
            try {
              await createUserWithEmailAndPassword(auth, values.username, values.password)
              activeKey.value = 'login'
            } catch (error) {
              console.log(error);
              
            }
            

          },
        },
      },
    ])
    return {
      activeKey,
      tabConfig,
      errMessage,
    }
  },
  components: { AuthForm },
}
</script>

<style scoped>
.auth-error-message {
  color: red;
}
</style>
