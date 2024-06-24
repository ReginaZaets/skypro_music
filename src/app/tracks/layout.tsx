import Header from "@components/Header/Header";
import styles from "./layout.module.css";
import Bar from "@components/Bar/Bar";
import Sidebar from "@components/Sidebar/Sidebar";
import Search from "../../components/Search/Search";

export default function TracksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />

          <div className={styles.mainNav}>
            <Search />
            {children}
          </div>
          <Sidebar />
        </main>
        <Bar />
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
}
