<template>
  <div class="home">
    <p>Home page</p>
    <CarsComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CarsComponent from '../components/CarsComponent.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    CarsComponent,
  },
})
</script>

<style>
.home {
  min-height: 100vh;
}
</style>
