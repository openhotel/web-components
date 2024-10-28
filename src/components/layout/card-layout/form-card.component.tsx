import * as React from "react";

// @ts-ignore
import styles from "./form-card.module.scss";
import {
  BackgroundComponent,
  CardComponent,
  MainComponent,
} from "../../../components";
import { cn } from "src/utils";

type Props = {} & React.HTMLProps<HTMLDivElement>;

export const FormCardComponent: React.FC<Props> = ({ children }) => {
  return (
    <BackgroundComponent>
      <div className={styles.wrapper}>
        <CardComponent className={styles.card}>
          <main className={styles.main}>
            <div className={styles.content}>{children}</div>
            <div className={styles.actions}>aha</div>
          </main>
        </CardComponent>
      </div>
    </BackgroundComponent>
  );
};
