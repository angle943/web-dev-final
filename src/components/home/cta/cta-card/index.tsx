import styles from "./cta-card.module.scss";
import clsx from "clsx";
import { ButtonMain } from "@/components/buttons/button-main";

export type CtaCardProps = {
  description: string;
  title: string;
  price: number;
  priceRate: string;
};

export function CtaCard({
  description,
  price,
  priceRate,
  title,
}: CtaCardProps) {
  return (
    <div className={styles.card}>
      <h5 className={styles.title}>{title}</h5>
      <p className={clsx(styles.description, "text-lg")}>{description}</p>
      <div className={styles["pricing-section"]}>
        <h5 className={styles.price}>${price}</h5>
        <span className="text-base">{priceRate}</span>
      </div>
      <ButtonMain variant="primary" onClick={() => {}}>
        Sign up now
      </ButtonMain>
      <ul className={styles.list}>
        <li>50+ courses</li>
        <li>Learning paths for all skill levels</li>
        <li>10000+ students</li>
        <li>Mobile app integration</li>
        <li>Community support access</li>
        <li>Private online community</li>
        <li>Early access to new workshops & events</li>
      </ul>
    </div>
  );
}
