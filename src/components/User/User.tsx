"use client";
import { useInitializeLikedTracks } from "../../hooks/likes";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { useRouter } from "next/navigation";
import styles from "./User.module.css";
import { getTokens, getUser, logout } from "../../store/features/authSlice";
import { useEffect } from "react";
import { refreshTokens } from "../../Api/user";

export default function User() {
  useInitializeLikedTracks();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const userName = useAppSelector((state) => state.user.user?.username);
  // if (!userName) {
  //   return null;
  // }
  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
    localStorage.removeItem("user");
    localStorage.removeItem("tokens");
  };
  
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
