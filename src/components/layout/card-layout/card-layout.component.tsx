import * as React from "react";

// @ts-ignore
import styles from "./card-layout.module.scss";
import { BackgroundComponent, CardComponent } from "../../../components";
// import { cn } from "src/utils";

type Props = { actions?: React.ReactNode } & React.HTMLProps<HTMLDivElement>;

export const CardLayoutComponent: React.FC<Props> = ({ children, actions }) => {
  return (
    <BackgroundComponent>
      <div className={styles.wrapper}>
        <CardComponent className={styles.card}>
          <main className={styles.main}>
            <div className={styles.content}>{children}</div>
            {actions ? <div className={styles.actions}>{actions}</div> : null}
          </main>
        </CardComponent>
      </div>
    </BackgroundComponent>
  );
};
