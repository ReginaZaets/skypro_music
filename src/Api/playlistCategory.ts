const urlPlaylist = "https://skypro-music-api.skyeng.tech/catalog/selection/";
export async function playlistCategory(id: string) {
  const response = await fetch(urlPlaylist + id);
  if (!response.ok) {
    throw new Error("Ошибка");
  }
  const data = response.json();
  return data;
}
