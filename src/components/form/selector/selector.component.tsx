import * as React from "react";

// @ts-ignore
import styles from "./selector.module.scss";
import { cn } from "../../../utils";
import { useCallback, useRef, useState } from "react";

type Option = {
  key: string | number;
  value: React.ReactNode;
};

type Props = {
  name?: string;
  placeholder?: string;

  className?: string;

  defaultOption?: Option;
  options: Option[];

  onChange?: (option: Option) => void;
};

export const SelectorComponent: React.FC<Props> = ({
  name,
  placeholder,
  className,
  options,
  defaultOption,
  onChange = () => {},
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    defaultOption,
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onChangeValue = useCallback(
    (option: Option) => () => {
      setSelectedOption(option);
      onChange(option);
      setIsOpen(false);
    },
    [setSelectedOption, onChange, setIsOpen],
  );

  const onClickClear = useCallback(() => {
    setSelectedOption(null);
    onChange(null);
    setIsOpen(false);
  }, [setSelectedOption, onChange, setIsOpen]);

  const inputRef = useRef<HTMLInputElement>();
  const closeRef = useRef();

  const onToggleOptions = useCallback(
    (event) => {
      if (event.target === closeRef.current) return;
      setIsOpen((isOpen) => !isOpen);
    },
    [setIsOpen],
  );

  const onContextClick = useCallback(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <div onClick={onContextClick} className={cn(styles.selector, className)}>
      <div
        onClick={onToggleOptions}
        className={cn(styles.input, {
          [styles.isOpen]: isOpen,
        })}
      >
        <input
          ref={inputRef}
          name={name}
          className={styles.input}
          defaultValue={selectedOption?.key}
        />
        {selectedOption ? (
          <label className={styles.selection}>{selectedOption?.value}</label>
        ) : (
          <label className={styles.placeholder}>{placeholder}</label>
        )}

        {selectedOption ? (
          <div ref={closeRef} className={styles.clear} onClick={onClickClear}>
            X
          </div>
        ) : null}
      </div>
      {isOpen ? (
        <div className={styles.modal}>
          <div className={styles.options}>
            {options.map((option) => (
              <div
                key={option.key}
                className={styles.option}
                onClick={onChangeValue(option)}
              >
                {option.value}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};
