import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./container.module.scss";

export type ContainerProps = {
  className?: string;
  children: ReactNode;
  id?: string;
  fixedWidth?: boolean;
};

export function Container({
  className,
  children,
  id,
  fixedWidth,
}: ContainerProps) {
  return (
    <div
      className={clsx(styles.container, className, {
        [styles["fixed-width"]]: !!fixedWidth,
      })}
      id={id}
    >
      {children}
    </div>
  );
}
