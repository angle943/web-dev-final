import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./underlined-text.module.scss";

export type UnderlinedTextProps = {
  children: ReactNode;
  className?: string;
};

export function UnderlinedText({ children, className }: UnderlinedTextProps) {
  return <span className={clsx(styles.text, className)}>{children}</span>;
}
