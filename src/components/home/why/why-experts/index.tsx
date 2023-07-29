"use client";
import styles from "./why-experts.module.scss";
import Image from "next/image";
import { UnderlinedText } from "@/components/underlined-text";
import clsx from "clsx";
import { useState } from "react";
import { useEventListener } from "usehooks-ts";
import { useColorContext } from "@/context/color-context";

const elementId = "why-experts";

export function WhyExperts() {
  const { isLightMode } = useColorContext();
  const [elIsInView, setElIsInView] = useState<boolean>(false);

  useEventListener("scroll", () => {
    const el = document.getElementById(elementId);

    if (!el) {
      return;
    }

    const { innerHeight } = window;
    const { top } = el.getBoundingClientRect();

    if (top > 0 && top < innerHeight) {
      setElIsInView(true);
    } else {
      setElIsInView(false);
    }
  });

  return (
    <div className={styles.container} id={elementId}>
      <Image
        className={styles.image}
        src="/home/faang.jpg"
        alt="FAANG image"
        width={864}
        height={576}
      />
      <section
        className={clsx(styles.section, {
          [styles["in-view"]]: !isLightMode && elIsInView,
          [styles["section--light-mode"]]: isLightMode,
          [styles["section--light-mode--in-view"]]: isLightMode && elIsInView,
        })}
      >
        <h4 className={styles.title}>
          Learn From <br />
          <UnderlinedText>Industry Leaders.</UnderlinedText>
        </h4>
        <p className={clsx("text-xl")}>
          All of our courses are from seasoned veterans with a passion for
          teaching. This includes lecturers that are senior developers from
          companies such as:
        </p>
        <ul className={clsx(styles.ul, "text-xl")}>
          <li>Amazon</li>
          <li>Microsoft</li>
        </ul>
        <p className={clsx("text-xl")}>...and many more.</p>
      </section>
    </div>
  );
}
