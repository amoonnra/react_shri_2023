"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./SelectField.module.scss";
import cn from "classnames";
import ArrowIcon from "assets/icons/arrow.svg";
import { createPortal } from "react-dom";
import { ISelectorOption } from "@/models";

const cx = cn.bind(styles);

interface IProps<T> {
  value?: ISelectorOption<T>;
  name?: string;
  onSelect: (option: ISelectorOption<T>) => void;
  options?: ISelectorOption<T>[];
  placeholder?: string;
  label?: string;
}

export const SelectField = <T,>({
  placeholder,
  value,
  label,
  options,
  onSelect,
  name,
}: IProps<T>) => {
  const inputRef = useRef<HTMLDivElement>(null);
  const optionListRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [choosenOption, setChoosenOption] = useState<
    ISelectorOption<T> | undefined
  >(value);

  options = [
    {
      id: undefined,
      label: "Не выбран",
    },
    ...(options || []),
  ];

  const optionsList = createPortal(
    <div
      className={cx(styles.optionsBlock, { [styles.isOpen]: isOpen })}
      ref={optionListRef}
    >
      <ul>
        {options.map((option) => (
          <li key={option.id} onClick={() => handleChooseOption(option)}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>,
    window.document.body
  );

  const handleChooseOption = (option: ISelectorOption<T>): void => {
    setChoosenOption(option);
    onSelect(option);
  };

  const hideOptionsByClickOutside = useCallback(({ target }: MouseEvent) => {
    if (target !== inputRef.current) setIsOpen(false);
  }, []);

  const moveHelper = () => {
    const { bottom, left, width, top } =
      inputRef.current?.getBoundingClientRect() || {};

    if (optionListRef.current && bottom && left) {
      optionListRef.current.style.width = width + "px";
      optionListRef.current.style.top = bottom + 4 + "px";
      optionListRef.current.style.left = left + "px";
    }
  };

  useEffect(() => {
    if (isOpen) {
      moveHelper();
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("scroll", moveHelper);
    if (!isOpen)
      document.body.addEventListener("click", hideOptionsByClickOutside);
    return () => {
      document.removeEventListener("click", hideOptionsByClickOutside);
      document.removeEventListener("scroll", moveHelper);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <div className={styles.wrap}>
        <div
          className={cx(styles.select, {
            [styles.isOpen]: isOpen,
            [styles.wasChosen]: !choosenOption,
          })}
          ref={inputRef}
          onClick={handleClick}
        >
          {choosenOption?.label || placeholder}
          <ArrowIcon />
        </div>
        {optionsList}
      </div>
    </>
  );
};
