import Image from "next/image";
import clsx from "clsx";
import styles from "./testimonial-mugshot.module.scss";
import { useColorContext } from "@/context/color-context";

export type TestimonialMugshotProps = {
  alt: string;
  className?: string;
  src: string;
};

export function TestimonialMugshot({
  alt,
  className,
  src,
}: TestimonialMugshotProps) {
  const { isLightMode } = useColorContext();

  return (
    <div className={styles.wrapper}>
      <Image
        className={clsx(styles.image, className, {
          [styles["image--light-mode"]]: isLightMode,
        })}
        src={src}
        alt={alt}
        width={336}
        height={336}
      />
    </div>
  );
}
