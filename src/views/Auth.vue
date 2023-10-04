<template>
  <div class="card">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="login" tab="Вход в систему">
        <Login></Login>
      </a-tab-pane>
      <a-tab-pane key="register" tab="Регистрация" force-render>
        <Register></Register>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import { ref } from "vue";
export default {
  setup() {
    const activeKey = ref("login");
    return {
      activeKey,
    };
  },
  components: { Login, Register },
};
</script>

<style scoped>

</style>
