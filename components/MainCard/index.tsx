import { useCallback, useEffect, useLayoutEffect, useState } from "react"
import Image from "next/image"

import { chooseSvg } from "../../utils/chooseSvg"

import styles from "./style.module.scss"

import thermometerPng from "../../assets/helpers/thermometer.png"
import humidityPng from "../../assets/helpers/humidity.png"
import windPng from "../../assets/helpers/wind.png"

type Props = {
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
}

export function MainCard({
  city,
  description,
  condition_slug,
  time,
  date,
  temp,
  wind_speedy,
  humidity,
  sunrise,
  sunset
}: Props) {
  const [windowWidth, setWindowWidth] = useState<number>(0)
  const [imageWidth, setImageWidth] = useState<number>(50)

  const illustration = chooseSvg(condition_slug)

  useLayoutEffect(() => {
    setWindowWidth(window.screen.width)

    if (windowWidth > 650) {
      setImageWidth(70)
    }
  }, [windowWidth])

  return (
    <section className={styles.mainCard}>
      <div className={styles.illustration}>
        <Image
          src={illustration}
          className={styles.img}
          alt={condition_slug}
          width={imageWidth}
          height={imageWidth}
        />
      </div>
      <div className={styles.metaData}>
        <h1>{city}</h1>
        <p>{time} - {date}</p>
        <p>{description}</p>
      </div>
      <div className={styles.status}>
        <div>
          <Image src={thermometerPng} alt="temperatura" width={20} height={20} />
          <span>
            {temp}
          </span>
        </div>
        <div>
          <Image src={humidityPng} alt="velocidade do vento" width={20} height={20} />
          <span>
            {wind_speedy}
          </span>
        </div>
        <div>
          <Image src={windPng} alt="humidade do ar" width={20} height={20} />
          <span>
            {humidity}
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