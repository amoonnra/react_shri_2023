import { FC } from "react";
import styles from "./Loader.module.scss";

export const Loader: FC = () => {
  return (
    <div className={styles.loaderWrap}>
      <span className={styles.loader}></span>
    </div>
  );
};
