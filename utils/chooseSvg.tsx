import clearDay from "../assets/climates/clearDay.svg"
import clearNight from "../assets/climates/clearNight.svg"
import hail from "../assets/climates/hail.svg"
import rain from "../assets/climates/rain.svg"
import snow from "../assets/climates/snow.svg"
import storm from "../assets/climates/storm.svg"
import notFound from "../assets/climates/notFound.svg"
import cloud from "../assets/climates/cloud.svg"
import fog from "../assets/climates/fog.svg"

export function chooseSvg(climate: string) {
  switch (climate) {
    case "clear_day":
      return clearDay

    case "none_day":
      return clearDay

    case "clear_night":
      return clearNight

    case "none_night":
      return clearNight

    case "cloud":
      return cloud

    case "cloudly_day":
      return cloud

    case "cloudly_night":
      return cloud

    case "storm":
      return storm

    case "snow":
      return snow

    case "hail":
      return hail

    case "rain":
      return rain

    case "fog":
      return fog

    default:
      return notFound
  }
}