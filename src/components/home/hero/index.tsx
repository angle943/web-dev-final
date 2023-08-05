import { Container } from "@/components/container";
import styles from "./hero.module.scss";
import { useCounter } from "usehooks-ts";
import { useEffect } from "react";
import clsx from "clsx";
import { ButtonMain } from "@/components/buttons/button-main";
import { BlogSection, PageRoute } from "@/constants/page-route";
import { HeroTitle } from "@/components/home/hero/hero-title";

export function Hero() {
  const { count: cursorCount, increment: incrementCursorCount } = useCounter(0);
  const { count: typeCount, increment: incrementTypeCount } = useCounter(0);

  useEffect(() => {
    const cursorInterval = setInterval(incrementCursorCount, 350);

    const typeInterval = setInterval(incrementTypeCount, 50);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(typeInterval);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showAll = typeCount >= 60;

  return (
    <Container className={styles.container}>
      <div className={styles.wrapper}>
        <HeroTitle
          cursorCount={cursorCount}
          typeCount={typeCount}
          showAll={showAll}
        />
        <nav
          className={clsx(styles.buttons, styles["initially-hidden"], {
            [styles.visible]: showAll,
          })}
        >
          <ButtonMain variant="primary" href={PageRoute.courses}>
            Courses
          </ButtonMain>
          <ButtonMain
            variant="secondary"
            href={`${PageRoute.blog}#${BlogSection.why}`}
          >
            Why acdx?
          </ButtonMain>
        </nav>
      </div>
    </Container>
  );
}
