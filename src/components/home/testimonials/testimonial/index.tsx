import styles from "./testimonial.module.scss";
import { TestimonialMugshot } from "@/components/home/testimonials/testimonial-mugshot";
import Image from "next/image";
import { useColorContext } from "@/context/color-context";
import clsx from "clsx";

export type TestimonialProps = {
  profileImgSrc: string;
  fullName: string;
  jobTitle: string;
  testimony: string[];
  companyName: string;
  companySrc: string;
  companySrcWhite?: string;
};

export function Testimonial({
  profileImgSrc,
  fullName,
  jobTitle,
  testimony,
  companyName,
  companySrc,
  companySrcWhite,
}: TestimonialProps) {
  const { isLightMode } = useColorContext();

  return (
    <div
      className={clsx(styles.card, {
        [styles["card--light-mode"]]: isLightMode,
      })}
    >
      <TestimonialMugshot src={profileImgSrc} alt={`${fullName} picture`} />
      <div className={styles["text-section"]}>
        {testimony.map((text, i) => (
          <p
            key={i}
            className={clsx(styles.testimony, {
              [styles["testimony--light-mode"]]: isLightMode,
            })}
          >
            {i === 0 && "“"}
            {text}
            {i === testimony.length - 1 && "”"}
          </p>
        ))}
        <p className={styles.name}>
          - {fullName}, {jobTitle} at {companyName}
        </p>
        <Image
          className={clsx(styles["company-image"], {
            [styles["company-image--light-mode"]]: isLightMode,
          })}
          src={isLightMode ? companySrcWhite || companySrc : companySrc}
          alt={companyName}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
