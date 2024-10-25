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
  NavItemComponent,
  HomeIconComponent,
  AccountItemComponent,
  LicenseComponent,
  HotelIconComponent,
  SocialComponent,
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
            <NavItemComponent selected icon={<HomeIconComponent />}>
              Home
            </NavItemComponent>
            <NavItemComponent icon={<HotelIconComponent />}>
              Hotels
            </NavItemComponent>
          </NavigationComponent>
          <div className={styles.bigContainer}>
            <HeaderComponent>
              <Button>
                {/*<HomeIconComponent fill="black" />*/}
                <span>Check In</span>
              </Button>
              <AccountItemComponent />
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
          <SocialComponent />
          <a href="#">Manifest</a>
          <a href="#">Report a bug</a>
          <a href="#">Run your own hotel</a>
          <a href="#">Terms and conditions</a>
          <LicenseComponent />
        </FooterComponent>
      </div>
      <div>{children}</div>
    </div>
  );
};
