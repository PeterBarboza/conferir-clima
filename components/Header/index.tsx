import { ReactNode } from "react"

import styles from "style.module.scss"

type Props = {
  children: ReactNode
}

export function Header({ children }: Props) {
  return (
    <header className={styles.header}>
      {children}
    </header>
  )
}