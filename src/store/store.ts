import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { playlistReducer } from "./features/playListSlice";
import { authReducer } from "./features/authSlice";

export const rootReducer = combineReducers({
  playlist: playlistReducer,
  user: authReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<AppStore["getState"]>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];


