import * as React from "react";

// @ts-ignore
import styles from "./navigation.module.scss";
import image from "../../../assets/logo.png";

type Props = {
  children?: React.ReactNode;
};

export const NavigationComponent: React.FC<Props> = ({ children }) => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <img alt="logo" src={image} />
      </div>
      {children}
    </nav>
  );
};
