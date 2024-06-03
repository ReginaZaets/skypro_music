"use client";

import Header from "@components/Header/Header";
import styles from "./page.module.css";
import Sidebar from "@components/Sidebar/Sidebar";
import Main from "@components/Main/Main";
import Bar from "@components/Bar/Bar";
import { useState } from "react";
import { TrackType } from "../lib/type";

const Home = () => {
  const [track, setTrack] = useState<TrackType | null>(null);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          <Main setTrack={setTrack} />
          <Sidebar />
        </main>
        {track && <Bar track={track} />}
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
};
export default Home;
