"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { logout } from "../../store/features/authSlice";
import { useRouter } from "next/navigation";

const Header = () => {
  const [openBurger, setOpenBurger] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  function onClickBurger() {
    setOpenBurger((prev) => !prev);
  }
  const isAuth = useAppSelector((state) => state.user.user?.username);
  const handleLogout = () => {
    dispatch(logout());
    router.push("/signin");
  };
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
            priority
          />
        </Link>
      </div>
      <div
        data-testid="burger"
        className={styles.navBurger}
        onClick={onClickBurger}
      >
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
              <Link href="/tracks/favorite" className={styles.menuLink}>
                Мой плейлист
              </Link>
            </li>
            <li onClick={handleLogout} className={styles.menuItem}>
              {isAuth ? "Выйти" : "Войти"}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
