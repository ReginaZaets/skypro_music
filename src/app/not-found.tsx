"use client"
import React from "react";
import styles from "./not-found.module.css";
import Header from "@components/Header/Header";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  const click = () => {
    router.push("/")
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          <div className={styles.mainCenterblock}>
            <div className={styles.centerblockContent}>
              <h1>404</h1>
              <h2>Страница не найдена</h2>
              <p>Возможно, она была удалена или перенесена на другой адрес</p>
              <button  className={styles.button} onClick={click}>Вернуться на главную</button>
            </div>
          </div>
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
};

export default NotFound;
