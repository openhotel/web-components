import * as React from "react";

// @ts-ignore
import styles from "./lateral-navigator.module.scss";
// @ts-ignore
import image from "../../../../../../assets/logo.png";

type Props = {} & React.HTMLProps<HTMLDivElement>;

export const LateralNavigatorComponent: React.FC<Props> = ({ children }) => {
  // return null
  return (
    <nav className={styles.navigator}>
      <div className={styles.logo}>
        <img alt="logo" src={image} />
      </div>
      <div className={styles.items}>
        <div className={styles.content}>{children}</div>
      </div>
    </nav>
  );
};
