import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TrackType } from "../../lib/type";
import { RootState } from "../store";

type PlayListStateType = {
  currentPlaylist: TrackType[];
  currentTrack: TrackType | null;
  isPlaying: boolean;
  isShaffled: boolean;
  shaffledPlaylist: TrackType[];
  loop: boolean;
};
const initialState: PlayListStateType = {
  currentPlaylist: [],
  currentTrack: null,
  isPlaying: false,
  isShaffled: false,
  shaffledPlaylist: [],
  loop: false,
};

const playListSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    // setTrack: (state, action: PayloadAction<TrackType[]>) => {
    //   state.currentPlaylist = action.payload;
    // },
    setCurrentTrack: (
      state,
      action: PayloadAction<{
        currentTrack: TrackType;
        currentPlaylist: TrackType[];
      }>
    ) => {
      state.currentTrack = action.payload.currentTrack;
      state.currentPlaylist = action.payload.currentPlaylist;
      state.shaffledPlaylist = [...action.payload.currentPlaylist].sort(
        () => 0.5 - Math.random()
      );
    },
    nextTrack: (state) => {
      const playlist = state.isShaffled
        ? state.shaffledPlaylist
        : state.currentPlaylist;
      const currentIndex = playlist.findIndex(
        (track) => track.id === state.currentTrack?.id
      );
      
      const nextIndex = playlist[currentIndex + 1];
      if (nextIndex) {
        state.currentTrack = nextIndex;
      }
    },
    prevTrack: (state) => {
      //опеределяем какой плейлист будет отображаться, первоначальный или перемещанный
      const playlist = state.isShaffled
        ? state.shaffledPlaylist
        : state.currentPlaylist;
      // находим текущий трек в плейлисте
      const currentIndex = playlist.findIndex(
        (track) => track.id === state.currentTrack?.id
      );
      // не исчезает бар, если трек последний, ничего не происходит
      const prevIndex = playlist[currentIndex - 1];
      if (prevIndex) {
        state.currentTrack = prevIndex;
      }
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setIsShuffled: (state, action: PayloadAction<boolean>) => {
      state.isShaffled = action.payload;
    },
    setLoop: (state, action: PayloadAction<boolean>) => {
      state.loop = action.payload;
    },
  },
});
export const {
  setCurrentTrack,
  nextTrack,
  setIsPlaying,
  prevTrack,
  setIsShuffled,
  setLoop,
} = playListSlice.actions;
// export const selectTrack = (state: RootState) => state.playlist.currentPlaylist;
// export const selectAllTracks = (state: RootState) =>
//   state.playlist.currentTrack;
// export const selectIsPlaying = (state: RootState) => state.playlist.isPlaying;
export const playlistReducer = playListSlice.reducer;
