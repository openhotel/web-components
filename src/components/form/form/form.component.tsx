import * as React from "react";
import { FormEvent, useCallback } from "react";

// @ts-ignore
import styles from "./form.module.scss";
import { cn } from "../../../utils";

type Props = {
  className?: string;
  onSubmit?: <Data = unknown>(data: Data) => void;
} & React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

export const FormComponent: React.FC<Props> = ({
  className,
  children,
  onSubmit = () => {},
  ...props
}) => {
  const $onSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as unknown as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData as any);

    onSubmit(data);
  }, []);

  return (
    <form
      onSubmit={$onSubmit}
      className={cn(styles.form, className)}
      {...props}
    >
      {children}
    </form>
  );
};
