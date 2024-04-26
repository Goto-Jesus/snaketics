import { ReactNode } from "react";
import styles from './Button.module.scss';
import classNames from "classnames";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
}

export const Button: React.FC<Props> = ({ children, onClick, isDisabled = false }) => {
  return (
    <button
      type="button"
      className={classNames({
        [styles["button"]]: true,
        [styles["button--disabled"]]: isDisabled,
      })}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};