import styles from "./testimonial.module.scss";
import { TestimonialMugshot } from "@/components/home/testimonials/testimonial-mugshot";
import Image from "next/image";

export type TestimonialProps = {
  profileImgSrc: string;
  fullName: string;
  jobTitle: string;
  testimony: string[];
  companyName: string;
  companySrc: string;
};

export function Testimonial({
  profileImgSrc,
  fullName,
  jobTitle,
  testimony,
  companyName,
  companySrc,
}: TestimonialProps) {
  return (
    <div className={styles.card}>
      <TestimonialMugshot src={profileImgSrc} alt={`${fullName} picture`} />
      <div className={styles["text-section"]}>
        {testimony.map((text, i) => (
          <p key={i}>
            {i === 0 && "“"}
            {text}
            {i === testimony.length - 1 && "”"}
          </p>
        ))}
        <p className={styles.name}>
          - {fullName}, {jobTitle} at {companyName}
        </p>
        <Image
          className={styles["company-image"]}
          src={companySrc}
          alt={companyName}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
