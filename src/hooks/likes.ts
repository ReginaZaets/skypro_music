import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { getFavoriteTracks } from "../store/features/playListSlice";

export function useInitializeLikedTracks() {
  const despatch = useAppDispatch();

  const tokens = useAppSelector((state) => state.user.tokens);

  useEffect(() => {
    if (tokens.access) {
      despatch(getFavoriteTracks(tokens.access));
    }
  }, [tokens, despatch]);
}
// лайки: handle luke в треках, проверяет есть ли трокены и пользователя, мы возвращаем алерт, если лайкнут то к апи для постановки, если наоборот то диз. 
// массив лайкнутых треков. содержится ли наш трек лайкнутый в массиве треках
//лайкаем трек на всех страницах
// export const useLikeTrack = (track) => {

//     const likedTracks = useAppSelector((state) => state.playlist.likedTracks);
  
//     const isLiked = // Логика проверки наличия трека в списке лайкнутых
  
//     const handleLike = async (
//       e: React.MouseEvent<HTMLDivElement, MouseEvent>
//     ) => {
//      // Логика работы с лайками треков (ставить и удалять)
//     };
  
//     return { isLiked, handleLike };
//   };

//   const { isLiked, handleLike } = useLikeTrack(track); // получение в компоненте
//  // либо лайк либо нет
//   const action = isLiked ? dislikeTrack : likeTrack;

//     try {
//       await action({
//         trackId,
//         access: tokens.access,
//         refresh: tokens.refresh,
//       });
//       if (isLiked) {
//         dispatch(dislikeTrackAction(trackId));
//       } else {
//         dispatch(likeTrackAction(trackId));
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };