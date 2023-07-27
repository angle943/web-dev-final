import { ReactNode, useCallback } from "react";
import clsx from "clsx";
import styles from "./hero-title.module.scss";
import { UnderlinedText } from "@/components/underlined-text";

export type HeroTitleProps = {
  typeCount: number;
  cursorCount: number;
  showAll: boolean;
};

export function HeroTitle({ typeCount, cursorCount, showAll }: HeroTitleProps) {
  const renderTypingText = useCallback((): ReactNode => {
    const firstText = "Build your skills";
    const secondText = "as a developer.";
    const offset = 6; // 0.3 s
    const charsToShow = typeCount - offset;
    const totalTypingTime = 60; // 3 s
    const showTypingCursor = cursorCount % 2 === 0;

    if (charsToShow <= firstText.length) {
      return (
        <>
          {firstText.substring(0, Math.max(charsToShow, 0))}
          {showTypingCursor && <span className={styles.cursor}>|</span>} <br />
        </>
      );
    }
    if (typeCount <= totalTypingTime) {
      return (
        <>
          {firstText.substring(0, Math.max(charsToShow, 0))} <br />
          {secondText.substring(0, Math.max(charsToShow - firstText.length, 0))}
          {showTypingCursor && <span className={styles.cursor}>|</span>}
        </>
      );
    }

    return (
      <>
        {firstText}
        <br />
        {secondText}
      </>
    );
  }, [cursorCount, typeCount]);

  return (
    <h1 className={styles.title}>
      {renderTypingText()} <br />
      <span
        className={clsx(styles["initially-hidden"], {
          [styles.visible]: showAll,
        })}
      >
        Unlock your
      </span>
      <br />
      <UnderlinedText
        className={clsx(styles.potential, styles["initially-hidden"], {
          [styles.visible]: showAll,
        })}
      >
        fullest potential.
      </UnderlinedText>
    </h1>
  );
}
