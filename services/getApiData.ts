import axios from "axios"
import { IApiResponse, IForecast } from "../interfaces/IForecast"

export async function getApiData(url: string): Promise<IApiResponse> {
  const data: IApiResponse = (await axios.get(url)).data

  return data
}