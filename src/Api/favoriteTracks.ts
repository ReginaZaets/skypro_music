export async function fetchFavoriteTracks(access: string) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access}`,
      },
    }
  );
  if (response.status === 401) {
    throw new Error("Нет авторизации");
  } else if (response.status === 500) {
    throw new Error("Сервер не отвечает");
  }
  const data = response.json();
  return data;
}

export async function likesFavoriteTracks(access: string, id: number) {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Ошибка");
  }
  const data = response.json();
  return data;
}

export async function deleteFavoriteTracks(access: string, id: number) {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${access}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Ошибка");
  }
  const data = response.json();
  return data;
}
