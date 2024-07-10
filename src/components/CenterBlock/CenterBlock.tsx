"use client";

import styles from "./CenterBlock.module.css";
import classNames from "classnames";
import Tracks from "@components/Tracks/Tracks";
import { TrackType } from "../../lib/type";

type CenterBlockProps = {
  allTracks: TrackType[];
  error: string | null;
  isLoading: boolean;
};
const CenterBlock = ({ allTracks, error, isLoading }: CenterBlockProps) => {

  return (
    <div className={styles.mainCenterblock}>
      <div className={styles.centerblockContent}>
        <div className={styles.contentTitle}>
          <div className={classNames(styles.playlistTitleCol, styles.col01)}>
            Трек
          </div>
          <div className={classNames(styles.playlistTitleCol, styles.col02)}>
            Исполнитель
          </div>
          <div className={classNames(styles.playlistTitleCol, styles.col03)}>
            Альбом
          </div>
          <div className={classNames(styles.playlistTitleCol, styles.col04)}>
            <svg className={styles.playlistTitleSvg}>
              <use xlinkHref="/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {/* {isLoading && "Ничего не найдено"} */}
        {/* {isLoading && ( */}
        <div className={styles.playList}>
          {allTracks.map((value) => (
            <Tracks key={value.id} track={value} />
          ))}
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default CenterBlock;
