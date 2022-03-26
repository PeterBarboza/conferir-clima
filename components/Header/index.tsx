import Image from "next/image"

import logoSvg from "../../assets/helpers/logo.svg"

import styles from "./style.module.scss"

export function Header() {
  return (
    <header className={styles.header}>
      <Image src={logoSvg} alt="Conferir clima" />
    </header>
  )
}