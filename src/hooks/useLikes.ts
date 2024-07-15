"use client";
import React, { useEffect } from "react";
import { TrackType } from "../lib/type";
import { useAppDispatch, useAppSelector } from "./store";
import {
  getFavoriteTracks,
  setDislikeTrack,
  setLikeTrack,
} from "../store/features/playListSlice";
import {
  deleteFavoriteTracks,
  likesFavoriteTracks,
} from "../Api/favoriteTracks";
import { refreshToken } from "../store/features/authSlice";

export const useLikeTrack = (track: TrackType | null) => {
  const likedTracks = useAppSelector((state) => state.playlist.likedTracks);

  const dispatch = useAppDispatch();

  const tokens = useAppSelector((state) => state.user.tokens.access);

  const isLiked = likedTracks.some((tracks) => track?.id === tracks.id);

  const refresh = useAppSelector((state) => state.user.tokens?.refresh);

  const handleLike = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (!tokens) alert("чтобы поставить лайк, авторизуйтесь");
    try {
      if (isLiked) {
        if (tokens && track) {
          await deleteFavoriteTracks(tokens, track.id);

          dispatch(setDislikeTrack(track.id));
        }
      } else {
        if (tokens && track) {
          await likesFavoriteTracks(tokens, track.id);
          dispatch(setLikeTrack(track));
        }
      }
    } catch (error: any) {
      const er = JSON.parse(error.message);
      if (er.status === 401) {
        dispatch(refreshToken(refresh));
      }
      alert("Ошибка, нет доступа");
      console.log(error.message);
    }
  };

  return { isLiked, handleLike };
};
