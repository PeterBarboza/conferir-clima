import Image from "next/image"

import styles from "./style.module.scss"

import { chooseSvg } from "../../utils/chooseSvg"

import thermometerPng from "../../assets/helpers/thermometer.png"
import humidityPng from "../../assets/helpers/humidity.png"
import windPng from "../../assets/helpers/wind.png"

type Props = {
  location: string
  climate: string
  hour: string
  date: string
  temperature: string
  windSpeed: string
  airHumidity: string
  sunrise: string
  sunset: string
}

export function MainCard({
  location,
  climate,
  hour,
  date,
  temperature,
  windSpeed,
  airHumidity,
  sunrise,
  sunset
}: Props) {
  const illustration = chooseSvg(climate)

  return (
    <section className={styles.mainCard}>
      <div className={styles.illustration}>
        <Image src={illustration} className={styles.img} alt={climate} />
      </div>
      <div className={styles.metaData}>
        <h1>{location}</h1>
        <p>{hour} - {date}</p>
        <p>{climate}</p>
      </div>
      <div className={styles.status}>
        <div>
          <Image src={thermometerPng} alt="temperatura" width={20} height={20} />
          <span>
            {temperature}
          </span>
        </div>
        <div>
          <Image src={humidityPng} alt="velocidade do vento" width={20} height={20} />
          <span>
            {windSpeed}
          </span>
        </div>
        <div>
          <Image src={windPng} alt="humidade do ar" width={20} height={20} />
          <span>
            {airHumidity}
          </span>
        </div>
      </div>
      <div className={styles.riseAndSet}>
        <div>
          <span>Nascer do Sol</span>
          <span>{sunrise}</span>
        </div>
        <div>
          <span>Pôr do Sol</span>
          <span>{sunset}</span>
        </div>
      </div>
    </section>
  )
}