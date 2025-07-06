import type { Car } from '@/types/cars'
import { ref } from 'vue'

export function getSingleCar() {
  const car = ref<Car | null>(null)
  const error = ref<string | null>(null)
  const loading = ref(false)

  const load = async (id: string) => {
    // This 'id' is what you receive from SingleCarDetails.vue
    loading.value = true
    error.value = null // Clear previous errors
    car.value = null // Clear previous car data

    try {
      // Construct the API URL with the ID as a QUERY PARAMETER
      const url = `https://cars-showroom-wkh5.onrender.com/cars/${id}`

      const response = await fetch(url)

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Car not found.')
        }
        throw new Error(`Could not fetch car data: ${response.statusText || response.status}`)
      }
      const data = await response.json()
      car.value = data
    } catch (err) {
      if (err instanceof Error) {
        console.error('Error fetching car:', err.message)
        error.value = err.message
      } else {
        console.error('Error fetching car:', err)
        error.value = String(err)
      }
    } finally {
      loading.value = false
    }
  }

  return { car, error, loading, load }
}
