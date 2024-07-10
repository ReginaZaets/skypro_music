"use client";
import { useInitializeLikedTracks } from "../../hooks/likes";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { useRouter } from "next/navigation";
import styles from "./User.module.css";
import { logout } from "../../store/features/authSlice";
import { useEffect, useState } from "react";
import { useRefreshToken } from "../../hooks/refreshTokenAuto";

export default function User() {
  useInitializeLikedTracks();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isClient, setIsClient] = useState(false);
  const userName = useAppSelector((state) => state.user.user?.username);
  const refresh = useAppSelector((state) => state.user.tokens?.refresh);
  useRefreshToken(refresh);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!userName) {
    return null;
  }
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
