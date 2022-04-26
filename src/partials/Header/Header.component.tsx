import React from "react";
import styles from "./Header.module.css";

import logo from "../../../public/imgs/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Samsung Ocean logo" />
        ocean
      </div>

      <nav>
        <a className={styles.navItem} href="/">
          Trilhas
        </a>
        <a className={styles.navItem} href="/">
          Cursos
        </a>
        <a className={styles.navItem} href="/">
          Agenda
        </a>
      </nav>
      <div className={styles.profileSec}>
        <a className={styles.loginItem} href="/">
          Entrar
        </a>
        /
        <a className={styles.loginItem} href="/">
          Cadastrar
        </a>
      </div>
    </header>
  );
};

export default Header;
