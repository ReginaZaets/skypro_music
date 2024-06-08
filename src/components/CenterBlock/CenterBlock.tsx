"use client";

import styles from "./CenterBlock.module.css";
import classNames from "classnames";
import Tracks from "@components/Tracks/Tracks";
import { tracksApi } from "../../Api/tracksApi";
import { TrackType } from "../../lib/type";
import Sorting from "@components/Sorting/Sorting";
import { FilterData } from "@components/Filter/FilterData";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/store";

type PlayTrack = {
  tracks: TrackType[];
};

type Track = {
  author: string;
  genre: string;
};

const Main = ({ tracks }: PlayTrack) => {
  const [allTracks, setAllTracks] = useState<TrackType[]>([]);

  useEffect(() => {
    tracksApi()
      .then((response) => setAllTracks(response))
      .catch((err) => console.log(err.message));
  }, []);
  // получаем уникальных авторов без повторений
  const uniqueAuthors = Array.from(
    new Set(allTracks.map((track) => track.author))
  );
  FilterData[0].list = uniqueAuthors;
  //получаем уникальные жанры без повторений
  const uniqueGenre = Array.from(new Set(allTracks.map((track) => track.genre)));
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
        <div className={styles.playList}>
          {allTracks.map((value) => (
            <Tracks
              key={value.id}
              track={value}
              tracks={tracks}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
