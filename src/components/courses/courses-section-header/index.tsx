import { CoursesSectionValues } from "@/constants/page-route";
import { JetBrains_Mono } from "next/font/google";
import styles from "./courses-section-header.module.scss";
import clsx from "clsx";
import { Container } from "@/components/container";

const mono = JetBrains_Mono({ subsets: ["latin"] });

export type CoursesSectionHeaderProps = {
  id: CoursesSectionValues;
  title: string;
};

export function CoursesSectionHeader({ id, title }: CoursesSectionHeaderProps) {
  return (
    <div className={styles.wrapper} id={id}>
      <div className={styles["id-section"]}>
        <mark className={clsx(styles.id, mono.className, "text-xl")}>{id}</mark>
        <hr className={styles.hr} />
      </div>
      <h2 className={clsx(styles.title, "text-9xl")}>{title}</h2>
    </div>
  );
}
