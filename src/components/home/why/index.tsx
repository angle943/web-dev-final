import { Container } from "@/components/container";
import styles from "./why.module.scss";
import { WhyCell } from "@/components/home/why/why-cell";
import { WhyExperts } from "@/components/home/why/why-experts";
import { WhyHours } from "@/components/home/why/why-hours";
import { WhyInDemand } from "@/components/home/why/why-in-demand";
import { WhyUpToDate } from "@/components/home/why/why-up-to-date";
import { WhyProgression } from "@/components/home/why/why-progression";

export function Why() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <h2 className={styles.title}>Why ACDX?</h2>
        <div className={styles.grid}>
          <WhyCell className={styles.experts}>
            <WhyExperts />
          </WhyCell>
          <WhyCell className={styles.hours}>
            <WhyHours />
          </WhyCell>
          <WhyCell className={styles["in-demand"]}>
            <WhyInDemand />
          </WhyCell>
          <WhyCell className={styles["up-to-date"]}>
            <WhyUpToDate />
          </WhyCell>
          <WhyCell className={styles.progression}>
            <WhyProgression />
          </WhyCell>
        </div>
      </Container>
    </section>
  );
}
