import Header from "@components/Header/Header";
import styles from "./page.module.css";
import Sidebar from "@components/Sidebar/Sidebar";
import Main from "@components/Main/Main";
import Bar from "@components/Bar/Bar";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          <Main />
          <Sidebar />
        </main>
        <Bar />
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
}
