"use client";
import { useAppDispatch, useAppSelector } from "./store";
import { getDataFromLS, refreshToken } from "../store/features/authSlice";

export const useRefreshToken = (refresh: string) => {
  const dispatch = useAppDispatch();
  //   const refresh = useAppSelector((state) => state.user.tokens.refresh);
 
  console.log("токены из локал:", getDataFromLS("tokens"));

  console.log("токены из редакс:", refresh);

  console.log(
    "рефреш из локал:",
    getDataFromLS("tokens")?.refresh
  );

  const token = async () => {
    try {
      if (refresh) {
        await dispatch(refreshToken(refresh)).unwrap();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateTokenInterval = setInterval(token, 2 * 60 * 1000);
  return () => {
    if (updateTokenInterval) clearInterval(updateTokenInterval);
  };
};
