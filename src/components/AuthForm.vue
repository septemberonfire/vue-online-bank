<template>
  <div>
    <h3>{{ headerText }}</h3>
    <p v-if="errorMessage" class="auth-err">{{ errorMessage }}</p>
    <a-form
      name="loginForm"
      :model="loginForm"
      :label-col="{ span: 2 }"
      :validate-messages="validateMessages"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      class="auth-form"
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
          v-model:value="loginForm.username"
          :id="`email-${headerText}`"
          class="auth-input"
        />
      </a-form-item>

      <a-form-item label="Пароль" name="password" :rules="[{ required: true }]">
        <a-input-password
          placeholder="Введите пароль"
          v-model:value="loginForm.password"
          :id="`password-${headerText}`"
          class="auth-input"
        />
      </a-form-item>

      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          class="auth-btn"
          :disabled="!isValid"
          >{{ button?.text }}</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  props: {
    headerText: String,
    button: Object,
  },
  setup(props) {
    const errorMessage = ref('')
    const loginForm = reactive({
      username: '',
      password: '',
    })
    const validateMessages = {
      required: 'Поле ${label} обязательно к заполнению',
      types: {
        email: '${label} введён некорректно. Попробуйте ещё раз',
      },
    }
    const isValid = computed(() => loginForm.username && loginForm.password)

    const onFinish = (values) => {
      console.log('Success:', values)
      props?.button?.handler(values)
    }

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo)
      errorMessage.value = 'Произошла ошибка'
    }

    return {
      loginForm,
      onFinish,
      onFinishFailed,
      validateMessages,
      isValid,
      errorMessage,
    }
  },
})
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
