import { Logo } from "@/components/header/logo";
import { HeaderNav } from "@/components/header/header-nav";
import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <HeaderNav />
    </header>
  );
}
