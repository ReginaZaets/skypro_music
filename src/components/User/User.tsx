"use client";
import { useInitializeLikedTracks } from "../../hooks/likes";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { useRouter } from "next/navigation";
import styles from "./User.module.css";
import { getDataFromLS, logout, refreshToken } from "../../store/features/authSlice";
import { useEffect, useState } from "react";

export default function User() {
  useInitializeLikedTracks();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isClient, setIsClient] = useState(false);
  const userName = useAppSelector((state) => state.user.user?.username);
  const refresh = useAppSelector((state) => state.user.tokens?.refresh);
  // useRefreshToken(refresh);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!userName) {
    return null;
  }
  console.log("токены из локал:", getDataFromLS("tokens"));

  console.log("токены из редакс:", refresh);

  async function token() {
    try {
      if (refresh) {
        await Promise.all([dispatch(refreshToken(refresh)).unwrap()]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  setInterval(() => token(), 180000);


  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
    localStorage.removeItem("user");
    localStorage.removeItem("tokens");
  };

  if (!isClient) {
    return null;
  }

  if (!userName) {
    return null;
  }
  return (
    <div className={styles.sidebarPersonal}>
      <p className={styles.sidebarPersonalName}>{userName}</p>
      <div onClick={handleLogout} className={styles.sidebarIcon}>
        <svg>
          <use xlinkHref="/icon/sprite.svg#logout"></use>
        </svg>
      </div>
    </div>
  );
}
