import { ReactNode } from "react";
import styles from "./button-main.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { useColorContext } from "@/context/color-context";

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
  const { isLightMode } = useColorContext();

  const sharedProps = {
    className: clsx(styles["button-main"], "text-lg", className, {
      [styles["button-main--light-mode"]]: isLightMode,
      [styles.primary]: !isLightMode && variant === "primary",
      [styles.secondary]: !isLightMode && variant === "secondary",
      [styles["button-main--light-mode--primary"]]: isLightMode && variant === "primary",
      [styles["button-main--light-mode--secondary"]]: isLightMode && variant === "secondary",
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
