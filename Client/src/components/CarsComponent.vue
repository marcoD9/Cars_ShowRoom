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
      <div v-for="car in cars" :key="car.id" class="car-card">
        <h3>{{ car.model }}</h3>
        <img :src="car.url" />
        <p>Price : {{ car.price }}$</p>
        <p>Year: {{ car.year }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue' // Import onMounted hook
import { getCars } from '../composables/getCars' // Import your composable function

export default defineComponent({
  name: 'CarsComponent',
  setup() {
    // Destructure the reactive variables and the load function from your composable
    const { cars, error, load } = getCars()

    // Call the load function when the component is mounted
    onMounted(() => {
      load()
    })

    // Return the reactive data to be used in the template
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
.car-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  width: 200px;
  text-align: center;
  background-color: #b3b2b2;
}
.car-card img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}
</style>
