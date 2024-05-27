import React from "react";
import Image from "next/image";
import styles from "./Signup.module.css";
import Link from "next/link";

const Signup = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerSignup}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin}>
            <Link href="/">
              <div className={styles.modalLogo}>
                <Image
                  src="/images/logoModal.png"
                  alt="logo"
                  width={256}
                  height={75}
                />
              </div>
            </Link>
            <input
              className={styles.modalInput}
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              className={styles.modalInput}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <input
              className={styles.modalInput}
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <button className={styles.modalBtnSignupEnt}>
              <Link href="/signin">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
