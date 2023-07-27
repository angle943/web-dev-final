"use client";
import styles from "./why-progression.module.scss";
import clsx from "clsx";
import { useEffect } from "react";

const elementId = "why-progression";
const fillLineId = "progression-fill-line";
const htmlDotId = "progression-html-dot";
const htmlTextId = "progression-html-text";
const cssDotId = "progression-css-dot";
const cssTextId = "progression-css-text";
const jsDotId = "progression-js-dot";
const jsTextId = "progression-js-text";
const reactDotId = "progression-react-dot";
const reactTextId = "progression-react-text";

const zeroWidth = { width: "0" };
const fullWidth = { width: "100%" };
const bgColorGray = { backgroundColor: "rgb(var(--gray-400))" };
const bgColorBlue = { backgroundColor: "rgb(var(--blue-700))" };
const textInvisible = { opacity: 0 };
const textVisible = { opacity: 1 };
const totalAnimationTime = 8000;
const animationOption = {
  duration: totalAnimationTime,
  iterations: Infinity,
};

export function WhyProgression() {
  useEffect(() => {
    const fillLine = document.getElementById(fillLineId);
    const htmlDot = document.getElementById(htmlDotId);
    const htmlText = document.getElementById(htmlTextId);
    const cssDot = document.getElementById(cssDotId);
    const cssText = document.getElementById(cssTextId);
    const jsDot = document.getElementById(jsDotId);
    const jsText = document.getElementById(jsTextId);
    const reactDot = document.getElementById(reactDotId);
    const reactText = document.getElementById(reactTextId);

    if (
      fillLine &&
      htmlDot &&
      htmlText &&
      cssDot &&
      cssText &&
      jsDot &&
      jsText &&
      reactDot &&
      reactText
    ) {
      fillLine.animate(
        [zeroWidth, { ...fullWidth, offset: 0.75 }, fullWidth],
        animationOption,
      );
      htmlDot.animate(
        [
          bgColorGray,
          { ...bgColorGray, offset: 0.1 },
          { ...bgColorBlue, offset: 0.15 },
          bgColorBlue,
        ],
        animationOption,
      );
      htmlText.animate(
        [
          textInvisible,
          { ...textInvisible, offset: 0.1 },
          { ...textVisible, offset: 0.15 },
          textVisible,
        ],
        animationOption,
      );
      cssDot.animate(
        [
          bgColorGray,
          { ...bgColorGray, offset: 0.25 },
          { ...bgColorBlue, offset: 0.3 },
          bgColorBlue,
        ],
        animationOption,
      );
      cssText.animate(
        [
          textInvisible,
          { ...textInvisible, offset: 0.25 },
          { ...textVisible, offset: 0.3 },
          textVisible,
        ],
        animationOption,
      );
      jsDot.animate(
        [
          bgColorGray,
          { ...bgColorGray, offset: 0.4 },
          { ...bgColorBlue, offset: 0.45 },
          bgColorBlue,
        ],
        animationOption,
      );
      jsText.animate(
        [
          textInvisible,
          { ...textInvisible, offset: 0.4 },
          { ...textVisible, offset: 0.45 },
          textVisible,
        ],
        animationOption,
      );
      reactDot.animate(
        [
          bgColorGray,
          { ...bgColorGray, offset: 0.55 },
          { ...bgColorBlue, offset: 0.6 },
          bgColorBlue,
        ],
        animationOption,
      );
      reactText.animate(
        [
          textInvisible,
          { ...textInvisible, offset: 0.55 },
          { ...textVisible, offset: 0.6 },
          textVisible,
        ],
        animationOption,
      );
    }
  }, []);

  return (
    <div className={styles.container} id={elementId}>
      <h5 className={styles.text}>Follow a guided path.</h5>
      <figure className={styles.figure}>
        <div className={clsx(styles.line, styles["blank-line"])} />
        <div
          id={fillLineId}
          className={clsx(styles.line, styles["filled-line"])}
        />
        <div className={clsx(styles.section, styles.html)}>
          <div id={htmlDotId} className={clsx(styles.dot)} />
          <span id={htmlTextId} className={clsx(styles.label, "text-xl")}>
            HTML
          </span>
        </div>
        <div className={clsx(styles.section, styles.css)}>
          <div id={cssDotId} className={clsx(styles.dot)} />
          <span id={cssTextId} className={clsx(styles.label, "text-xl")}>
            CSS
          </span>
        </div>
        <div className={clsx(styles.section, styles.js)}>
          <div id={jsDotId} className={clsx(styles.dot)} />
          <span id={jsTextId} className={clsx(styles.label, "text-xl")}>
            JS
          </span>
        </div>
        <div className={clsx(styles.section, styles.react)}>
          <div id={reactDotId} className={clsx(styles.dot)} />
          <span id={reactTextId} className={clsx(styles.label, "text-xl")}>
            React
          </span>
        </div>
      </figure>
    </div>
  );
}
