"use client";
import React, { useState } from "react";
import styles from "./Sorting.module.css";
import Filter from "@components/Filter/Filter";

const Sorting = ({
  FilterData,
}: {
  FilterData: Array<{ title: string; list: string[]; value: string }>;
}) => {
  const [filterValue, setFilterValue] = useState<string | null>(null);
  const handleFilterValue = (value: string) => {
    setFilterValue((prev) => (prev === value ? null : value));
  };
  return (
    <div>
      <h2 className={styles.centerblockH2}>Треки</h2>
      <div className={styles.centerblockFilter}>
        <div className={styles.filterTitle}>Искать по:</div>
        {FilterData.map((item, index) => {
          return (
            <Filter
              key={index}
              title={item.title}
              list={item.list}
              onClick={handleFilterValue}
              value={item.value}
              isOpen={filterValue === item.value}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sorting;
