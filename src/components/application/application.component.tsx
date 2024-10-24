import * as React from "react";

// @ts-ignore
import styles from "./application.module.scss";
import {
  Button,
  FooterComponent,
  HeaderComponent,
  NavigationComponent,
  HomeIconComponent,
} from "../../components";

type Props = {
  children: React.ReactNode;
};

export const ApplicationComponent: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.application}>
      <div className={styles.bigCard}>
        <div className={styles.container}>
          <NavigationComponent></NavigationComponent>
          <div className={styles.bigContainer}>
            <HeaderComponent>
              <Button>
                {/*<HomeIconComponent fill="black" />*/}
                <label>Check In</label>
              </Button>
            </HeaderComponent>
            <main className={styles.main}>content</main>
          </div>
        </div>
        <FooterComponent>footer</FooterComponent>
      </div>
      <div>{children}</div>
    </div>
  );
};
