'use client'
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Signin.module.css";
import Link from "next/link";
import classNames from "classnames";
import { useAppDispatch } from "../../hooks/store";
import { getTokens, getUser } from "../../store/features/authSlice";
import { useRouter } from "next/navigation";

const Signin = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({ email: "", password: "" });

  const despatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      await Promise.all([
        despatch(getTokens(formData)).unwrap(),
        despatch(getUser(formData)).unwrap(),
      ]);
      router.push("/");
    } catch (error) {
      //сделать обработку ошибок, стейт error
      console.log(error);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerEnter}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin} action="#">
            <Link href="/">
              <div className={styles.modalLogo}>
                <Image
                  src="/images/logoModal.png"
                  alt="logo"
                  width={250}
                  height={75}
                />
              </div>
            </Link>
            <input
              className={classNames(styles.modalInput, styles.login)}
              type="text"
              name="email"
              placeholder="Почта"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className={styles.modalInput}
              type="password"
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleChange}
            />
            <button onClick={handleSubmit} className={styles.modalBtnEnter}>
              Войти
            </button>
            <button className={styles.modalBtnSignup}>
              <Link href="/signup">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
