// import { refreshToken } from "../store/features/authSlice";
// import { useAppDispatch, useAppSelector } from "./store";

// export async function Token() {
//   const dispatch = useAppDispatch();
//   const refresh = useAppSelector((state) => state.user.tokens?.refresh);

//   try {
//     if (refresh) {
//       await Promise.all([dispatch(refreshToken(refresh)).unwrap()]);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
