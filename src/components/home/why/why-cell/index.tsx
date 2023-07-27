"use client";
import { ReactNode, useRef } from "react";
import clsx from "clsx";
import styles from "./why-cell.module.scss";
import { useEventListener } from "usehooks-ts";

export type WhyCellProps = {
  children: ReactNode;
  className: string;
};

export function WhyCell({ children, className }: WhyCellProps) {
  const elRef = useRef<HTMLElement>(null);

  useEventListener("scroll", () => {
    const { current } = elRef;

    if (current) {
      const { innerHeight } = window;
      const { top } = current.getBoundingClientRect();

      const opacity = Math.min(Math.max(innerHeight - top, 0) / 5, 100) / 100;
      current.style.opacity = opacity.toString();
    }
  });

  return (
    <section className={clsx(styles.cell, className)} ref={elRef}>
      {children}
    </section>
  );
}
