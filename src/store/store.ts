import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { playlistReducer } from "./features/playListSlice";

const rootReducer = combineReducers({
  playlist: playlistReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<AppStore["getState"]>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];


