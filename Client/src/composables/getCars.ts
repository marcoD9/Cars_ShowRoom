import type { Car } from '@/types/cars'
import { ref } from 'vue'
export function getCars() {
  // This function fetches the list of cars from the API and returns them
  const cars = ref<Car[]>([])
  const error = ref<string | null>(null)

  const load = async (): Promise<void> => {
    try {
      const data = await fetch('https://cars-showroom-wkh5.onrender.com/cars')
      if (!data.ok) {
        throw new Error('Network response was not ok')
      }
      cars.value = await data.json()
    } catch (err) {
      console.error('Error fetching cars:', err)
      // Set the message to the error message
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = String(err)
      }
    }
  }
  return { cars, error, load }
}
