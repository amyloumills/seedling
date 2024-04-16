import { ref, onMounted } from 'vue'
import axios from 'axios'
import type { Plant } from '../types/plantsTypes'

export function useFetchPlants(apiKey: string) {
  const plantsData = ref<Plant>([])

  onMounted(() => {
    axios
      .get(`https://perenual.com/api/species-list?key=${apiKey}`)
      .then((response) => {
        plantsData.value = response.data.data
      })
      .catch((error) => {
        console.error('Error fetching plants data:', error)
      })
  })

  return { plantsData }
}
