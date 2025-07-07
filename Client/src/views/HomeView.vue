<template>
  <div class="home">
    <div class="hero">
      <HeroSection />
    </div>
    <div class="description">
      <p>
        Step into a world of automotive excellence. Our showroom features an exceptional collection
        of new and pre-owned vehicles, meticulously selected to fulfill every desire. Take the first
        step: your next adventure awaits
      </p>
      <button v-if="!isVisible" @click="isVisible = true">Explore our collection</button>
    </div>

    <div v-if="isVisible" class="cars-section">
      <CarsComponent />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CarsComponent from '../components/CarsComponent.vue'
import HeroSection from '@/components/HeroSection.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    CarsComponent,
    HeroSection,
  },
  data() {
    return {
      isVisible: false,
    }
  },
})
</script>

<style scoped>
.home {
  min-height: 100vh;
}

button {
  border-radius: 5px;
  padding: 10px 20px;
  background-color: var(--secondary-text);
  color: var(--primary-text);
  border: none;
  cursor: pointer;
}
button:hover {
  transition:
    background-color 0.3s,
    color 0.3s;
  background-color: var(--tertiary-text);
}

.description {
  text-align: center;
  margin: 2rem auto;
}
</style>
