<template>
  <div>
    <h3>Регистрация</h3>
    <p v-if="errorMessage" class="auth-err">{{ errorMessage }}</p>
    <a-form
      name="registerForm"
      :model="registerForm"
      :label-col="{ span: 2 }"
      :validate-messages="validateMessages"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Email"
        name="username"
        :rules="[
          {
            required: true,
            type: 'email',
          },
        ]"
      >
        <a-input
          placeholder="Введите email"
          v-model:value="registerForm.username"
          id="register-email"
        />
      </a-form-item>

      <a-form-item
        label="Пароль"
        name="password"
        :rules="[
          { required: true },
        ]"
      >
        <a-input-password
          placeholder="Введите пароль"
          v-model:value="registerForm.password"
          id="register-password"
        />
      </a-form-item>

      <a-form-item>
        <a-button type="primary" html-type="submit" class="auth-btn" :disabled="!isValid">Зарегистрироваться</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { reactive, ref, computed } from "vue";
export default {
  setup() {
    const errorMessage = ref('')
    const registerForm = reactive({
      username: "",
      password: "",
    });
    const validateMessages = {
      required: "Поле ${label} обязательно к заполнению",
      types: {
        email: "${label} введён некорректно. Попробуйте ещё раз"
      },
    };
    const isValid = computed(() => registerForm.username && registerForm.password)
    const onFinish = (values) => {
      console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
      errorMessage.value = 'Произошла ошибка'
    };
    return {
      registerForm,
      onFinish,
      onFinishFailed,
      validateMessages,
      isValid,
      errorMessage
    };
  },
};
</script>

<style scoped>
.card {
  margin: 16px;
}
.auth-btn {
  width: fit-content;
  padding: 0 40px;
  float: right;
}
.auth-err {
  color: red;
}
</style>
