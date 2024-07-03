import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SigninFormType, SignupFormType, StaredUser } from "../../lib/type";
import { fetchUser, refreshTokens, userReg } from "../../Api/user";

export const getUser = createAsyncThunk(
  "user/getUser",
  async ({ email, password }: SigninFormType) => {
    const user = await fetchUser({ email, password });
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }
);
export const getTokens = createAsyncThunk(
  "user/getTokens",
  async ({ email, password }: SigninFormType) => {
    const tokens = await fetchUser({ email, password });
    localStorage.setItem("tokens", JSON.stringify(tokens));
    return tokens;
  }
);

export const refreshToken = createAsyncThunk(
  "user/refreshToken",
  async (refresh: string) => {
    const tokens = await refreshTokens(refresh);
    localStorage.setItem("tokens", JSON.stringify(tokens));
    return tokens;
  }
);

export const postUser = createAsyncThunk(
  "user/userReg",
  async ({ email, password, username }: SignupFormType) => {
    const user = await userReg({ email, password, username });
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }
);

export type AuthStateType = {
  user: null | StaredUser;
  tokens: {
    access: string | null;
    refresh: string | null;
  };
  isAuth: boolean;
};
type TokensType = {
  access: string | null;
  refresh: string | null;
};
const getInitialState = (): AuthStateType => {
  if (typeof window !== "undefined") {
    return {
      user: JSON.parse(localStorage.getItem("user") || "") || null,
      tokens: {
        access: JSON.parse(localStorage.getItem("tokens") || "") || null,
        refresh: JSON.parse(localStorage.getItem("tokens") || "") || null,
      },
      isAuth: localStorage.getItem("tokens") !== null,
    };
  }
  return {
    user: null,
    tokens: {
      access: null,
      refresh: null,
    },
    isAuth: false,
  };
};
const initialState: AuthStateType = getInitialState();
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.tokens.access = null;
      state.tokens.refresh = null;
      localStorage.removeItem("user");
      localStorage.removeItem("tokens");
      state.isAuth = false;
    },
  },
  extraReducers(builder) {
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
        }
      )
      .addCase(
        refreshToken.fulfilled,
        (state, action: PayloadAction<TokensType>) => {
          (state.tokens.access = action.payload.access),
            (state.tokens.refresh = action.payload.refresh);
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

export const { logout, setIsAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
