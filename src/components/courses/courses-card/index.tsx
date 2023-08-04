import styles from "./courses-card.module.scss";
import { Course } from "@/data/courses";
import Image from "next/image";
import clsx from "clsx";
import { ButtonMain } from "@/components/buttons/button-main";
import { PageRoute } from "@/constants/page-route";

export function CoursesCard({
  title,
  description,
  difficulty,
  lengthInMinutes,
  img,
}: Course) {
  const renderLength = () => {
    const hours = Math.floor(lengthInMinutes / 60);
    const minutes = lengthInMinutes % 60;

    if (hours > 0) {
      return `${hours} hours, ${minutes} minutes`;
    }
    return `${minutes} minutes`;
  };

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={img} alt="Course Image" width={384} height={384} />
      </div>
      <div className={styles.white}>
        <h6 className={clsx(styles.title, "text-2xl")}>{title}</h6>
        <p className={clsx(styles.description, "text-base")}>{description}</p>
        <p className={clsx(styles.length)}>
          <strong>Length:</strong> {renderLength()}
        </p>
        <p className={clsx(styles.difficulty)}>
          <strong>Difficulty:</strong> {difficulty}
        </p>
        <ButtonMain
          className={styles.button}
          variant="primary"
          href={PageRoute.join}
        >
          Sign up
        </ButtonMain>
      </div>
    </div>
  );
}
