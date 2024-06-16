"use client";
import { useState } from "react";
import { useAppDispatch } from "../hooks/store";
import { setFilters } from "../store/features/playListSlice";
import styles from "./Search.module.css";

const Search = () => {
  const [searchResult, setSearchResult] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    console.log(search);
    setSearchResult(search);
    dispatch(setFilters({ searchString: search }));
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // handleSearch(event);
    }
  };
  return (
    <div className={styles.centerblockSearch}>
      <svg className={styles.searchSvg}>
        <use xlinkHref="icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        className={styles.searchText}
        type="search"
        placeholder="Поиск"
        name="search"
        value={searchResult}
        onChange={handleSearch}
        onKeyDown={handleEnter}
      />
    </div>
  );
};

export default Search;
