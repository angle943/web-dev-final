import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./courses-nav-link.module.scss";

export type CoursesNavLink = {
  children: ReactNode;
  className?: string;
  href: string;
};

export function CoursesNavLink({ children, className, href }: CoursesNavLink) {
  return (
    <a href={href} className={clsx(styles.link, className, "text-lg")}>
      {children}
    </a>
  );
}
