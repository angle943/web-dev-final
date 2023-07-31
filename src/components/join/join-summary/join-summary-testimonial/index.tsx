import styles from "./join-summary-testimonial.module.scss";
import clsx from "clsx";
import Image from "next/image";
import { useColorContext } from "@/context/color-context";

export function JoinSummaryTestimonial() {
  const { isLightMode } = useColorContext();

  return (
    <>
      <p
        className={clsx("text-lg", styles.title, {
          [styles["title--light-mode"]]: isLightMode,
        })}
      >
        What ACDX students are saying...
      </p>
      <section
        className={clsx(styles.card, {
          [styles["card--light-mode"]]: isLightMode,
        })}
      >
        <div className={styles.wrapper}>
          <Image
            className={clsx(styles.image, {
              [styles["image--light-mode"]]: isLightMode,
            })}
            src="/join/person-1.jpg"
            alt="Tony Woods"
            width={336}
            height={336}
          />
        </div>
        <p
          className={clsx("text-sm", styles.testimony, {
            [styles["testimony--light-mode"]]: isLightMode,
          })}
        >
          “I never knew I can land a six figure salary job, but with the
          tremendous help of the ACDX program, I was finally able to land one!
          And I have been killing it at work as well.”
        </p>
        <p
          className={clsx("text-xs", styles.author, {
            [styles["author--light-mode"]]: isLightMode,
          })}
        >
          - Tony Woods
        </p>
      </section>
      <section
        className={clsx(styles.card, {
          [styles["card--light-mode"]]: isLightMode,
        })}
      >
        <div className={styles.wrapper}>
          <Image
            className={clsx(styles.image, {
              [styles["image--light-mode"]]: isLightMode,
            })}
            src="/join/person-2.jpg"
            alt="Jan Levinson"
            width={336}
            height={336}
          />
        </div>
        <p
          className={clsx("text-sm", styles.testimony, {
            [styles["testimony--light-mode"]]: isLightMode,
          })}
        >
          “I always got scared and would freeze up during interviews, but ACDX
          was able to give me the confidence to overcome my fears and finally
          land a dream job in the tech industry.”
        </p>
        <p
          className={clsx("text-xs", styles.author, {
            [styles["author--light-mode"]]: isLightMode,
          })}
        >
          - Jan Levinson
        </p>
      </section>
    </>
  );
}
