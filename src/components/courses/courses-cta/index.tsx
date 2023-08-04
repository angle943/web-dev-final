import styles from "./courses-cta.module.scss";
import { Container } from "@/components/container";
import { ButtonMain } from "@/components/buttons/button-main";
import { PageRoute } from "@/constants/page-route";
import Image from "next/image";

export function CoursesCta() {
  return (
    <Container className={styles.container}>
      <div className={styles["text-section"]}>
        <h2>Join ACDX</h2>
        <h6 className={styles.description}>
          Get access to all courses and a community of 10,000 students
        </h6>
        <ButtonMain
          variant="primary"
          href={PageRoute.join}
          className={styles.button}
        >
          View plans
        </ButtonMain>
      </div>
      <div className={styles["logo-wrapper"]}>
        <Image
          src="/courses/js-logo.png"
          alt="JavaScript Logo"
          width={480}
          height={480}
        />
      </div>
    </Container>
  );
}
