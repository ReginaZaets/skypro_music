import React from "react";
import Image from "next/image";
import styles from "./Sidebar.module.css";
import Link from "next/link";
import User from "@components/User/User";

const Sidebar = () => {
  return (
    <div className={styles.mainSidebar}>
      <User />
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          <div className={styles.sidebarItem}>
            <Link className={styles.sidebarLink} href="/tracks/category/1">
              <Image
                className={styles.sidebarImg}
                src="/images/playlist01.png"
                alt="Плейлист дня"
                width={256}
                height={75}
                priority
              />
            </Link>
          </div>
          <div className={styles.sidebarItem}>
            <Link className={styles.sidebarLink} href="/tracks/category/2">
              <Image
                className={styles.sidebarImg}
                src="/images/playlist02.png"
                alt="day's playlist"
                width={256}
                height={75}
              />
            </Link>
          </div>
          <div className={styles.sidebarItem}>
            <Link className={styles.sidebarLink} href="/tracks/category/3">
              <Image
                className={styles.sidebarImg}
                src="/images/playlist03.png"
                alt="day's playlist"
                width={256}
                height={75}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
