<template>
  <div class="hero">
    <img src="../assets/img/background.png" alt="Background Image" class="background-image" />
    <div class="hero-content">
      <div class="layer">
        <h1>Explore Automotive Excellence</h1>
        <h3>From elegance to power, find the car of your dreams in our showroom</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HeroSection',
})
</script>

<style scoped>
.hero {
  width: 100%;
  height: 100vh;
  overflow: hidden; /* Prevent overflow */
  display: flex; /* Use flexbox to center content */
  justify-content: center;
  align-items: center;
  margin: 0;
}

img.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1; /* Ensure the image is behind the content */
  box-shadow: var(--shadow);
}

.hero-content {
  width: 100%;
  height: 100%;
  display: flex; /* Use flexbox to center .layer */
  justify-content: center;
  align-items: center;
  z-index: 0; /* Make sure hero-content is above the background image */
}

.layer {
  background-color: rgba(0, 0, 0, 0.396);
  width: 100%;
  height: 100%;
  position: absolute; /* Position it relative to .hero-content */
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; /* Center text if lines wrap */
  box-sizing: border-box; /* Include padding in width/height calculation */
  color: #dbd8d8;
}

h1 {
  font-size: 3em;
  margin-bottom: 15px;
  color: var(--primary-text);
}

h3 {
  font-size: 1.5em;
  color: var(--primary-text);
  max-width: 80%; /* Prevent text from being too wide on large screens */
}
</style>
