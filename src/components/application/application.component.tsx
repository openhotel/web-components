import * as React from "react";

// @ts-ignore
import styles from "./application.module.scss";
import {
  Button,
  FooterComponent,
  HeaderComponent,
  NavigationComponent,
  DiscordIconComponent,
  BskyIconComponent,
  NavItem,
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
          <NavigationComponent>
            <NavItem selected>
              <HomeIconComponent /> Home
            </NavItem>
            <NavItem>
              <HomeIconComponent /> Hotels
            </NavItem>
          </NavigationComponent>
          <div className={styles.bigContainer}>
            <HeaderComponent>
              <Button>
                {/*<HomeIconComponent fill="black" />*/}
                <span>Check In</span>
              </Button>
            </HeaderComponent>
            <main className={styles.main}>
              <div className={styles.content}>
                <p />
                content
                <p />
                content
                <p />
                content
                <p />
                content
                <p />
                content
                <p />
                content
                <p />
                content
                <p />
                content
                <p />
                content
                <p />
                content
                <p />
                content
                <p />
                content
                <p />
                content
                <p />
                content
                <p />
                content
                <p />
                content
                <p />
                content
                <p />
                content
                <p />
                content
                <p />
                content
                <p />
                content
                <p />
                content
                <p />
                content
                <p />
                content
              </div>
            </main>
          </div>
        </div>
        <FooterComponent>
          <div>
            <DiscordIconComponent />
            <BskyIconComponent />
          </div>
        </FooterComponent>
      </div>
      <div>{children}</div>
    </div>
  );
};
