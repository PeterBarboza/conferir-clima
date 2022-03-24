import { ReactNode } from "react"

import styles from "style.module.scss"

type Props = {
  children: ReactNode
}

export function Main({ children }: Props) {
  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}