import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Bar from "@components/Bar/Bar";
import Tracks from "@components/Tracks/Tracks";
import ReduxProvider from "../store/ReduxProvider";

const track1 = {
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
};
const track2 = {
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
};

describe("Bar component", () => {

  const allTracks = [track1, track2];

  test("should play the next track after the current track ends", async () => {
    render(
      <ReduxProvider>
        <Tracks allTracks={allTracks} track={track1} />
        <Bar />
      </ReduxProvider>
    );
    //нажимаем на трек, чтобы вызвать бар и начать проигрывание трека
    const toggleTrack = screen.getByTestId("toggletrack");
    fireEvent.click(toggleTrack);
  
    const toggleNextTrack = screen.getByTestId("nextTrack");
    fireEvent.click(toggleNextTrack);

    await waitFor(() => {
      const tracks = track2;
      expect(tracks).not.toBeNull();
      if (tracks) expect(tracks.id).toBe(9);
      if(tracks) expect(tracks.name).toBe("Open Sea epic")
    });
  });
});
