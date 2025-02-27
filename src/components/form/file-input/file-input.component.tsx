import * as React from "react";

// @ts-ignore
import styles from "./file-input.module.scss";
import { cn } from "../../../utils";
import { useCallback, useId, useState } from "react";
import {
  BoxComponent,
  BoxProps,
  extractBoxProps,
  UploadIconComponent,
} from "../../../components";

type Props = Partial<BoxProps> &
  React.HTMLProps<HTMLInputElement> & {
    className?: string;
    onChange?: (files: File[]) => void;
    children?: React.ReactNode;
  };

export const FileInputComponent: React.FC<Props> = ({
  className,
  placeholder,
  onChange,
  children,
  ...props
}) => {
  const id = useId();
  const [otherProps, boxProps] = extractBoxProps<Props>(props);
  const [files, setFiles] = useState<File[]>([]);

  const handleChange = useCallback(
    (event) => {
      const newFiles = Array.from(event.target.files) as File[];
      setFiles(newFiles);
      onChange && onChange(newFiles);
    },
    [onChange],
  );

  const handleDrop = useCallback(
    (event) => {
      event.preventDefault();
      const acceptedTypes =
        otherProps.accept
          ?.split(",")
          .map((type) => type.trim().toLowerCase()) || [];
      const newFiles = Array.from(event.dataTransfer.files).filter(
        (file: File) =>
          acceptedTypes.length === 0 ||
          acceptedTypes.includes(file.type.toLowerCase()) ||
          acceptedTypes.some((type) => file.name.toLowerCase().endsWith(type)),
      ) as File[];
      setFiles(newFiles);
      onChange && onChange(newFiles);
    },
    [onChange, otherProps.accept],
  );

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
  }, []);

  const handleFileClick = useCallback((fileToRemove: File) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToRemove));
  }, []);

  return (
    <BoxComponent {...boxProps} className={cn(styles.inputWrapper, className)}>
      <div
        className={styles.dragContainer}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <label htmlFor={id} className={styles.label}>
          {children ?? (
            <>
              <UploadIconComponent />
              <span>Upload</span>
            </>
          )}
        </label>
        <input
          id={id}
          {...otherProps}
          className={cn(styles.input, className, {
            [styles.hasPlaceholder]: !!placeholder,
          })}
          type="file"
          onChange={handleChange}
        />
        <div className={styles.files}>
          {files.length
            ? files
                .map((file, index) => (
                  <span
                    key={index}
                    className={styles.fileItem}
                    onClick={() => handleFileClick(file)}
                  >
                    {file.name}
                  </span>
                ))
                .map((element, index, array) => (
                  <React.Fragment key={index}>
                    {element}
                    {index < array.length - 1 && ", "}
                  </React.Fragment>
                ))
            : "No file selected"}
        </div>
      </div>
    </BoxComponent>
  );
};
