import Image from "next/image";
import clsx from "clsx";
import styles from "./testimonial-mugshot.module.scss";

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
  return (
    <div className={styles.wrapper}>
      <Image
        className={clsx(styles.image, className)}
        src={src}
        alt={alt}
        width={336}
        height={336}
      />
    </div>
  );
}
