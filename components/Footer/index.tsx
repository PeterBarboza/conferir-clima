import style from "./style.module.scss"

export function Footer() {
  return (
    <footer className={style.footer}>
      <h2>
        Made with 💗 by Pedro Barboza
      </h2>
      <p>Come visit my medias</p>
      <ul>
        <li>
          <a href="">Linkedin</a>
        </li>
        <li>
          <a href="">Github</a>
        </li>
      </ul>
    </footer>
  )
}