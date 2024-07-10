import { SigninFormType, SignupFormType } from "../lib/type";

export async function fetchUser({ email, password }: SigninFormType) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/login/",
    {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.status === 400) {
    throw new Error("Введите значение в поле");
  } else if (response.status === 401) {
    throw new Error("Пользователь с таким email или паролем не найден");
  } else if (response.status === 500) {
    throw new Error("Сервер не отвечает");
  }
  const data = await response.json();
  return data;
}

export async function userReg({ email, password, username }: SignupFormType) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/signup/",
    {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        username,
      }),
      headers: {
        "content-type": "application/json",
      },
    }
  );
  if (response.status === 400) {
    const errorData = await response.json();
    throw {
      status: 400,
      data: errorData,
    };
  } else if (response.status === 500) {
    throw new Error("Сервер не отвечает");
  }
  const data = await response.json();
  return data;
}

export async function fetchTokens({ email, password }: SigninFormType) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/token/",
    {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.status === 400) {
    throw new Error("Введите значение в поле");
  } else if (response.status === 401) {
    throw new Error("Пользователь с таким email или паролем не найден");
  } else if (response.status === 500) {
    throw new Error("Сервер не отвечает");
  }
  const data = await response.json();
  return data;
}

export async function refreshTokens(refresh: string) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/token/refresh/",
    {
      method: "POST",
      body: JSON.stringify({
        refresh,
      }),
      headers: {
        "content-type": "application/json",
      },
    }
  );
  if (response.status === 400) {
    throw new Error("В теле запроса не передан refresh токен");
  } else if (response.status === 401) {
    throw new Error("Refresh токен невалидный");
  } else if (response.status === 500) {
    throw new Error("Сервер не отвечает");
  }
  const data = await response.json();
  return data;
}
