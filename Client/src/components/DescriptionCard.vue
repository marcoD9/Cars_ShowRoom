<template>
  <div class="description-wrapper">
    <div class="description-card">
      <h1>
        Welcome to an automotive destination unlike any other. We specialize in sourcing and
        showcasing an exquisite collection of <em>rare</em>, <em>high-value</em>, and
        <em>niche</em> vehicles. From limited-production <strong>hypercars</strong> to meticulously
        preserved <strong>classics</strong> and <strong>bespoke</strong> models, our inventory is a
        testament to automotive artistry and performance. If you seek a machine that stands apart, a
        car that embodies a specific passion or era, you'll find it within our meticulously curated
        selection. Experience automotive <em>excellence</em> redefined. Step into a world of
        automotive excellence.
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'descriptionCard',
})
</script>

<style scoped>
.description-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: var(--secondary-color);
  width: 100%;
}

.description-card {
  margin: 0.5rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--primary-text);
  min-height: 50vh;
  height: auto;
  padding: 1rem 2rem;
}

.description-card h1 {
  line-height: 1.6;
  font-size: 1.5em;
  margin: 0;
  font-weight: 700;
  font-weight: bold;
}

.description-card h1 em {
  color: var(--secondary-text);
}

.description-card h1 strong {
  font-weight: 800;
}

@media (max-width: 860px) {
  .description-card {
    margin: 0.2rem 0;
    padding: 0.5rem 1rem;
  }

  .description-card h1 {
    line-height: 1.3;
    font-size: 1.2em;
  }
}
</style>
