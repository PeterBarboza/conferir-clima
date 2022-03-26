import Image from "next/image"

import { chooseSvg } from "../../utils/chooseSvg"

import styles from "./style.module.scss"

import minArrow from "../../assets/helpers/min-arrow.svg"
import maxArrow from "../../assets/helpers/max-arrow.svg"

type Props = {
  date: string
  weekday: string
  min: number
  max: number
  description: string
  condition: string
}

export function WeekCard({
  date,
  weekday,
  min,
  max,
  description,
  condition
}: Props) {
  const illustration = chooseSvg(condition)

  return (
    <div className={styles.weekCard}>
      <div className={styles.weekDay}>
        {date} - {weekday}
      </div>
      <div className={styles.illustration}>
        <Image src={illustration} alt={description} width="50" height="50" />
        <p>{description}</p>
      </div>
      <div className={styles.minMax}>
        <div>
          <Image src={minArrow} alt="Mínima" />
          <span>{min}</span>
        </div>
        <div>
          <Image src={maxArrow} alt="Mínima" />
          <span>{max}</span>
        </div>
      </div>
    </div>
  )
}