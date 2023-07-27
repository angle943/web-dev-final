import Image from "next/image";
import styles from "./technology.module.scss";

export type TechnologyProps = {
  imgSrc: string;
  name: string;
};

export function Technology({ imgSrc, name }: TechnologyProps) {
  return (
    <figure className={styles.figure}>
      <Image
        className={styles.image}
        alt={`${name} logo`}
        src={imgSrc}
        width={64}
        height={64}
      />
      <figcaption className={styles.figcaption}>{name}</figcaption>
    </figure>
  );
}
