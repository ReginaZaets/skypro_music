import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>Страница не найдена</h1>
      <Link href="/">На главную</Link>
    </div>
  );
};

export default NotFound;
