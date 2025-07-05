<template>
  <div>
    <h2>Our Amazing Cars</h2>
    <div v-if="error" class="error-message">
      <p>Oops! Something went wrong:</p>
      <p>{{ error }}</p>
    </div>

    <div v-else-if="cars.length === 0 && !error">
      <p>Loading cars...</p>
    </div>

    <div v-else class="cars-container">
      <router-link
        v-for="car in cars"
        :key="car.id"
        :to="{ name: 'car-details', params: { id: car.id } }"
        class="car-card-link"
      >
        <!-- Use router-link to navigate to car details -->
        <div class="car-card">
          <h3>{{ car.model }}</h3>
          <img :src="car.url" :alt="car.model" />
          <p>Price : {{ car.price }}$</p>
          <p>Year: {{ car.year }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, type Ref } from 'vue'
import { getCars } from '../composables/getCars'
import type { Car } from '../types/cars'

export default defineComponent({
  name: 'CarsComponent',
  setup() {
    const { cars, error, load } = getCars() as {
      cars: Ref<Car[]>
      error: Ref<string | null>
      load: () => void
    }

    onMounted(() => {
      load()
    })

    return {
      cars,
      error,
    }
  },
})
</script>

<style scoped>
/* Add some basic styling for cars component */
.error-message {
  color: red;
  border: 1px solid red;
  padding: 10px;
  margin: 20px 0;
  background-color: #ffeaea;
}
/*Add styles for the cars container an car cards*/
.cars-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.car-card-link {
  text-decoration: none; /* Remove default underline from links */
  color: inherit; /* Inherit text color from parent */
}
.car-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  width: 200px;
  text-align: center;
  background-color: #b3b2b2;
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out; /* Smooth hover effect */
  cursor: pointer; /* Indicate it's clickable */
}
.car-card:hover {
  transform: translateY(-5px); /* Lift effect on hover */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
}
.car-card img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 0.5rem; /* Space below image */
}
h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}
p {
  color: #4a4a4a;
  font-size: 0.95em;
}
</style>
