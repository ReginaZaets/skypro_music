"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { getFavoriteTracks } from "../store/features/playListSlice";


export function useInitializeLikedTracks() {
  const dispatch = useAppDispatch();
  const tokens = useAppSelector((state) => state.user.tokens);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (tokens.access) {
          await dispatch(getFavoriteTracks(tokens.access));
        }
      } catch (error: any) {
        console.log(error)
      }
    };

    fetchData();
  }, [tokens.access, dispatch]);
}
