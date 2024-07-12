"use client";
import CenterBlock from "@components/CenterBlock/CenterBlock";
import styles from "./layout.module.css";
import Sorting from "@components/Sorting/Sorting";
import { useEffect} from "react";
import { tracksApi } from "../../Api/tracksApi";
import { TrackType } from "../../lib/type";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import {
  setError,
  setInitialPlaylist,
  setIsLoading,
} from "../../store/features/playListSlice";

const MainTracksPage = () => {
  const dispatch = useAppDispatch();
  const allTracks = useAppSelector((state) => state.playlist.filteredPlaylist);
  useEffect(() => {
    tracksApi()
      .then((response: TrackType[]) => {
        dispatch(setInitialPlaylist(response));
        dispatch(setIsLoading(true));
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(setError("ошибка загрузки треков"));
      });
  }, [dispatch]);

  return (
    <>
      <div>
        <h2 className={styles.centerblockH2}>Треки</h2>
        <Sorting allTracks={allTracks} />
        <CenterBlock allTracks={allTracks} />
      </div>
    </>
  );
};
export default MainTracksPage;
