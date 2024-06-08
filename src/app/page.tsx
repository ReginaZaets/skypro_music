import { tracksApi } from "../Api/tracksApi";
import { TrackType } from "../lib/type";

import MainBlock from "@components/MainBlock/MainBlock";

export default async function Home() {
  let tracks: TrackType[] = [];
  let error: string | null = null;
  try {
    tracks = await tracksApi();
  } catch (err: unknown) {
    error =
      err instanceof Error
        ? "ошибка при загрузке трека. " + err.message
        : "неизвестная ошибка";
  }
  return <MainBlock tracks={tracks} />;
}
