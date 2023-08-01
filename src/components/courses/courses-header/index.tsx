import styles from "./courses-header.module.scss";

export function CoursesHeader() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        Learn & <br /> Be Curious
      </h1>
      <h6 className={styles.description}>
        We got something for every one and every group. See what we have to
        offer.
      </h6>
    </div>
  );
}
