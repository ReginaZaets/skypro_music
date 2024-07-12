"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { getFavoriteTracks } from "../store/features/playListSlice";
import { Token } from "./refresh";
import { getTokens } from "../store/features/authSlice";

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
        if (error.message === "Unauthorized") {
          // Обработка ошибки 401
          console.error("Ошибка авторизации: требуется повторная авторизация");
          // Вызываем хук для обновления токена
          Token();
          dispatch(getTokens(tokens.access));
        } else {
          console.error(
            "Ошибка при получении избранных треков:",
            error.message
          );
          // Дополнительная логика для обработки других ошибок
        }
      }
    };

    fetchData();
  }, [tokens.access, dispatch]); // Уточняем зависимости
}
