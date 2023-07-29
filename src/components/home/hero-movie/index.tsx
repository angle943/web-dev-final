import styles from "./hero-movie.module.scss";
import { Container } from "@/components/container";
import { useColorContext } from "@/context/color-context";
import clsx from "clsx";

export function HeroMovie() {
  const { isLightMode } = useColorContext();

  return (
    <div
      className={clsx(styles.background, {
        [styles["background--light-mode"]]: isLightMode,
      })}
    >
      <Container>
        <video
          autoPlay
          loop
          muted
          controls
          className={clsx(styles.video, {
            [styles["video--light-mode"]]: isLightMode,
          })}
        >
          <source src="/home/hero.mp4" type="video/mp4" />
        </video>
      </Container>
    </div>
  );
}
