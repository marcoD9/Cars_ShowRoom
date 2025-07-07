<template>
  <div class="cars-wrapper">
    <div v-if="error" class="error-message">
      <p>Oops! Something went wrong:</p>
      <p>{{ error }}</p>
    </div>

    <div class="loading-message" v-else-if="cars.length === 0 && !error">
      <p>Loading cars...</p>
    </div>

    <div v-else class="cars-container">
      <router-link
        v-for="car in cars"
        :key="car.id"
        :to="{ name: 'car-details', params: { id: car.id } }"
        class="car-card-link"
      >
        <div class="car-card" :style="{ backgroundImage: 'url(' + car.url + ')' }">
          <div class="car-details">
            <h3>{{ car.model }}</h3>
            <p>Price : {{ car.price }} $</p>
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
.cars-wrapper {
  background-color: var(--secondary-color);
  padding: 2rem 0;
}

/* --- Error Message/Loading Messge --- */
.error-message,
.loading-message {
  padding: 1.5rem;
  margin: 2rem auto;
  text-align: center;
  border-radius: 8px;
  max-width: 400px;
  box-shadow: var(--shadow);
}
.error-message {
  color: var(--secondary-text);
  background-color: var(--primary-color);
  border: 1px solid var(--secondary-text);
}

.loading-message {
  color: var(--tertiary-text);
  background-color: var(--primary-color);
  border: 1px solid var(--secondary-color);
}

/* --- Cars Container --- */
.cars-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}

/* --- Car Card Link --- */
.car-card-link {
  text-decoration: none;
  color: inherit;
  width: 95vw;
  max-width: 800px; /* Set a max-width for large screens */
}

/* --- Car Card --- */
.car-card {
  position: relative; /* Crucial for positioning text over the image */
  height: 50vh; /* Define a height for the card */
  min-height: 250px; /* Ensure a minimum height for smaller viewports */
  background-size: cover; /* Make sure the background image covers the whole area */
  background-position: center center; /* Center the background image */
  background-repeat: no-repeat; /* Prevent image repetition */
  border-radius: 25px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  /* Optional: Overlay for better text readability */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.319);
    z-index: 1;
  }

  transition: transform 0.2s ease-in-out;
}

.car-card:hover {
  transition: ease-in-out 0.5s;
  transform: translateY(-5px);
  &::before {
    background-color: rgba(73, 73, 73, 0.247);
  }
}

/* --- Car Details --- */
.car-details {
  position: relative; /* Makes z-index effective for details */
  z-index: 2; /* Ensures text is above the background image and overlay */
  color: var(--primary-text);
  padding: 1.5rem; /* Padding inside the details box */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
}

.car-details:hover {
  transition: ease-in-out 0.5s;
  color: var(--secondary-text);
}
.car-details h3 {
  font-size: 1.8em;
  margin-bottom: 0.5rem;
  font-weight: bold;
  text-align: left;
  width: 100%;
}

.car-details p {
  font-size: 1.1em;
  margin: 0.2rem 0;
  text-align: left;
  width: 100%;
}

/* --- Responsive Adjustments --- */
@media (max-width: 768px) {
  .car-card-link {
    width: 95vw; /* Make cards slightly wider on smaller screens */
  }

  .car-card {
    height: 35vh; /* Adjust height for mobile */
  }

  .car-details h3 {
    font-size: 1.5em; /* Smaller heading on mobile */
  }

  .car-details p {
    font-size: 1em; /* Smaller text on mobile */
  }
}

@media (max-width: 480px) {
  .car-card {
    height: 30vh; /* Even smaller height for very small screens */
  }
}
</style>
