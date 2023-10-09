<template>
  <AppPage title="Список заявок">
    <template #header>
      <a-button type="primary" @click="modal = true">Создать</a-button>
    </template>
    <template #request>
      <RequestTable :requests="[]"></RequestTable>
    </template>
  </AppPage>
  <teleport to="body">
    <AppModal
      v-if="modal"
      title="Создать заявку"
      @close="modal = false"
      @close-window="modal = false"
    >
    </AppModal>
  </teleport>
</template>

<script lang="ts">
import { ref } from 'vue'

import RequestTable from '@/components/request/RequestTable.vue'
import AppModal from '@/components/ui/AppModal.vue'
import AppPage from '@/components/ui/AppPage.vue'

export default {
  setup() {
    const modal = ref(false)
    return { modal }
  },
  components: { AppPage, RequestTable, AppModal },
}
</script>

<style></style>
