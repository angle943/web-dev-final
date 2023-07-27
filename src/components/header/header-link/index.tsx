"use client";
import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "./header-link.module.scss";
import { usePathname } from "next/navigation";

export type HeaderLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
};

export function HeaderLink({ children, className, href }: HeaderLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(styles.link, className, {
        [styles.active]: pathname === href,
      })}
    >
      {children}
    </Link>
  );
}
