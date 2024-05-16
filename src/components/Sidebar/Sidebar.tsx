import React from "react";
import Image from "next/image";
import styles from "./Sidebar.module.css";


const Sidebar = () => {
  return (
    <div className={styles.mainSidebar}>
      <div className={styles.sidebarPersonal}>
        <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
        <div className={styles.sidebarIcon}>
          <svg>
            <use xlinkHref="icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          <div className={styles.sidebarItem}>
            <a className={styles.sidebarLink} href="#">
              <Image
                className={styles.sidebarImg}
                src="/images/playlist01.png"
                alt="day's playlist"
                width={256}
                height={75}
              />
            </a>
          </div>
          <div className={styles.sidebarItem}>
            <a className={styles.sidebarLink} href="#">
              <Image
                className={styles.sidebarImg}
                src="/images/playlist02.png"
                alt="day's playlist"
                width={256}
                height={75}
              />
            </a>
          </div>
          <div className={styles.sidebarItem}>
            <a className={styles.sidebarLink} href="#">
              <Image
                className={styles.sidebarImg}
                src="/images/playlist03.png"
                alt="day's playlist"
                width={256}
                height={75}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
