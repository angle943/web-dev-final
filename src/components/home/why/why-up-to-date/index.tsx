import styles from "./why-up-to-date.module.scss";
import { useColorContext } from "@/context/color-context";
import clsx from "clsx";

const elementId = "why-up-to-date";

export function WhyUpToDate() {
  const { isLightMode } = useColorContext();

  return (
    <div
      className={clsx(styles.container, {
        [styles["container--light-mode"]]: isLightMode,
      })}
      id={elementId}
    >
      <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 12a9 9 0 009 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.706 6.706 0 0111 19c-6.24 0-9.36-7.54-4.95-11.95C10.46 2.64 18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 00-18 0z" />
      </svg>
      <h5
        className={clsx(styles.text, {
          [styles["text--light-mode"]]: isLightMode,
        })}
      >
        Always up to date.
      </h5>
    </div>
  );
}
