<template>
  <TheNavbar></TheNavbar>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
export default {
  setup() {

  },
  components: {TheNavbar}
}
</script>


<style>

</style>