import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import {
  configureStore,
} from "@reduxjs/toolkit";
import Bar from "@components/Bar/Bar";
import {
  PlayListStateType,
  nextTrack,
  playlistReducer,
} from "../store/features/playListSlice";
import { AuthStateType, authReducer } from "../store/features/authSlice"; 
import Tracks from "@components/Tracks/Tracks";


interface RootState {
  playlist: PlayListStateType;
  user: AuthStateType;
}
const tracks = {
  id: 8,
  name: "Chase",
  author: "Alexander Nakarada",
  release_date: "2005-06-11",
  genre: "Классическая музыка",
  duration_in_seconds: 205,
  album: "Chase",
  logo: null,
  track_file: "track1.mp3",
  stared_user: [
    {
      id: 14,
      username: "user",
      first_name: "",
      last_name: "",
      email: "user@mail.ru",
    },
  ],
};
const tracks2 = {
  id: 9,
  name: "Chases",
  author: "Alexander Nakarada",
  release_date: "2005-06-11",
  genre: "Классическая музыка",
  duration_in_seconds: 205,
  album: "Chase",
  logo: null,
  track_file:
    "https://skypro-music-api.skyeng.tech/media/music_files/Alexander_Nakarada_-_Chase.mp3",
  stared_user: [
    {
      id: 14,
      username: "user",
      first_name: "",
      last_name: "",
      email: "user@mail.ru",
    },
  ],
};
const initialState: RootState = {
  playlist: {
    currentPlaylist: [tracks, tracks2],
    currentTrack: tracks,
    isPlaying: true,
    isShaffled: false,
    shaffledPlaylist: [],
    loop: false,
    filterOptions: {
      author: [],
      genre: [],
      order: "По умолчанию",
      searchString: "",
    },
    filteredPlaylist: [],
    initialPlaylist: [],
    likedTracks: [],
  },
  user: {
    user: null,
    tokens: {
      access: null,
      refresh: null,
    },
  },
};

const mokstore = configureStore({
  reducer: {
    playlist: playlistReducer,
    user: authReducer,
  },
  preloadedState: initialState,
});

describe("Bar component", () => {
  // Создаем моковый стор с начальным состоянием и корневым редуктором
  const store = mokstore;

  const allTracks = [tracks, tracks2];

  test("should play the next track after the current track ends", async () => {
    render(
      <Provider store={store}>
        <Tracks allTracks={allTracks} track={tracks} />
        <Bar />
      </Provider>
    );
    //нажимаем на трек, чтобы вызвать бар и начать проигрывание трека
    const toggleTrack = screen.getByTestId("toggletrack");
    fireEvent.click(toggleTrack);

    // Проверяем, что action nextTrack был вызван
    await waitFor(() => {
      const actions = (store as any).actions;
      expect(actions).toContainEqual(nextTrack());
    });

    // Проверяем, что новый трек установлен как текущий
    await waitFor(() => {
      const currentTrack = store.getState().playlist.currentTrack;
      expect(currentTrack).not.toBeNull(); // Проверяем, что currentTrack не null
      if (currentTrack) expect(currentTrack.id).toBe(2); // ожидаем, что текущий трек обновится до Track 2
    });
  });
});
