<template>
  <div class="description-wrapper">
    <div class="description-card">
      <h3>
        Welcome to an automotive destination unlike any other. We specialize in sourcing and
        showcasing an exquisite collection of <em>rare</em>, <em>high-value</em>, and
        <em>niche</em> vehicles. From limited-production <strong>hypercars</strong> to meticulously
        preserved <strong>classics</strong> and <strong>bespoke</strong> models, our inventory is a
        testament to automotive artistry and performance. If you seek a machine that stands apart, a
        car that embodies a specific passion or era, you'll find it within our meticulously curated
        selection. Experience automotive <em>excellence</em> redefined. Step into a world of
        automotive excellence. Our showroom features an exceptional collection of new and pre-owned
        vehicles, meticulously selected to fulfill every desire. Take the first step: your next
        adventure awaits.
      </h3>
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
  margin: 2rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--tertiary-text);
  background-color: var(--primary-color);
  box-shadow: var(--shadow);

  min-height: 50vh;
  height: auto;
  padding: 1rem 4rem;
}

.description-card h3 {
  line-height: 1.6;
  font-size: 1.25rem;
  margin: 0;
  font-weight: 400;
}

.description-card h3 em {
  font-style: italic;

  color: var(--secondary-text);
}

.description-card h3 strong {
  font-weight: 700;
}
</style>
