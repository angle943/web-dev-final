import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./container.module.scss";

export type ContainerProps = {
  className?: string;
  children: ReactNode;
};

export function Container({ className, children }: ContainerProps) {
  return <div className={clsx(styles.container, className)}>{children}</div>;
}
