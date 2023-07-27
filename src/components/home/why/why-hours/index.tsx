"use client";
import styles from "./why-hours.module.scss";

const elementId = "why-hours";

export function WhyHours() {
  return (
    <div className={styles.container} id={elementId}>
      <span className={styles.number}>500+</span>
      <p className="text-xl">hours of content.</p>
    </div>
  );
}
