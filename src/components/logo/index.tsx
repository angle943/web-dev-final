import { PageRoute } from "@/constants/page-route";
import styles from "./logo.module.scss";
import clsx from "clsx";
import { HeaderLink } from "@/components/header/header-link";
import { useColorContext } from "@/context/color-context";

export function Logo() {
  const { isLightMode } = useColorContext();

  return (
    <HeaderLink
      className={clsx(styles.logo, "fancy-link", {
        [styles["logo--light-mode"]]: isLightMode,
      })}
      href={PageRoute.home}
    >
      <span className={styles["logo-thin"]}>the</span>acdx
    </HeaderLink>
  );
}
