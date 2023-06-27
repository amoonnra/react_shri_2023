"use client";

import React, { FC } from "react";
import cn from "classnames";
import styles from "../app/page.module.scss";
import { MainFilter } from "../Filter";

const cx = cn.bind(styles);

export const Sidebar: FC = () => {
  const className = cx("blockWrapper", styles.sidebar);

  return (
    <aside className={className}>
      <h2>Фильтр поиска</h2>
      <MainFilter />
    </aside>
  );
};
