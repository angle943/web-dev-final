import styles from "./cta-card.module.scss";
import clsx from "clsx";
import { ButtonMain } from "@/components/buttons/button-main";
import { useColorContext } from "@/context/color-context";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { PageRoute } from "@/constants/page-route";

export type CtaCardProps = {
  description: string;
  title: string;
  price: number;
  priceRate: string;
  tag?: ReactNode;
  isYearly: boolean;
  isIndividual: boolean;
};

export function CtaCard({
  description,
  price,
  priceRate,
  title,
  tag,
  isYearly,
  isIndividual,
}: CtaCardProps) {
  const { isLightMode } = useColorContext();
  const router = useRouter();

  return (
    <div
      className={clsx(styles.card, {
        [styles["card--light-mode"]]: isLightMode,
      })}
    >
      <h5 className={styles.title}>{title}</h5>
      <p className={clsx(styles.description, "text-lg")}>{description}</p>
      <div className={styles["pricing-section"]}>
        <h5 className={styles.price}>${price}</h5>
        <span className="text-base">{priceRate}</span>
      </div>
      <ButtonMain
        variant="primary"
        onClick={() => {
          router.push(
            `${PageRoute.join}?plan=${isYearly ? "yearly" : "monthly"}&seats=${
              isIndividual ? "individual" : "team"
            }`,
          );
        }}
      >
        Sign up now
      </ButtonMain>
      <ul
        className={clsx(styles.list, {
          [styles["list--light-mode"]]: isLightMode,
        })}
      >
        <li>50+ courses</li>
        <li>Learning paths for all skill levels</li>
        <li>10000+ students</li>
        <li>Mobile app integration</li>
        <li>Community support access</li>
        <li>Private online community</li>
        <li>Early access to new workshops & events</li>
      </ul>
      {tag}
    </div>
  );
}
