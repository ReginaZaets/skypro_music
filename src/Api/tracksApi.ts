
export async function tracksApi() {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/"
  );
  if (!response.ok) {
    throw new Error("Ошибка");
  }
  const data = response.json();
  return data;
}
