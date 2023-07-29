import styles from "./technologies.module.scss";
import { Container } from "@/components/container";
import { Technology } from "@/components/home/technologies/technology";
import { useColorContext } from "@/context/color-context";
import clsx from "clsx";

export function Technologies() {
  const { isLightMode } = useColorContext();

  return (
    <div
      className={clsx(styles.backdrop, {
        [styles["backdrop--light-mode"]]: isLightMode,
      })}
    >
      <Container
        className={clsx(styles.container, {
          [styles["container--light-mode"]]: isLightMode,
        })}
      >
        <div className={styles.track}>
          <Technology name="Javascript" imgSrc="/logos/javascript.png" />
          <Technology name="Typescript" imgSrc="/logos/typescript.png" />
          <Technology name="React" imgSrc="/logos/react.png" />
          <Technology name="NodeJS" imgSrc="/logos/node.png" />
          <Technology name="Python" imgSrc="/logos/python.png" />
          <Technology name="C++" imgSrc="/logos/cpp.png" />
          <Technology name="Java" imgSrc="/logos/java.png" />
          <Technology name="GraphQL" imgSrc="/logos/graphql.png" />
          <Technology name="Rust" imgSrc="/logos/rust.png" />
          <Technology name="Figma" imgSrc="/logos/figma.png" />
          <Technology name="HTML" imgSrc="/logos/html.png" />
          <Technology name="CSS" imgSrc="/logos/css.png" />
          <Technology name="Kotlin" imgSrc="/logos/kotlin.png" />
          <Technology name="Swift" imgSrc="/logos/swift.png" />
          <Technology name="Sass" imgSrc="/logos/sass.png" />
          <Technology name="Tailwind" imgSrc="/logos/tailwind.png" />
          <Technology name="Tensorflow" imgSrc="/logos/tensorflow.png" />
          <Technology name="Webpack" imgSrc="/logos/webpack.png" />
          <Technology name="Javascript" imgSrc="/logos/javascript.png" />
          <Technology name="Typescript" imgSrc="/logos/typescript.png" />
          <Technology name="React" imgSrc="/logos/react.png" />
          <Technology name="NodeJS" imgSrc="/logos/node.png" />
          <Technology name="Python" imgSrc="/logos/python.png" />
          <Technology name="C++" imgSrc="/logos/cpp.png" />
          <Technology name="Java" imgSrc="/logos/java.png" />
          <Technology name="GraphQL" imgSrc="/logos/graphql.png" />
          <Technology name="Rust" imgSrc="/logos/rust.png" />
          <Technology name="Figma" imgSrc="/logos/figma.png" />
          <Technology name="HTML" imgSrc="/logos/html.png" />
          <Technology name="CSS" imgSrc="/logos/css.png" />
          <Technology name="Kotlin" imgSrc="/logos/kotlin.png" />
          <Technology name="Swift" imgSrc="/logos/swift.png" />
          <Technology name="Sass" imgSrc="/logos/sass.png" />
          <Technology name="Tailwind" imgSrc="/logos/tailwind.png" />
          <Technology name="Tensorflow" imgSrc="/logos/tensorflow.png" />
          <Technology name="Webpack" imgSrc="/logos/webpack.png" />
        </div>
      </Container>
    </div>
  );
}
