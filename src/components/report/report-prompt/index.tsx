import styles from "./report-prompt.module.scss";
import { ReactNode } from "react";
import { JetBrains_Mono } from "next/font/google";
import clsx from "clsx";

const mono = JetBrains_Mono({ subsets: ["latin"] });

export type ReportPromptProps = {
  children: ReactNode;
};

export function ReportPrompt({ children }: ReportPromptProps) {
  return (
    <blockquote className={clsx(mono.className, styles.blockquote)}>
      {children}
    </blockquote>
  );
}
