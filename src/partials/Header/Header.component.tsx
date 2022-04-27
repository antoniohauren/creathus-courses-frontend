import React from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  authenticatedUser?: string;
}

const Header = ({ authenticatedUser }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={"/imgs/logo.png"} alt="Samsung Ocean logo" />
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
        {!authenticatedUser ? (
          <>
            <a className={styles.loginItem} href="/">
              Entrar
            </a>
            /
            <a className={styles.loginItem} href="/">
              Cadastrar
            </a>
          </>
        ) : (
          <a href="/" className={styles.user} data-testid="user">
            {authenticatedUser}
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
