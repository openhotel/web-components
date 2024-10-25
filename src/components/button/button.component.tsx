import * as React from "react";

// @ts-ignore
import styles from "./button.module.scss";
import { cn } from "../../utils";

type Props = {
  className?: string;
} & React.HTMLProps<HTMLDivElement>;

export const Button: React.FC<Props> = ({ className, ...props }) => {
  return <div className={cn(styles.button, className)} {...props} />;
};
