import { ReactNode } from "react";
import { JetBrains_Mono } from "next/font/google";
import styles from "./tag.module.scss";
import clsx from "clsx";

const mono = JetBrains_Mono({ subsets: ["latin"] });

export type TagProps = {
  children: ReactNode;
  className?: string;
};

export function Tag({ className, children }: TagProps) {
  return (
    <mark className={clsx(mono, styles.tag, className, "text-base")}>
      {children}
    </mark>
  );
}
