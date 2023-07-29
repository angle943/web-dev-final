import { Logo } from "@/components/logo";
import { HeaderNav } from "@/components/header/header-nav";
import styles from "./header.module.scss";
import { useColorContext } from "@/context/color-context";
import clsx from "clsx";

export function Header() {
  const { isLightMode } = useColorContext();

  return (
    <header
      className={clsx(styles.header, {
        [styles["header--light-mode"]]: isLightMode,
      })}
    >
      <Logo />
      <HeaderNav />
    </header>
  );
}
