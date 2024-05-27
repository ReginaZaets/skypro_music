import classNames from "classnames";
import React from "react";
import styles from "./Filter.module.css";

type Props = {
  title: string;
  list: string[];
  onClick: (value: string) => void;
  value: string;
  isOpen: boolean;
};

const Filter = ({ title, list, onClick, value, isOpen }: Props) => {
  return (
    <div>
      <button
        onClick={() => onClick(value)}
        className={classNames(styles.filterButton, styles.btnText)}
      >
        {title}
      </button>
      {isOpen && (
        <div className={styles.list}>
          <ul className={styles.listItem}>
            {list.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;
