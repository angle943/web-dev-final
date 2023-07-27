import { ReactNode } from "react";
import styles from "./button-main.module.scss";
import clsx from "clsx";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary";

export type ButtonMainProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?(): void;
  variant: ButtonVariant;
};

export function ButtonMain({
  children,
  className,
  href,
  onClick,
  variant,
}: ButtonMainProps) {
  const sharedProps = {
    className: clsx(styles["button-main"], "text-lg", className, {
      [styles.primary]: variant === "primary",
      [styles.secondary]: variant === "secondary",
    }),
  };

  if (href) {
    return (
      <Link href={href} {...sharedProps}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} {...sharedProps}>
      {children}
    </button>
  );
}
