import { Logo } from "@/components/logo";
import { HeaderNav } from "@/components/header/header-nav";
import styles from "./header.module.scss";
import { useColorContext } from "@/context/color-context";
import clsx from "clsx";

export type HeaderProps = {
  dialogIsOpen: boolean;
  handleOpenDialog(): void;
};

export function Header({ dialogIsOpen, handleOpenDialog }: HeaderProps) {
  const { isLightMode } = useColorContext();

  return (
    <>
      <header
        className={clsx(styles.header, {
          [styles["header--light-mode"]]: isLightMode,
        })}
      >
        <Logo className={styles.logo} />
        <HeaderNav className={styles.headerNav} />
        {/* https://codepen.io/designcouch/pen/ExvwPY */}
        <button
          className={clsx(styles.hamburger, {
            [styles.open]: dialogIsOpen,
            [styles["hamburger--light-mode"]]: isLightMode,
          })}
          onClick={handleOpenDialog}
        >
          <span />
          <span />
          <span />
          <span />
        </button>
      </header>
      <dialog
        className={clsx(styles.dialog, {
          [styles["dialog--active"]]: dialogIsOpen,
          [styles["dialog--light-mode"]]: isLightMode,
        })}
        id="menu-dialog"
      >
        <HeaderNav isMobile />
      </dialog>
    </>
  );
}
