"use client";
import React from "react";
import { TrackType } from "../lib/type";
import { useAppDispatch, useAppSelector } from "./store";
import { setDislikeTrack, setLikeTrack } from "../store/features/playListSlice";
import {
  deleteFavoriteTracks,
  likesFavoriteTracks,
} from "../Api/favoriteTracks";

export const useLikeTrack = (track: TrackType) => {

  const likedTracks = useAppSelector((state) => state.playlist.likedTracks);

  const dispatch = useAppDispatch();

  const tokens = useAppSelector((state) => state.user.tokens.access);

  const isLiked = likedTracks.some((tracks) => track.id === tracks.id);

  const handleLike = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();

    try {
      if (isLiked) {
        if (tokens) {
          await deleteFavoriteTracks(tokens, track.id);

          dispatch(setDislikeTrack(track.id));
        }
      } else {
        if (tokens) {
          await likesFavoriteTracks(tokens, track.id);
          dispatch(setLikeTrack(track));
        }
        alert("чтобы поставить лайк, авторизуйтесь")
      }
    } catch (error) {
      alert("Ошибка, нет доступа");
    }
  };
  
  return { isLiked, handleLike };
};