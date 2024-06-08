import Header from "@components/Header/Header";
import styles from "./MainBlock.module.css";
import Sidebar from "@components/Sidebar/Sidebar";
import Main from "@components/CenterBlock/CenterBlock";
import Bar from "@components/Bar/Bar";
import { TrackType } from "../../lib/type";
type Props = {
  tracks: TrackType[];
};
const MainBlock = ({ tracks }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          <Main tracks={tracks} />
          <Sidebar />
        </main>
        <Bar />
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
};

export default MainBlock;
