<template>
  <a-form
    class="form"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
    :model="RequestForm"
    :validate-messages="validateMessages"
  >
    <a-form-item name="name" label="ФИО" :rules="[{ required: true }]">
      <a-input v-model:value="RequestForm.name" placeholder="ФИО" />
    </a-form-item>

    <a-form-item name="phone" label="Телефон" :rules="[{ required: true }]">
      <a-input
        :value.number="RequestForm.phone"
        @change="phoneEdit"
        placeholder="Телефон"
        :maxlength="22"
      />
    </a-form-item>

    <a-form-item name="money" label="Сумма" :rules="[{ required: true }]">
      <a-input
        v-model:value.number="RequestForm.money"
        placeholder="Сумма заявки"
      />
    </a-form-item>

    <a-form-item>
      <a-select v-model:value="status">
        <a-select-option value="done">Завершён</a-select-option>
        <a-select-option value="cancelled">Отменён</a-select-option>
        <a-select-option value="active">Активен</a-select-option>
      </a-select>
    </a-form-item>

    <a-button type="primary" html-type="submit" @click="">Создать</a-button>
  </a-form>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  setup() {
    const RequestForm = reactive({
      name: '',
      phone: '',
      money: '',
    })

    const phone = ref<string>('')

    const status = ref<string>('Активен')

    const validateMessages = {
      required: 'Поле ${label} обязательно к заполнению',
      types: {
        email: '${label} введён некорректно. Попробуйте ещё раз',
      },
    }
    const onFinish = (values: any) => {
      console.log('Success:', values)
    }

    const phoneEdit = (e) => {
      const input = e.target.value
      RequestForm.phone = input
        .split('')
        .filter((el) => !Object.is(+el, NaN) || ['-', '+'].includes(el))
        .join('')
    }

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo)
    }
    return {
      status,
      RequestForm,
      onFinish,
      onFinishFailed,
      validateMessages,
      phone,
      phoneEdit,
    }
  },
})
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
</style>
