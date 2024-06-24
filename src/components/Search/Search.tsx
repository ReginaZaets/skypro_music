"use client";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/store";
import { resetFilters, setFilters } from "../../store/features/playListSlice";
import styles from "./Search.module.css";

const Search = () => {
  const [searchResult, setSearchResult] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    setSearchResult(search);
    if (search.trim() === "") {
      dispatch(resetFilters());
    } else {
      dispatch(setFilters({ searchString: search }));
    }
  };

  return (
    <div className={styles.centerblockSearch}>
      <svg className={styles.searchSvg}>
        <use xlinkHref="/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        className={styles.searchText}
        type="search"
        placeholder="Поиск"
        name="search"
        value={searchResult}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
