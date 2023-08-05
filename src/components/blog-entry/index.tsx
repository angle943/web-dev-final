import { ReactNode } from "react";
import styles from "./blog-entry.module.scss";
import { Container } from "@/components/container";
import { JetBrains_Mono } from "next/font/google";
import clsx from "clsx";
import Image from "next/image";
import { useColorContext } from "@/context/color-context";
import { BlogSectionValues } from "@/constants/page-route";

const mono = JetBrains_Mono({ subsets: ["latin"] });

export type BlogEntryProps = {
  id: BlogSectionValues;
  title: string;
  date: Date;
  author: string;
  authorImg: string;
  mainImg: string;
  children: ReactNode;
};
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function BlogEntry({
  id,
  title,
  date,
  author,
  authorImg,
  mainImg,
  children,
}: BlogEntryProps) {
  const { isLightMode } = useColorContext();

  return (
    <Container id={id}>
      <article
        className={clsx(styles.article, {
          [styles["article--light-mode"]]: isLightMode,
        })}
      >
        <time
          className={clsx(styles.date, "text-lg", mono.className, {
            [styles["date--light-mode"]]: isLightMode,
          })}
          dateTime={date.toDateString()}
        >
          {date.getFullYear()} {months[date.getMonth()]} {date.getDay()}
        </time>
        <h2 className={styles.title}>{title}</h2>
        <div
          className={clsx(styles.author, {
            [styles["author--light-mode"]]: isLightMode,
          })}
        >
          <div className={styles["image-wrapper"]}>
            <Image src={authorImg} alt={author} width={200} height={200} />
          </div>
          <p className="text-lg">{author}</p>
        </div>
        <Image
          className={styles["main-image"]}
          src={mainImg}
          alt={title}
          width={92 * 16}
          height={50 * 16}
        />
        <div
          className={clsx(styles["story"], {
            [styles["story--light-mode"]]: isLightMode,
          })}
        >
          {children}
        </div>
      </article>
    </Container>
  );
}
