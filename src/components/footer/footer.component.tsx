import * as React from "react";

// @ts-ignore
import styles from "./footer.module.scss";

type Props = {
  children?: React.ReactNode;
};

export const FooterComponent: React.FC<Props> = ({ children }) => {
  return <footer className={styles.footer}>footer</footer>;
};
