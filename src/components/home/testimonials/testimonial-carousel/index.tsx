"use client";
import {
  Testimonial,
  TestimonialProps,
} from "@/components/home/testimonials/testimonial";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import styles from "./testimonial-carousel.module.scss";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useColorContext } from "@/context/color-context";

const picPath = "/home/testimonials/";
const testimonyData: TestimonialProps[] = [
  {
    profileImgSrc: `${picPath}person1.jpg`,
    fullName: "Cassidy Jones",
    jobTitle: "Front End Engineer",
    testimony: [
      "I've tried bootcamps and endless courses on other platforms. They would make me feel good while building the guided projects, but afterwards I never felt that I have become a better developer.",
      "That all changed when I found ACDX. ACDX doesn't try to spoon feed you the materials, but rather challenges you to learn. I finally acquired the skills and now work at the job of my dreams.",
    ],
    companyName: "Amazon",
    companySrc: `${picPath}amazon.png`,
    companySrcWhite: `${picPath}amazon-white.png`,
  },
  {
    profileImgSrc: `${picPath}person2.jpg`,
    fullName: "Trevor Taylor",
    jobTitle: "Software Engineer",
    testimony: [
      "Justin not only really knows his stuff, but he is a great teacher! His courses on algorithms was an aha moment for me, and it helped me get a job at Uber.",
      "If you are tired of taking courses that doesn't get you anywhere, search no longer! ACDX worked for me, and I'm sure it'll work fo you too!",
    ],
    companyName: "Uber",
    companySrc: `${picPath}uber.png`,
    companySrcWhite: `${picPath}uber-white.png`,
  },
  {
    profileImgSrc: `${picPath}person3.jpg`,
    fullName: "Anya Stark",
    jobTitle: "Software Developer",
    testimony: [
      "It was so refreshing to take a course where they teach you actual relevant things! ACDX will actually help you understand how to be a professional developer.",
    ],
    companyName: "Snapchat",
    companySrc: `${picPath}snapchat.png`,
  },
];

export function TestimonialCarousel() {
  const { isLightMode } = useColorContext();
  const [visible, setVisible] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const leftDisabled = visible === 0;
  const rightDisabled = visible === testimonyData.length - 1;

  let elWidth: number;
  const gap = 10 * 16;
  if (window?.innerWidth > 96 * 16) {
    elWidth = (96 - 4) * 16;
  } else if (window?.innerWidth > 80 * 16) {
    elWidth = (80 - 4) * 16;
  } else if (window?.innerWidth > 64 * 16) {
    elWidth = (64 - 4) * 16;
  } else if (window?.innerWidth > 48 * 16) {
    elWidth = (48 - 4) * 16;
  } else {
    elWidth = document?.documentElement.clientWidth - 4 * 16;
  }

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scroll({
        left: (elWidth + gap) * visible,
        behavior: "smooth",
      });
    }
  }, [elWidth, gap, carouselRef, visible]);

  const handleLeftClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (leftDisabled) return;

    setVisible(visible - 1);
  };

  const handleRightClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (rightDisabled) return;

    setVisible(visible + 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.carousel} ref={carouselRef}>
        {testimonyData.map((data) => (
          <Testimonial key={data.fullName} {...data} />
        ))}
      </div>
      <div
        className={clsx(styles.buttons, {
          [styles["buttons--light-mode"]]: isLightMode,
        })}
      >
        <button
          className={clsx(styles.button, {
            [styles["button--light-mode"]]: isLightMode,
          })}
          disabled={leftDisabled}
          onClick={handleLeftClick}
        >
          <HiArrowLeft size="1.5rem" />
        </button>
        <button
          className={clsx(styles.button, {
            [styles["button--light-mode"]]: isLightMode,
          })}
          disabled={rightDisabled}
          onClick={handleRightClick}
        >
          <HiArrowRight size="1.5rem" />
        </button>
      </div>
    </div>
  );
}
