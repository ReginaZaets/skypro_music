import React from "react";
import { render, screen } from "@testing-library/react";
import { TrackType } from "../lib/type";
import { Provider } from "react-redux";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import CenterBlock from "@components/CenterBlock/CenterBlock";

describe("CenterBlock", () => {
  let store: EnhancedStore<RootState>;

  beforeEach(() => {
    const initialState: RootState = {
      playlist: {
        currentPlaylist: [],
        currentTrack: null,
        isPlaying: false,
        isShaffled: false,
        shaffledPlaylist: [],
        loop: false,
        filterOptions: {
          author: [],
          genre: [],
          order: "По умолчанию",
          searchString: "",
        },
        filteredPlaylist: [
          {
            id: 8,
            name: "Chase",
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
          },
          {
            id: 9,
            name: "Open Sea epic",
            author: "Frank Schroter",
            release_date: "2019-06-12",
            genre: "Классическая музыка",
            duration_in_seconds: 165,
            album: "Open Sea epic",
            logo: null,
            track_file:
              "https://skypro-music-api.skyeng.tech/media/music_files/Frank_Schroter_-_Open_Sea_epic.mp3",
            stared_user: [
              {
                id: 14,
                username: "user",
                first_name: "",
                last_name: "",
                email: "user@mail.ru",
              },
            ],
          },
        ],
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

    store = configureStore({
      reducer: {
        playlist: jest.fn(() => initialState.playlist),
        user: jest.fn(() => initialState.user),
      },
    });
  });

  test("renders tracks", () => {
    const allTracks: TrackType[] = [
      {
        id: 8,
        name: "Chase",
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
      },
      {
        id: 9,
        name: "Open Sea epic",
        author: "Frank Schroter",
        release_date: "2019-06-12",
        genre: "Классическая музыка",
        duration_in_seconds: 165,
        album: "Open Sea epic",
        logo: null,
        track_file:
          "https://skypro-music-api.skyeng.tech/media/music_files/Frank_Schroter_-_Open_Sea_epic.mp3",
        stared_user: [
          {
            id: 14,
            username: "user",
            first_name: "",
            last_name: "",
            email: "user@mail.ru",
          },
        ],
      },
    ];

    render(
      <Provider store={store}>
        <CenterBlock allTracks={allTracks} error={null} isLoading={true} />
      </Provider>
    );

    expect(screen.getAllByText("Chase")).not.toHaveLength(0);
    expect(screen.getAllByText("Open Sea epic")).not.toHaveLength(0);
  });
});
