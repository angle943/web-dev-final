import Image from "next/image";
import styles from "./technology.module.scss";
import { useColorContext } from "@/context/color-context";
import clsx from "clsx";

export type TechnologyProps = {
  imgSrc: string;
  name: string;
};

export function Technology({ imgSrc, name }: TechnologyProps) {
  const { isLightMode } = useColorContext();

  return (
    <figure
      className={clsx(styles.figure, {
        [styles["figure--light-mode"]]: isLightMode,
      })}
    >
      <Image
        className={clsx(styles.image, {
          [styles["image--light-mode"]]: isLightMode,
        })}
        alt={`${name} logo`}
        src={imgSrc}
        width={64}
        height={64}
      />
      <figcaption
        className={clsx(styles.figcaption, {
          [styles["figcaption--light-mode"]]: isLightMode,
        })}
      >
        {name}
      </figcaption>
    </figure>
  );
}
