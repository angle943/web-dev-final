import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./underlined-text.module.scss";
import { useColorContext } from "@/context/color-context";

export type UnderlinedTextProps = {
  children: ReactNode;
  className?: string;
};

export function UnderlinedText({ children, className }: UnderlinedTextProps) {
  const { isLightMode } = useColorContext();
  return (
    <span
      className={clsx(styles.text, className, {
        [styles["text--light-mode"]]: isLightMode,
      })}
    >
      {children}
    </span>
  );
}
