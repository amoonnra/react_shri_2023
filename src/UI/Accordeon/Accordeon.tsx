"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import styles from "./Accordeon.module.scss";
import ArrowIcon from "assets/icons/arrow.svg";

interface IAccardeonProps {
  children: ReactNode;
}
interface IAccardeonItemProps {
  children: ReactNode;
  title: string;
}
interface IContext {
  activeItem?: string | undefined;
  switchItem?: (title: string) => void;
}
const AccordionContext = createContext<IContext>({});

export const Accordeon = ({ children }: IAccardeonProps) => {
  const [activeItem, setActiveItem] = useState<string>();

  const switchItem = useCallback((title: string) => {
    setActiveItem((prevTitle) =>
      prevTitle && prevTitle === title ? undefined : title
    );
  }, []);
  return (
    <AccordionContext.Provider value={{ activeItem, switchItem }}>
      <div className={styles.accordion}>{children}</div>
    </AccordionContext.Provider>
  );
};

Accordeon.Item = function AccardeonItem({
  children,
  title,
}: IAccardeonItemProps) {
  const { activeItem, switchItem } = useContext(AccordionContext);

  return (
    <div className={styles.accordeonItem} onClick={() => switchItem!(title)}>
      <div className={styles.head}>
        {title} <div className={styles.icon} style={{transform: activeItem === title ? 'rotateX(180deg)' : ''}}><ArrowIcon /></div>
      </div>
      {activeItem === title && <div className={styles.body}>{children}</div>}
    </div>
  );
};
