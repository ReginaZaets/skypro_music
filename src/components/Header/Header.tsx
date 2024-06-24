"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  const [openBurger, setOpenBurger] = useState<boolean>(false);
  function onClickBurger() {
    setOpenBurger((prev) => !prev);
  }
  return (
    <nav className={styles.mainNavNav}>
      <div className={styles.logoNav}>
        <Link href="/">
          <Image
            className={styles.logoImage}
            src="/images/logo.png"
            alt="imageLogo"
            width={256}
            height={75}
          />
        </Link>
      </div>
      <div className={styles.navBurger} onClick={onClickBurger}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
      {openBurger && (
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
      )}
    </nav>
  );
};

export default Header;
