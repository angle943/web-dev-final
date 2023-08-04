import styles from "./courses-books.module.scss";
import { CoursesSectionHeader } from "@/components/courses/courses-section-header";
import { CoursesSection } from "@/constants/page-route";
import clsx from "clsx";
import Image from "next/image";
import { Roboto_Slab, Raleway } from "next/font/google";
import { ButtonMain } from "@/components/buttons/button-main";

const serif = Roboto_Slab({ subsets: ["latin"] });
const sansSerif = Raleway({ subsets: ["latin"] });

export function CoursesBooks() {
  return (
    <section className={styles.section}>
      <CoursesSectionHeader
        id={CoursesSection.books}
        title="Physical Resources"
      />
      <div className={styles.books}>
        <div className={styles["book-container"]}>
          <figure className={styles.book}>
            <h2 className={clsx(serif.className, "text-9xl")}>Pro React</h2>
            <p
              className={clsx(sansSerif.className, "text-5xl", styles.bookdes)}
            >
              Build a Scalable Frontend Codebase
            </p>
            <p className={clsx(sansSerif.className, "text-5xl")}>
              By: Justin Kim
            </p>
            <Image
              className={styles.logo}
              src="/courses/react-logo.png"
              alt="React Logo"
              width={50 * 16}
              height={50 * 16}
            />
          </figure>
        </div>
        <div className={styles["text-section"]}>
          <h4 className={clsx(styles.new, "text-5xl")}>New Release!</h4>
          <h2 className={clsx(styles.title, "text-9xl")}>Pro React</h2>
          <p className={clsx("text-2xl", styles.description)}>
            Learn how to build industry-scale frontend applications from the
            ground up. A comprehensive guide on React for professional
            developers.
          </p>
          <ButtonMain variant="primary" className={styles.button}>
            Learn More
          </ButtonMain>
        </div>
      </div>
    </section>
  );
}
