import * as React from "react";

// @ts-ignore
import styles from "./button.module.scss";

type Props = {
  children?: React.ReactNode;
};

export const Button: React.FC<Props> = ({ children }) => {
  return <div className={styles.button}>{children}</div>;
};
