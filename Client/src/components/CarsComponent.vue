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
          <img :src="car.url" :alt="car.model" class="car-image" />
          <div class="car-details">
            <h3>{{ car.model }}</h3>
            <p>Price : {{ car.price }}$</p>
            <p>Year: {{ car.year }}</p>
          </div>
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
/* --- Error Message --- */
.error-message {
  color: var(--secondary-text);
  border: 1px solid red;
  padding: 1rem;
  margin: 2rem 0;
  background-color: #ffeaea;
}

/* --- Cars Container --- */
.cars-container {
  display: flex;
  flex-direction: column; /* Stacks cards in a column */
  align-items: center; /* Centers the cards horizontally */
  gap: 5rem;
  padding: 2rem 0; /* Add some vertical padding for spacing */
}

/* --- Car Card Link (Router-link wrapper) --- */
.car-card-link {
  text-decoration: none; /* Remove default underline from links */
  color: inherit; /* Inherit text color from parent */
  width: 90%;
}

/* --- Car Card --- */
.car-card {
  display: flex; /* Makes elements inside the card display in a row */
  flex-direction: row; /* Explicitly sets row direction */
  align-items: center; /* Vertically aligns image and text details */
  border-radius: 25px;
  background-color: #ffffff;
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  cursor: pointer;
  max-height: 40vh; /* Fixed height for the card */
  overflow: hidden; /* Hide content if it overflows the fixed height */
  box-shadow: var(--shadow);
}

.car-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

/* --- Car Image --- */
.car-image {
  width: 40%; /* Image takes 40% of the card's width */
  height: 100%; /* Image fills its allocated height */
  object-fit: cover; /* Ensures the image covers the area without distortion */
  border-radius: 25px;
}

/* --- Car Details (Text content) --- */
.car-details {
  display: flex;
  flex-direction: column; /* Stack text elements vertically */
  justify-content: center; /* Center content vertically within its area */
  flex-grow: 1; /* Allows details to take up remaining space */
  text-align: center; /* Align text to the center */
  padding: 2rem;
}

.car-details h3 {
  color: var(--tertiary-text);
  font-size: 1.2em;
}

.car-details p {
  color: var(--tertiary-text);
  font-size: 0.95em;
  margin: 0.2rem;
}
</style>
