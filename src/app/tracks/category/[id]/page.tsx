"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/store";
import { setInitialPlaylist } from "../../../../store/features/playListSlice";
import { playlistCategory } from "../../../../Api/playlistCategory";
import CenterBlock from "@components/CenterBlock/CenterBlock";
import styles from "../../layout.module.css";

type CategoryProps = {
  params: {
    id: string;
  };
};
const Category = ({ params }: CategoryProps) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const allTracks = useAppSelector((state) => state.playlist.filteredPlaylist);
  const dispatch = useAppDispatch();

  useEffect(() => {
    playlistCategory(params.id)
      .then((response) => {
        console.log(response.items);
        dispatch(setInitialPlaylist(response.items));
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err.message);
        setError("ошибка загрузки треков");
      });
  }, [params.id, dispatch]);

  return (
    <>
      <h2 className={styles.centerblockH2}>Треки</h2>
      <CenterBlock allTracks={allTracks} error={error} isLoading={isLoading} />
    </>
  );
};
export default Category;
