<template>
  <div v-if="error" class="error-message">
    <p>Something went wrong:</p>
    <p>{{ error }}</p>
  </div>

  <div v-else-if="car" class="car-details">
    <img :src="car.url" :alt="car.model" class="car-image" />
    <p><strong>Model:</strong> {{ car.model }}</p>
    <p><strong>Year:</strong> {{ car.year }}</p>
    <p><strong>Price:</strong> ${{ car.price }}</p>
    <p><strong>Description:</strong> {{ car.description }}</p>
  </div>
  <div v-else class="loading-message">
    <p>Loading car details...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch, type Ref } from 'vue'
import { getSingleCar } from '@/composables/getSingleCar'
import type { Car } from '../types/cars'

export default defineComponent({
  name: 'SingleCarDetails',
  props: {
    id: {
      // Expects 'id' as a prop
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
      const carIdToLoad = props.id // Get the ID from the prop
      if (carIdToLoad) {
        load(carIdToLoad) // Pass the ID to the composable's load function
      } else {
        error.value = 'Car ID not found. Please provide an ID via prop.'
      }
    })

    // Watch changes for props.id
    watch(
      () => props.id,
      (newId, oldId) => {
        // Change the oldId to newId
        if (newId && newId !== oldId) {
          load(newId) // Reload when the prop changes
        }
      },
      { immediate: false }, // Don't trigger on initial load
    )

    return {
      car,
      error,
    }
  },
})
</script>

<style scoped>
.car-details {
  max-width: 30vw;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fafafa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.car-image {
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 4px;
  object-fit: cover;
}

.error-message {
  color: #d32f2f;
  background-color: #ffebee;
  border: 1px solid #ef9a9a;
  padding: 1rem;
  margin: 1rem auto;
  border-radius: 4px;
  max-width: 30vw;
  text-align: center;
}

.loading-message {
  padding: 1rem;
  margin: 1rem auto;
  text-align: center;
  color: #555;
  max-width: 30vw;
}

h2 {
  color: #333;
  margin-bottom: 0.8rem;
  text-align: center;
}

p {
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

strong {
  color: #444;
}
</style>
