"use client";

import styles from "./CenterBlock.module.css";
import classNames from "classnames";
import Tracks from "@components/Tracks/Tracks";
import { tracksApi } from "../../Api/tracksApi";
import { TrackType } from "../../lib/type";
import Sorting from "@components/Sorting/Sorting";
import { FilterData } from "@components/Filter/FilterData";
import { useEffect, useState } from "react";
import Search from "../../Search/Search";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { setInitialPlaylist } from "../../store/features/playListSlice";

const CenterBlock = () => {
  const [allTracks, setAllTracks] = useState<TrackType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const filterTracks = useAppSelector(
    (state) => state.playlist.filteredPlaylist
  );
  useEffect(() => {
    tracksApi()
      .then((response: TrackType[]) => {
        setAllTracks(response);
        dispatch(setInitialPlaylist(response));
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err.message);
        setError("ошибка загрузки треков");
      });
  }, [dispatch]);

  return (
    <div className={styles.mainCenterblock}>
      <Search />
      <Sorting allTracks={allTracks} />
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
        {error && <p style={{ color: "red" }}>{error}</p>}
        {filterTracks.length === 0 && isLoading && "Ничего не найдено"}
        {isLoading && (
          <div className={styles.playList}>
            {filterTracks.map((value) => (
              <Tracks key={value.id} track={value} allTracks={allTracks} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CenterBlock;
