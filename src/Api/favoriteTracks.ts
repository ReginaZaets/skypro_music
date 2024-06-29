import { headers } from "next/headers";

export async function fetchFavoriteTracks(access: string) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access}`
    },}
  );
  if (!response.ok) {
    throw new Error("Ошибка");
  }
  const data = response.json();
  return data;
}
