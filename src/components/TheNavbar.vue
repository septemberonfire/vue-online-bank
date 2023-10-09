<template>
  <nav class="navbar">
    <h3>Online bank</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/"> Заявки </router-link>
      </li>
      <li>
        <router-link to="/help"> Помощь </router-link>
      </li>
      <li>
        <a href="#">Сообщения</a>
      </li>
      <li>
        <a href="#" @click="logout">Выход</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

import { auth } from '@/main.ts'

export default {
  setup() {
    const router = useRouter()
    const logout = async () => {
      try {
        await signOut(auth)
        localStorage.removeItem('username')
        router.push('/auth')
      } catch (error: any) {console.log(error.code);
      }
    }
    return {
      logout,
    }
  },
}
</script>

<style></style>
