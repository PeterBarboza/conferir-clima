export interface IForecast {
  city: string
  description: string
  condition_slug: string
  time: string
  date: string
  temp: string
  wind_speedy: string
  humidity: string
  sunrise: string
  sunset: string
  forecast: weekForecast[]
}

export interface IApiResponse {
  results: IForecast
}

interface weekForecast {
  date: string
  weekday: string
  max: number
  min: number
  description: string
  condition: string
}
