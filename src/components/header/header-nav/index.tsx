import { HeaderNavLink } from "@/components/header/header-nav/header-nav-link";
import { PageRoute } from "@/constants/page-route";
import styles from "./header-nav.module.scss";

export function HeaderNav() {
  return (
    <nav className={styles.nav}>
      <HeaderNavLink label="Courses" href={PageRoute.courses} />
      <HeaderNavLink label="Blog" href={PageRoute.blog} />
      <HeaderNavLink label="Play" href={PageRoute.play} />
      <HeaderNavLink label="Join" href={PageRoute.join} />
    </nav>
  );
}
