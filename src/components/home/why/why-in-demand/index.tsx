import styles from "./why-in-demand.module.scss";
import { useColorContext } from "@/context/color-context";
import clsx from "clsx";

const elementId = "why-in-demand";

export function WhyInDemand() {
  const { isLightMode } = useColorContext();

  return (
    <div className={clsx(styles.container)} id={elementId}>
      <svg
        className={clsx(styles.image, {
          [styles["image--light-mode"]]: isLightMode,
        })}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-11.5 -10.23174 23 20.46348"
      >
        <title>React Logo</title>
        <circle cx="0" cy="0" r="2.05" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
      <h4
        className={clsx(styles.text, {
          [styles["text--light-mode"]]: isLightMode,
        })}
      >
        Learn the most in demand technologies.
      </h4>
    </div>
  );
}
