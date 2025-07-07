<template>
  <div class="home">
    <div class="hero">
      <HeroSection />
    </div>
    <DescriptionCard />
    <button v-if="!isVisible" @click="isVisible = true">Explore our collection</button>
    <div v-if="isVisible" class="cars-section">
      <CarsComponent />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CarsComponent from '../components/CarsComponent.vue'
import HeroSection from '@/components/HeroSection.vue'
import DescriptionCard from '@/components/DescriptionCard.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    CarsComponent,
    HeroSection,
    DescriptionCard,
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
  height: 10vh;
  width: 20vw;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: var(--secondary-text);
  color: var(--primary-text);
  border: none;
  cursor: pointer;
  margin: 3rem 0;
}
button:hover {
  transition:
    background-color 0.5s,
    color 0.3s;
  background-color: var(--primary-color);
  color: var(--secondary-text);
}
</style>
