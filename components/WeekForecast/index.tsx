import { ReactNode } from "react"

import styles from "./style.module.scss"

type Props = {
  children: ReactNode
}

export function WeekForecast({ children }: Props) {
  return (
    <section className={styles.weekForecast}>
      {children}
    </section>
  )
}