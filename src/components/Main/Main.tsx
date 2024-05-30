import styles from "./Main.module.css";
import classNames from "classnames";
import Tracks from "@components/Tracks/Tracks";
import { tracksApi } from "../../Api/tracksApi";
import { TrackType } from "../../lib/type";
import Sorting from "@components/Sorting/Sorting";
import { FilterData } from "@components/Filter/FilterData";
import { useEffect, useState } from "react";

type PlayTrack = {
  setTrack: (param: TrackType) => void;
};

const Main = ({ setTrack }: PlayTrack) => {
  const [allTracks, setAllTracks] = useState<TrackType[]>([]);
  // const tracks: TrackType[] = await tracksApi();
  // console.log(tracks);
  useEffect(() => {
    tracksApi()
      .then((response) => setAllTracks(response))
      .catch((err) => console.log(err.message));
  }, []);
  //получаем уникальных авторов без повторений
  const uniqueAuthors = Array.from(
    new Set(allTracks.map((track) => track.author))
  );
  FilterData[0].list = uniqueAuthors;
  //получаем уникальные жанры без повторений
  const uniqueGenre = Array.from(
    new Set(allTracks.map((track) => track.genre))
  );
  FilterData[2].list = uniqueGenre;

  return (
    <div className={styles.mainCenterblock}>
      <div className={styles.centerblockSearch}>
        <svg className={styles.searchSvg}>
          <use xlinkHref="icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className={styles.searchText}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <Sorting FilterData={FilterData} />
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
              <use xlinkHref="icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        {allTracks.map((tracks: TrackType) => (
          <Tracks
            key={tracks.id}
            tracks={tracks}
            onClick={() => setTrack(tracks)}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
