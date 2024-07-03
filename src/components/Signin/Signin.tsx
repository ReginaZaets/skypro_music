"use client";
import React, { useEffect, useState } from "react";
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
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };
  const validateForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!formData.email && !formData.password) {
      setError("Введите логин и пароль");
      return false;
    } else if (!formData.email) {
      setError("Введите почту");
      return false;
    } else if (!formData.password) {
      setError("Введите пароль");
      return false;
    }
    return true;
  };

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!validateForm(e)) return;
    try {
      await Promise.all([
        dispatch(getTokens(formData)).unwrap(),
        dispatch(getUser(formData)).unwrap(),
      ]);
      router.push("/");
    } catch (error: any) {
      setError(error.message);
    }
  }

  const handleReg = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/signup");
  };

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
                  priority
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
            {error && <p className={styles.error}>{error}</p>}
            <button onClick={handleSubmit} className={styles.modalBtnEnter}>
              Войти
            </button>
            <button onClick={handleReg} className={styles.modalBtnSignup}>
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
