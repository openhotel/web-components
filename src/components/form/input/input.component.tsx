import * as React from "react";

// @ts-ignore
import styles from "./input.module.scss";
import { cn } from "../../../utils";
import { useId } from "react";
import { BoxComponent, BoxProps, extractBoxProps } from "../../../components";

type Props = {
  className?: string;
  placeholder?: string;
} & Partial<BoxProps> &
  React.HTMLProps<HTMLInputElement>;

export const InputComponent: React.FC<Props> = ({
  className,
  placeholder,
  ...props
}) => {
  const id = useId();
  const [otherProps, boxProps] = extractBoxProps<Props>(props);

  return (
    <BoxComponent {...boxProps} className={styles.inputWrapper}>
      <input
        id={id}
        className={cn(styles.input, className, {
          [styles.hasPlaceholder]: !!placeholder,
        })}
        placeholder={placeholder}
        {...otherProps}
      />
      {placeholder ? (
        <label className={styles.placeholder} htmlFor={id}>
          {placeholder}
        </label>
      ) : null}
    </BoxComponent>
  );
};
