// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { TrackType } from "../lib/type";
// import Tracks from "@components/Tracks/Tracks";
// import {
//     PlayListStateType,
//   playlistReducer,
//   setCurrentTrack,
// } from "../store/features/playListSlice";
// import { AuthStateType, authReducer } from "../store/features/authSlice";

// interface RootState {
//   playlist: PlayListStateType;
//   user: AuthStateType;
// }
// const tracks = {
//   id: 8,
//   name: "Chase",
//   author: "Alexander Nakarada",
//   release_date: "2005-06-11",
//   genre: "Классическая музыка",
//   duration_in_seconds: 205,
//   album: "Chase",
//   logo: null,
//   track_file: "track1.mp3",
//   stared_user: [
//     {
//       id: 14,
//       username: "user",
//       first_name: "",
//       last_name: "",
//       email: "user@mail.ru",
//     },
//   ],
// };
// const tracks2 = {
//   id: 9,
//   name: "Chases",
//   author: "Alexander Nakarada",
//   release_date: "2005-06-11",
//   genre: "Классическая музыка",
//   duration_in_seconds: 205,
//   album: "Chase",
//   logo: null,
//   track_file:
//     "https://skypro-music-api.skyeng.tech/media/music_files/Alexander_Nakarada_-_Chase.mp3",
//   stared_user: [
//     {
//       id: 14,
//       username: "user",
//       first_name: "",
//       last_name: "",
//       email: "user@mail.ru",
//     },
//   ],
// };
// const initialState: RootState = {
//   playlist: {
//     currentPlaylist: [tracks, tracks2],
//     currentTrack: tracks,
//     isPlaying: true,
//     isShaffled: false,
//     shaffledPlaylist: [],
//     loop: false,
//     filterOptions: {
//       author: [],
//       genre: [],
//       order: "По умолчанию",
//       searchString: "",
//     },
//     filteredPlaylist: [],
//     initialPlaylist: [],
//     likedTracks: [],
//   },
//   user: {
//     user: null,
//     tokens: {
//       access: null,
//       refresh: null,
//     },
//   },
// };

// const mokstore = configureStore({
//   reducer: {
//     playlist: playlistReducer,
//     user: authReducer,
//   },
//   preloadedState: initialState,
// });

// const mockTrack: TrackType = {
//   id: 1,
//   name: "Track 1",
//   author: "Author 1",
//   track_file: "track1.mp3",
//   release_date: "2023-01-01",
//   album: "Album 1",
//   genre: "Genre 1",
//   duration_in_seconds: 180,
//   logo: "logo1.png",
//   stared_user: [
//     {
//       id: 14,
//       username: "user",
//       first_name: "",
//       last_name: "",
//       email: "user@mail.ru",
//     },
//   ],
// };

// const mockAllTracks: TrackType[] = [mockTrack];
// // Mock the useDispatch hook to return a jest.fn()
// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useDispatch: jest.fn(),
// }));

// describe("Tracks Component", () => {
//   test("changes state to isPlaying when track is clicked", () => {
//     const store = mokstore;
//     render(
//       <Provider store={store}>
//         <Tracks allTracks={mockAllTracks} track={mockTrack} />
//       </Provider>
//     );

//     const trackElement = screen.getByTestId("toggletrack");
//     fireEvent.click(trackElement);

//     expect(store.dispatch).toHaveBeenCalledWith(
//       setCurrentTrack({
//         currentTrack: mockTrack,
//         currentPlaylist: mockAllTracks,
//       })
//     );

//     const currentTrackElement = screen.getByTestId("currentTrack");
//     expect(currentTrackElement.classList.contains("isPlaying")).toBe(true);
//   });
// });
