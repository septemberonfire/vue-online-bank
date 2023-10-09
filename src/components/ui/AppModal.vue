<template>
  <div class="modal-backdrop" @click="$emit('close')">
    <div class="modal" @click.stop>
      <div class="modal-headline">
        <h3>{{ title }}</h3>
        <a-button danger @click="$emit('close-window')">X</a-button>
      </div>

      <RequestModal></RequestModal>
    </div>
  </div>
</template>

<script>
import RequestModal from '@/components/request/RequestModal.vue'

export default {
  emits: ['close', 'close-window'],
  props: ['title'],
  components: { RequestModal },
}
</script>

<style scoped>
.modal {
  display: flex;
  flex-direction: column;
}
.modal-headline {
  display: flex;
  justify-content: space-between;
}
</style>
