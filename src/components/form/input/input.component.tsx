import * as React from "react";

// @ts-ignore
import styles from "./input.module.scss";
import { cn } from "../../../utils";
import { useId, useState } from "react";

type Props = {
  className?: string;
  placeholder?: string;
} & React.HTMLProps<HTMLInputElement>;

export const InputComponent: React.FC<Props> = ({
  className,
  placeholder,
  ...props
}) => {
  const id = useId();

  return (
    <div className={styles.inputWrapper}>
      <input
        id={id}
        className={cn(styles.input, className, {
          [styles.hasPlaceholder]: !!placeholder,
        })}
        placeholder={placeholder}
        {...props}
      />
      {placeholder ? (
        <label className={styles.placeholder} htmlFor={id}>
          {placeholder}
        </label>
      ) : null}
    </div>
  );
};
