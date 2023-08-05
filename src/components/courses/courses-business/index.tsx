import styles from "./courses-business.module.scss";
import { CoursesSectionHeader } from "@/components/courses/courses-section-header";
import { CoursesSection } from "@/constants/page-route";
import Image from "next/image";
import clsx from "clsx";
import { ButtonMain } from "@/components/buttons/button-main";
import { Container } from "@/components/container";

export function CoursesBusiness() {
  return (
    <Container className={styles.container}>
      <section className={styles.section}>
        <CoursesSectionHeader
          id={CoursesSection.business}
          title="Expand Your Business"
        />
        <div className={styles.cta}>
          <Image
            className={styles.image}
            src="/courses/business.jpg"
            alt="Shaking Hands"
            width={50 * 16}
            height={50 * 16}
          />
          <div className={styles["cta-text-section"]}>
            <h3>Want to partner with us?</h3>
            <p className={clsx(styles.description, "text-2xl")}>
              Do you have an idea you want to propose to our team? Or are you
              interested in being one of our instructors? Perhaps you want to
              join our team? Don&apos;t hesitate to contact us!
            </p>
            <ButtonMain variant="primary">Contact us</ButtonMain>
          </div>
        </div>
      </section>
    </Container>
  );
}
