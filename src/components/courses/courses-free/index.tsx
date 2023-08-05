import styles from "./courses-free.module.scss";
import { CoursesSectionHeader } from "@/components/courses/courses-section-header";
import { CoursesSection, PageRoute } from "@/constants/page-route";
import { ButtonMain } from "@/components/buttons/button-main";
import Image from "next/image";
import clsx from "clsx";
import { Container } from "@/components/container";

export function CoursesFree() {
  return (
    <Container className={styles.container}>
      <section className={styles.section}>
        <CoursesSectionHeader id={CoursesSection.free} title="Free Learning" />
        <div className={clsx(styles.container, styles.youtube)}>
          <div className={styles["text-section"]}>
            <h2>Free Tutorials</h2>
            <h6 className={styles.description}>
              Check out our YouTube channel to keep up with the latest news and
              free tutorials
            </h6>
            <ButtonMain
              className={styles.button}
              variant="primary"
              href="https://www.youtube.com/@AngleCoding"
            >
              Go
            </ButtonMain>
          </div>
          <Image
            src="/courses/youtube-logo.svg"
            alt="Youtube Logo"
            width={480}
            height={480}
          />
        </div>
        <div className={styles.container}>
          <div className={styles["image-wrapper"]}>
            <Image
              src="/courses/blog.jpg"
              alt="Blog Image"
              width={40 * 16}
              height={30 * 16}
            />
          </div>
          <div className={styles["text-section"]}>
            <h2>Read Our Blogs</h2>
            <h6 className={styles.description}>
              From topics covering the latest news in software, to having guides
              on the best gear for your productivity. Read our blogs written by
              our instructors.
            </h6>
            <ButtonMain
              className={styles.button}
              variant="primary"
              href={PageRoute.blog}
            >
              Blogs
            </ButtonMain>
          </div>
        </div>
      </section>
    </Container>
  );
}
