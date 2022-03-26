import clearDay from "../assets/climates/clearDay.svg"
import clearNight from "../assets/climates/clearNight.svg"
import hail from "../assets/climates/hail.svg"
import rain from "../assets/climates/rain.svg"
import snow from "../assets/climates/snow.svg"
import storm from "../assets/climates/storm.svg"

//TODO: Pegar SVG para nublado e neblina
import nublado from "../assets/climates/cloud.svg"
import neblina from "../assets/climates/fog.svg"

export function chooseSvg(climate: string) {
  switch (climate) {
    case "clear_day" || "none_day":
      return clearDay

    case "clear_night" || "none_night":
      return clearNight

    case "cloud" || "cloudly_day" || "cloudly_night":
      return nublado

    case "storm ":
      return storm

    case "snow":
      return snow

    case "hail":
      return hail

    case "rain":
      return rain

    case "fog":
      return neblina
  }
}