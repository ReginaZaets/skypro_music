export async function apiTracksId(id:number) {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${id}`
  );
  if (!response.ok) {
    throw new Error("Ошибка");
  }
  const data = response.json();
  return data;
}
