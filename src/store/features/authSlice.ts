import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SigninFormType, StaredUser } from "../../lib/type";
import { fetchUser } from "../../Api/user";

export const getUser = createAsyncThunk(
  "user/getUser",
  async ({ email, password }: SigninFormType) => {
    const user = await fetchUser({ email, password });
    return user;
  }
);
export const getTokens = createAsyncThunk(
  "user/getTokens",
  async ({ email, password }: SigninFormType) => {
    const tokens = await fetchUser({ email, password });
    return tokens;
  }
);
export type AuthStateType = {
  user: null | StaredUser;
  tokens: {
    access: string | null;
    refresh: string | null;
  };
};
type TokensType = {
  access: string | null;
  refresh: string | null;
};
const initialState: AuthStateType = {
  user: null,
  tokens: {
    access: null,
    refresh: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setAuthState: (state, action: PayloadAction<boolean>) => {
    //   state.authState = action.payload;
    // },
    logout: (state) => {
      state.user = null;
      state.tokens.access = null;
      state.tokens.refresh = null;
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
      );
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
