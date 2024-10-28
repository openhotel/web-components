import * as React from "react";

// @ts-ignore
import styles from "./main.module.scss";

type Props = {} & React.HTMLProps<HTMLDivElement>;

export const MainComponent: React.FC<Props> = ({ children }) => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>{children}</div>
    </main>
  );
};
