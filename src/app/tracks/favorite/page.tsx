"use client";

import CenterBlock from "@components/CenterBlock/CenterBlock";
import React, { useEffect, useState } from "react";
import styles from "../layout.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/store";
import { getFavoriteTracks } from "../../../store/features/playListSlice";

const FavoritePlaylist = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const allTracks = useAppSelector((state) => state.playlist.likedTracks);
  const tokens = useAppSelector((state) => state.user.tokens);
  useEffect(() => {
    const fetchTracks = async () => {
      if (tokens.access) {
        setIsLoading(true);
        try {
          await dispatch(getFavoriteTracks(tokens.access)).unwrap();
        } catch (err) {
          setError("Не удалось загрузить треки");
          console.error("Ошибка при загрузке треков:", err);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchTracks();
  }, [dispatch, tokens.access]);
  return (
    <>
      <h2 className={styles.centerblockH2}>Мои треки</h2>
      <CenterBlock allTracks={allTracks} error={error} isLoading={isLoading} />
    </>
  );
};

export default FavoritePlaylist;
