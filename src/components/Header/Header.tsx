import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <nav className={styles.mainNavNav}>
      <div className={styles.logoNav}>
        <Image
          className={styles.logoImage}
          src="/images/logo.png"
          alt="imageLogo"
          width={256}
          height={75}
        />
      </div>
      <div className={styles.navBurger}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
      <div className={styles.navMenu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link href="/" className={styles.menuLink}>
              Главное
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/" className={styles.menuLink}>
              Мой плейлист
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/signin" className={styles.menuLink}>
              Войти
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
