import { Container } from "@/components/container";
import styles from "./why.module.scss";
import { WhyCell } from "@/components/home/why/why-cell";
import { WhyExperts } from "@/components/home/why/why-experts";
import { WhyHours } from "@/components/home/why/why-hours";
import { WhyInDemand } from "@/components/home/why/why-in-demand";
import { WhyUpToDate } from "@/components/home/why/why-up-to-date";
import { WhyProgression } from "@/components/home/why/why-progression";
import { useColorContext } from "@/context/color-context";
import clsx from "clsx";

export function Why() {
  const { isLightMode } = useColorContext();

  return (
    <section
      className={clsx(styles.wrapper, {
        [styles["wrapper--light-mode"]]: isLightMode,
      })}
    >
      <Container>
        <h2
          className={clsx(styles.title, {
            [styles["title--light-mode"]]: isLightMode,
          })}
        >
          Why ACDX?
        </h2>
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
