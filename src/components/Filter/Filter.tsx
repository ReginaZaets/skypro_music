"use client";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import styles from "./Filter.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { setFilters } from "../../store/features/playListSlice";
import { TrackType } from "../../lib/type";
import { order } from "./FilterData";

type Props = {
  title: string;
  list: string[];
  onClick: (value: string) => void;
  value: "author" | "order" | "genre";
  isOpen: boolean;
  allTracks: TrackType[];
};

const Filter = ({ allTracks, title, list, onClick, value, isOpen }: Props) => {
  const [filterNumber, setFilterNumber] = useState<number>(0);

  const dispatch = useAppDispatch();
  const orderList = useAppSelector(
    (state) => state.playlist.filterOptions.order
  );
  //функция возвращает уникальных авторов и жанров
  const filterList = () => {
    if (value !== "order") {
      const array = new Set(
        allTracks?.map((track: TrackType) => track[value]) || []
      );
      return Array.from(array);
    }
    return order;
  };
  const toggleFilter = (item: string) => {
    if (list === order) {
      dispatch(
        setFilters({
          [value]: orderList === item ? "по умолчанию" : item,
        })
      );
      return;
    }
    dispatch(
      setFilters({
        [value]: list.includes(item)
          ? list.filter((el) => el !== item)
          : [...list, item],
      })
    );
  };
  useEffect(() => {
    if (value !== "order") setFilterNumber(list.length);
  }, [list, value]);
  filterList();
  return (
    <div>
      <div className={styles.listDiv}>
        {filterNumber > 0 ? (
          <div className={styles.filterNumber}>{filterNumber}</div>
        ) : null}
        <button
          onClick={() => onClick(value)}
          className={classNames(styles.filterButton, styles.btnText, {
            [styles.activeFilter]: isOpen,
          })}
        >
          {title}
        </button>
      </div>

      {isOpen && (
        <div className={styles.list}>
          <ul className={styles.listItem}>
            {filterList().map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => toggleFilter(item)}
                  className={classNames(styles.listText, {
                    [styles.listTextActive]:
                      list === order ? orderList === item : list.includes(item),
                  })}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;
