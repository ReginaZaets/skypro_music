// import "@testing-library/jest-dom";
// import { fireEvent, render, screen } from "@testing-library/react";
// import ReduxProvider from "../store/ReduxProvider";
// import Bar from "@components/Bar/Bar";
// import Tracks from "@components/Tracks/Tracks";
// import { configureStore } from "@reduxjs/toolkit";
// import {
//   PlayListStateType,
//   playlistReducer,
//   setCurrentTrack,
// } from "../store/features/playListSlice";
// import { AuthStateType, authReducer } from "../store/features/authSlice";

// interface RootState {
//   playlist: PlayListStateType;
//   user: AuthStateType;
// }
// const initialState: RootState = {
//   playlist: {
//     currentPlaylist: [
//       {
//         id: 1,
//         name: "Track 1",
//         author: "Author 1",
//         track_file: "track1.mp3",
//         release_date: "2023-01-01",
//         album: "Album 1",
//         genre: "Genre 1",
//         duration_in_seconds: 180,
//         logo: "logo1.png",
//         stared_user: [
//           {
//             id: 14,
//             username: "user",
//             first_name: "",
//             last_name: "",
//             email: "user@mail.ru",
//           },
//         ],
//       },
//       {
//         id: 2,
//         name: "Track 2",
//         author: "Author 2",
//         track_file: "track2.mp3",
//         release_date: "2023-02-01",
//         album: "Album 2",
//         genre: "Genre 2",
//         duration_in_seconds: 200,
//         logo: "logo2.png",
//         stared_user: [
//           {
//             id: 14,
//             username: "user",
//             first_name: "",
//             last_name: "",
//             email: "user@mail.ru",
//           },
//         ],
//       },
//     ],
//     currentTrack: {
//       id: 1,
//       name: "Track 1",
//       author: "Author 1",
//       track_file: "track1.mp3",
//       release_date: "2023-01-01",
//       album: "Album 1",
//       genre: "Genre 1",
//       duration_in_seconds: 180,
//       logo: "logo1.png",
//       stared_user: [
//         {
//           id: 14,
//           username: "user",
//           first_name: "",
//           last_name: "",
//           email: "user@mail.ru",
//         },
//       ],
//     },
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
// const Mockstore = configureStore({
//   reducer: {
//     playlist: playlistReducer,
//     user: authReducer,
//   },
//   preloadedState: initialState,
// });

// describe("bar", () => {
//   test("tracks", () => {
//     render(
//       <ReduxProvider>
//         <Bar />
//       </ReduxProvider>
//     );
//     expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
//   });
//   const tracks = {
//     id: 8,
//     name: "Chase",
//     author: "Alexander Nakarada",
//     release_date: "2005-06-11",
//     genre: "Классическая музыка",
//     duration_in_seconds: 205,
//     album: "Chase",
//     logo: null,
//     track_file: "track1.mp3",
//     stared_user: [
//       {
//         id: 14,
//         username: "user",
//         first_name: "",
//         last_name: "",
//         email: "user@mail.ru",
//       },
//     ],
//   };
//   const tracks2 = {
//     id: 9,
//     name: "Chases",
//     author: "Alexander Nakarada",
//     release_date: "2005-06-11",
//     genre: "Классическая музыка",
//     duration_in_seconds: 205,
//     album: "Chase",
//     logo: null,
//     track_file:
//       "https://skypro-music-api.skyeng.tech/media/music_files/Alexander_Nakarada_-_Chase.mp3",
//     stared_user: [
//       {
//         id: 14,
//         username: "user",
//         first_name: "",
//         last_name: "",
//         email: "user@mail.ru",
//       },
//     ],
//   };
//   const allTracks = [tracks, tracks2];
  
//   const store = Mockstore;
//   test("bar", () => {
//     //проверка переключение следующего трека, после окончания текущего
//     render(
//       <ReduxProvider>
//         <Tracks allTracks={allTracks} track={tracks} />
//         <Bar />
//       </ReduxProvider>
//     );
//     //из за useCallbaсk?
//     const toggleTrack = screen.getByTestId("toggletrack");
//     fireEvent.click(toggleTrack);
//   });

//   test("should add event listener on mount and remove on unmount", () => {
//     const addEventListenerSpy = jest.spyOn(
//       window.HTMLMediaElement.prototype,
//       "addEventListener"
//     );
//     const removeEventListenerSpy = jest.spyOn(
//       window.HTMLMediaElement.prototype,
//       "removeEventListener"
//     );

//     render(
//       <ReduxProvider>
//         <Tracks allTracks={allTracks} track={tracks} />
//         <Bar />
//       </ReduxProvider>
//     );
//     const toggleTrack = screen.getByTestId("toggletrack");

//     fireEvent.click(toggleTrack);

//     // Эмулируем событие окончания текущего трека
//     const audioElement = screen.getByTestId("audio-element");
//     audioElement.dispatchEvent(new Event("ended"));

//   });
// });
