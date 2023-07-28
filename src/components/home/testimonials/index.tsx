import { Container } from "@/components/container";
import styles from "./testimonials.module.scss";
import { UnderlinedText } from "@/components/underlined-text";
import { TestimonialCarousel } from "@/components/home/testimonials/testimonial-carousel";

export function Testimonials() {
  return (
    <section>
      <Container className={styles.container}>
        <h4 className={styles.title}>
          Over <UnderlinedText>10,000 students</UnderlinedText> have flourished
          in their professional lives through the use of ACDX.
        </h4>
        <TestimonialCarousel />
      </Container>
    </section>
  );
}
