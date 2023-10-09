<template>
  <div class="card request-card">
    <h1 class="card-title">{{ title }}
      <slot name="header"></slot>
    </h1>
      <slot name="request"></slot>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(props) {
    document.title = `${props.title} | Приложение Банка`
  }
}
</script>

<style>
  .request-card {
    display: flex;
    flex-direction: column;
  }
</style>