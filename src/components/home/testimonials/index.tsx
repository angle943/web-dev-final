import { Container } from "@/components/container";
import styles from "./testimonials.module.scss";
import { UnderlinedText } from "@/components/underlined-text";
import { TestimonialCarousel } from "@/components/home/testimonials/testimonial-carousel";
import { useColorContext } from "@/context/color-context";
import clsx from "clsx";

export function Testimonials() {
  const { isLightMode } = useColorContext();

  return (
    <section>
      <Container
        className={clsx(styles.container, {
          [styles["container--light-mode"]]: isLightMode,
        })}
      >
        <h4 className={styles.title}>
          Over <UnderlinedText>10,000 students</UnderlinedText> have flourished
          in their professional lives through the use of ACDX.
        </h4>
        <TestimonialCarousel />
      </Container>
    </section>
  );
}
