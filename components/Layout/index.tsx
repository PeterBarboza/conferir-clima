import { ReactNode } from "react"

import styles from "style.module.scss"

type Props = {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  )
}