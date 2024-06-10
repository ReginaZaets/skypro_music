import Header from "@components/Header/Header";
import styles from "./MainBlock.module.css";
import Sidebar from "@components/Sidebar/Sidebar";
import Bar from "@components/Bar/Bar";
import { TrackType } from "../../lib/type";
import { tracksApi } from "../../Api/tracksApi";
import CenterBlock from "@components/CenterBlock/CenterBlock";

const MainBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          <CenterBlock />
          <Sidebar />
        </main>
        <Bar />
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
};

export default MainBlock;
