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
      // Создаем Set для получения уникальных значений и преобразуем его в массив
      const array = Array.from(
        new Set(allTracks?.map((track: TrackType) => track[value]))
      );
      return array;
    }
    return order;
  };
  filterList();

  const toggleFilter = (item: string) => {
    dispatch(
      setFilters({
        [value]: list.includes(item)
          ? list.filter((el) => el !== item)
          : [...list, item],
      })
    );
    if (list === order) {
      dispatch(
        setFilters({
          [value]: orderList === item ? "По умолчанию" : item,
        })
      );
    }
  };

  useEffect(() => {
    if (value !== "order") setFilterNumber(list.length);
  }, [list, value]);

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
            {filterList().map((item) => {
              return (
                <li
                  key={item}
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
