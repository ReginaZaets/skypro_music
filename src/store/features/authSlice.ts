import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AuthStateType,
  SigninFormType,
  SignupFormType,
  StaredUser,
} from "../../lib/type";
import { fetchTokens, fetchUser, refreshTokens, userReg } from "../../Api/user";

export function getDataFromLS(key: string) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("ошибка", error);
  }
}

export function setDataToLS(key: string, data: any) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("ошибка", error);
  }
}

export const getUser = createAsyncThunk(
  "user/getUser",
  async ({ email, password }: SigninFormType) => {
    const user = await fetchUser({ email, password });
    setDataToLS("user", user);
    return user;
  }
);
export const getTokens = createAsyncThunk(
  "user/getTokens",
  async ({ email, password }: SigninFormType) => {
    const tokens = await fetchTokens({ email, password });
    setDataToLS("tokens", tokens);
    return tokens;
  }
);

export const refreshToken = createAsyncThunk(
  "user/refreshToken",
  async (refresh: string) => {
    const tokens = await refreshTokens(refresh);
    setDataToLS("tokens", tokens);
    return tokens;
  }
);
export const postUser = createAsyncThunk(
  "user/userReg",
  async ({ email, password, username }: SignupFormType) => {
    const user = await userReg({ email, password, username });
    setDataToLS("user", user);
    return user;
  }
);

type TokensType = {
  access: string | null;
  refresh: string | null;
};
const initialState = {
  user: getDataFromLS("user"),
  tokens: {
    access: getDataFromLS("tokens")?.access,
    refresh: getDataFromLS("tokens")?.refresh,
  },
};

console.log("initialState в редакс:", initialState);


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.tokens.access = null;
      state.tokens.refresh = null;
      localStorage.removeItem("user");
      localStorage.removeItem("tokens");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getUser.fulfilled,
        (state, action: PayloadAction<StaredUser>) => {
          state.user = action.payload;
        }
      )
      .addCase(
        getTokens.fulfilled,
        (state, action: PayloadAction<TokensType>) => {
          (state.tokens.access = action.payload.access),
            (state.tokens.refresh = action.payload.refresh);
          setDataToLS("tokens", action.payload);
        }
      )
      .addCase(
        refreshToken.fulfilled,
        (state, action: PayloadAction<TokensType>) => {
          (state.tokens.access = action.payload.access),
            (state.tokens.refresh = action.payload.refresh);
          setDataToLS("tokens", action.payload);
        }
      )
      .addCase(
        postUser.fulfilled,
        (state, action: PayloadAction<StaredUser>) => {
          state.user = action.payload;
        }
      );
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
