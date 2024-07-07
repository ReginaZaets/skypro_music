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
  console.log(allTracks);
  useEffect(() => {
    if (tokens.access) {
      dispatch(getFavoriteTracks(tokens.access));
    }
  }, [dispatch, tokens.access]);

  return (
    <>
      <h2 className={styles.centerblockH2}>Мои треки</h2>
      <CenterBlock allTracks={allTracks} error={error} isLoading={isLoading} />
    </>
  );
};

export default FavoritePlaylist;
