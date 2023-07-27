import styles from "./hero-movie.module.scss";
import { Container } from "@/components/container";

export function HeroMovie() {
  return (
    <div className={styles.background}>
      <Container>
        <video autoPlay loop muted controls className={styles.video}>
          <source src="/home/hero.mp4" type="video/mp4" />
        </video>
      </Container>
    </div>
  );
}
