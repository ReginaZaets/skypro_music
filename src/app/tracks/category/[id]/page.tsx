"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/store";
import {
  setError,
  setInitialPlaylist,
  setIsLoading,
} from "../../../../store/features/playListSlice";
import { playlistCategory } from "../../../../Api/playlistCategory";
import CenterBlock from "@components/CenterBlock/CenterBlock";
import styles from "../../layout.module.css";

type CategoryProps = {
  params: {
    id: string;
  };
};
const Category = ({ params }: CategoryProps) => {
  const allTracks = useAppSelector((state) => state.playlist.filteredPlaylist);
  const dispatch = useAppDispatch();
  let namePlaylist = "";
  switch (params.id) {
    case "1":
      namePlaylist = "Плейлист дня";
      break;
    case "2":
      namePlaylist = "100 танцевальных хитов";
      break;
    case "3":
      namePlaylist = "Инди-заряд";
      break;
    default:
      break;
  }
  useEffect(() => {
    playlistCategory(params.id)
      .then((response) => {
        dispatch(setInitialPlaylist(response.items));
        dispatch(setIsLoading(true));
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(setError("ошибка загрузки треков"));
      });
  }, [params.id, dispatch]);
  return (
    <>
      <h2 className={styles.centerblockH2}>{namePlaylist}</h2>
      <CenterBlock allTracks={allTracks} />
    </>
  );
};
export default Category;
