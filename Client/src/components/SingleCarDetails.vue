<template>
  <div class="car-wrapper">
    <div v-if="error" class="error-message">
      <p>Something went wrong:</p>
      <p>{{ error }}</p>
    </div>

    <div v-else-if="car" class="car-details-card">
      <img :src="car.url" :alt="car.model" class="car-image" />
      <div class="car-info">
        <h2>{{ car.model }}</h2>
        <p><strong>Year:</strong> {{ car.year }}</p>
        <p><strong>Price:</strong> ${{ car.price }}</p>
        <p>{{ car.description }}</p>
      </div>
    </div>
    <div v-else class="loading-message">
      <p>Loading car details...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, type Ref } from 'vue'
import { getSingleCar } from '@/composables/getSingleCar'
import type { Car } from '../types/cars'

export default defineComponent({
  name: 'SingleCarDetails',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { car, error, load } = getSingleCar() as {
      car: Ref<Car | null>
      error: Ref<string | null>
      load: (id: string) => void
    }

    onMounted(() => {
      const carIdToLoad = props.id
      if (carIdToLoad) {
        load(carIdToLoad)
      } else {
        error.value = 'Car ID not found. Please provide an ID via prop.'
      }
    })

    return {
      car,
      error,
    }
  },
})
</script>

<style scoped>
.car-wrapper {
  background-color: var(--secondary-color);
}
/* --- Main Card Container --- */
.car-details-card {
  margin: 2rem auto; /* More vertical margin */
  padding: 0; /* Remove padding from the main card to make image stick to edge */
  border-radius: 5px;
  background: var(--primary-color);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: row;
  max-width: 1200px; /* Set a max-width for larger screens */
  overflow: hidden;
}

/* --- Car Image --- */
.car-image {
  width: 50%;
  height: auto; /* Maintain aspect ratio */
  object-fit: cover;
  border-radius: 5px 0 0 5px; /* Apply border-radius only to the left corners */
  flex-shrink: 0;
}

/* --- Car Info (Textual details wrapper) --- */
.car-info {
  width: 50%; /* Text details take the other half */
  padding: 1.5rem; /* Add padding to the text content */
  display: flex;
  flex-direction: column; /* Stack text details vertically */
  justify-content: center; /* Center content vertically */
}

/* --- Error/Loading Messages --- */
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

/* --- Text Styling --- */
h2 {
  color: var(--tertiary-text);
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: center;
}

p {
  line-height: 1.6;
  margin-bottom: 0.8rem; /* Slightly more space between paragraphs */
  color: var(--tertiary-text);
}

strong {
  color: var(--secondary-text);
}

/* --- Responsive Adjustments --- */
@media (max-width: 768px) {
  .car-details-card {
    flex-direction: column; /* Stack image and details vertically on smaller screens */
    max-width: 100%; /* Wider on smaller screens */
  }

  .car-image {
    width: 100%; /* Image takes full width */
    height: 250px; /* Fixed height for image on mobile, adjust as needed */
    border-radius: 8px 8px 0 0; /* Apply border-radius to top corners */
  }

  .car-info {
    width: 90%; /* Text details take full width */
    padding: 1rem; /* Adjust padding for mobile */
  }

  h2 {
    text-align: center; /* Center title on mobile */
  }

  p {
    text-align: left; /* Keep paragraphs left-aligned for readability */
  }
}

@media (max-width: 480px) {
  .car-details-card {
    margin: 1rem auto; /* Less margin on very small screens */
  }
}
</style>
