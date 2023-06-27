import { FC } from "react";
import styles from "./Button.module.scss";
import cn from 'classnames'

interface IProps {
  children: string 
  mode?: "major" | "minor";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  margin?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
}

const cx = cn.bind(styles)

export const Button: FC<IProps> = ({ margin, mode = "major", onClick, type, children }) => {
  const marginString = `${margin?.top || 0}px ${margin?.right || 0}px ${margin?.bottom || 0}px ${margin?.left || 0}px`
  const className = cx(styles.button, styles[mode])
  
  return (
    <button
      style={{ margin: marginString }}
      className={className}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
