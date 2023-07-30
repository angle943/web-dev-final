"use client";
import styles from "./why-hours.module.scss";
import { useColorContext } from "@/context/color-context";
import clsx from "clsx";

const elementId = "why-hours";

export function WhyHours() {
  const { isLightMode } = useColorContext();

  return (
    <div
      className={clsx(styles.container, {
        [styles["container--light-mode"]]: isLightMode,
      })}
      id={elementId}
    >
      <span
        className={clsx(styles.number, {
          [styles["number--light-mode"]]: isLightMode,
        })}
      >
        500+
      </span>
      <p className={clsx(styles.text, "text-xl")}>hours of content.</p>
    </div>
  );
}
