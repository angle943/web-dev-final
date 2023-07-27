import { PageRoute } from "@/constants/page-route";
import styles from "./logo.module.scss";
import clsx from "clsx";
import { HeaderLink } from "@/components/header/header-link";

export function Logo() {
  return (
    <HeaderLink
      className={clsx(styles.logo, "fancy-link")}
      href={PageRoute.home}
    >
      <span className={styles["logo-thin"]}>the</span>acdx
    </HeaderLink>
  );
}
