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
          <a href="https://www.linkedin.com/in/pedro-barboza-webdev/" target="_blank" rel="noreferrer">Linkedin</a>
        </li>
        <li>
          <a href="https://github.com/PeterBarboza" target="_blank" rel="noreferrer">Github</a>
        </li>
      </ul>
    </footer>
  )
}