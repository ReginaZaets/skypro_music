import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TrackType } from "../../lib/type";
import { fetchFavoriteTracks } from "../../Api/favoriteTracks";

export const getFavoriteTracks = createAsyncThunk(
  "playlistFavoriteTracks",
  async (access: string) => {
    const favoriteTracks = await fetchFavoriteTracks(access);
    return favoriteTracks;
  }
);

export type PlayListStateType = {
  currentPlaylist: TrackType[];
  currentTrack: TrackType | null;
  isPlaying: boolean;
  isShaffled: boolean;
  shaffledPlaylist: TrackType[];
  loop: boolean;
  filterOptions: {
    author: string[];
    genre: string[];
    order: string;
    searchString: string;
  };
  filteredPlaylist: TrackType[]; //Массив отфильтрованных треков.
  initialPlaylist: TrackType[]; //Массив исходных треков, до применения фильтрации.
  likedTracks: TrackType[];
};
const initialState: PlayListStateType = {
  currentPlaylist: [],
  currentTrack: null,
  isPlaying: false,
  isShaffled: false,
  shaffledPlaylist: [],
  loop: false,
  filterOptions: {
    author: [],
    genre: [],
    order: "По умолчанию",
    searchString: "",
  },
  filteredPlaylist: [],
  initialPlaylist: [],
  likedTracks: [],
};

const playListSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setLikeTrack: (state, action: PayloadAction<TrackType>) => {
      state.likedTracks.push(action.payload);
    },
    setDislikeTrack: (state, action: PayloadAction<number>) => {
      state.likedTracks = state.likedTracks.filter((track) => track.id !== action.payload);
    },
    setInitialPlaylist: (state, action: PayloadAction<TrackType[]>) => {
      state.filteredPlaylist = action.payload;
      state.initialPlaylist = action.payload;
    },
    setCurrentTrack: (
      state,
      action: PayloadAction<{
        currentTrack: TrackType;
        currentPlaylist: TrackType[];
      }>
    ) => {
      state.currentTrack = action.payload.currentTrack;
      state.currentPlaylist = action.payload.currentPlaylist;
      state.shaffledPlaylist = [...action.payload.currentPlaylist].sort(
        () => 0.5 - Math.random()
      );
    },
    nextTrack: (state) => {
      const playlist = state.isShaffled
        ? state.shaffledPlaylist
        : state.currentPlaylist;
      const currentIndex = playlist.findIndex(
        (track) => track.id === state.currentTrack?.id
      );

      const nextIndex = playlist[currentIndex + 1];
      if (nextIndex) {
        state.currentTrack = nextIndex;
      }
    },
    prevTrack: (state) => {
      //опеределяем какой плейлист будет отображаться, первоначальный или перемещанный
      const playlist = state.isShaffled
        ? state.shaffledPlaylist
        : state.currentPlaylist;
      // находим текущий трек в плейлисте
      const currentIndex = playlist.findIndex(
        (track) => track.id === state.currentTrack?.id
      );
      // не исчезает бар, если трек последний, ничего не происходит
      const prevIndex = playlist[currentIndex - 1];
      if (prevIndex) {
        state.currentTrack = prevIndex;
      }
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setIsShuffled: (state, action: PayloadAction<boolean>) => {
      state.isShaffled = action.payload;
    },
    setLoop: (state, action: PayloadAction<boolean>) => {
      state.loop = action.payload;
    },
    setFilters: (
      state,
      action: PayloadAction<{
        author?: string[];
        genre?: string[];
        order?: string;
        searchString?: string;
      }>
    ) => {
      state.filterOptions = {
        author: action.payload.author || state.filterOptions.author,
        genre: action.payload.genre || state.filterOptions.genre,
        order: action.payload.order || state.filterOptions.order,
        searchString:
          action.payload.searchString || state.filterOptions.searchString,
      };
      const filterTracks = state.initialPlaylist.filter((track) => {
        const hasSearchString = track.name //если поставить author, то будет искать треки по автору
          .toLocaleLowerCase()
          .includes(state.filterOptions.searchString.toLocaleLowerCase());
        // если мы выбрали фильтры для авторов, то проверяем трек на совпадение этим автором
        // если мы не выбрали фильтр по автору, то трек возвращать не надо
        const hasAuthor =
          state.filterOptions.author.length > 0
            ? state.filterOptions.author.includes(track.author) // возвращает true или false
            : true;
        const hasGenre =
          state.filterOptions.genre.length > 0
            ? state.filterOptions.genre.includes(track.genre) // возвращает true или false
            : true;
        return hasSearchString && hasAuthor && hasGenre;
      });
      switch (state.filterOptions.order) {
        case "Сначала новые":
          filterTracks.sort(
            (a, b) =>
              new Date(b.release_date).getTime() -
              new Date(a.release_date).getTime()
          );
          break;
        case "Сначала старые":
          filterTracks.sort(
            (a, b) =>
              new Date(a.release_date).getTime() -
              new Date(b.release_date).getTime()
          );
          break;

        default:
          filterTracks;
          break;
      }
      state.filteredPlaylist = filterTracks;
    },
    resetFilters: (state) => {
      state.filterOptions = {
        author: [],
        genre: [],
        order: "По умолчанию",
        searchString: "",
      };
      state.filteredPlaylist = state.initialPlaylist;
    },
    likeTrack: (state, action: PayloadAction<TrackType>) => {
      state.likedTracks.push(action.payload);
    },
    deleteTrack: (state, action: PayloadAction<TrackType>) => {
      state.likedTracks = state.likedTracks.filter(
        (el) => el.id !== action.payload.id
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(
      getFavoriteTracks.fulfilled,
      (state, action: PayloadAction<TrackType[]>) => {
        state.likedTracks = action.payload;
      }
    );
  },
});
export const {
  setCurrentTrack,
  nextTrack,
  setIsPlaying,
  prevTrack,
  setIsShuffled,
  setLoop,
  setFilters,
  setInitialPlaylist,
  resetFilters,
  setLikeTrack,
  setDislikeTrack,
} = playListSlice.actions;

export const playlistReducer = playListSlice.reducer;
