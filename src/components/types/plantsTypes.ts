export type Plant = {
  common_name: string
  cycle: string
  default_image: {
    license: string
    license_name: string
    medium_url: string
    original_url: string
    regular_url: string
    small_url: string
    thumbnail: string
  }
  id: number
  other_name: string[]
  scientific_name: string[]
  sunlight: string[]
  watering: string
}[]

export type { Plant as default }
