"use client"
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { getFavoriteTracks } from "../store/features/playListSlice";

export function useInitializeLikedTracks() {
  
  const dispatch = useAppDispatch();

  const tokens = useAppSelector((state) => state.user.tokens);

  useEffect(() => {
    if (tokens.access) {
      dispatch(getFavoriteTracks(tokens.access));
    }
  }, [tokens, dispatch]);
}