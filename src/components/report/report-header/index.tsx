import styles from "./report-header.module.scss";

export function ReportHeader() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Web Dev Report</h1>
      <h6 className={styles.description}>By: Justin Jung Hyun Kim</h6>
    </div>
  );
}
