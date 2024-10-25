import * as React from "react";

// @ts-ignore
import styles from "./nav-item.module.scss";
import { cn } from "../../utils";

type Props = {
  className?: string;
  selected?: boolean;
} & React.HTMLProps<HTMLDivElement>;

export const NavItem: React.FC<Props> = ({ className, selected, ...props }) => {
  return (
    <div
      className={cn(styles.button, className, {
        [styles.selected]: Boolean(selected),
      })}
      {...props}
    />
  );
};
