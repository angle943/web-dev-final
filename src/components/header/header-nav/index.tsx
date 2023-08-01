import { HeaderNavLink } from "@/components/header/header-nav/header-nav-link";
import { PageRoute } from "@/constants/page-route";
import { BsFillLightbulbFill } from "react-icons/bs";
import styles from "./header-nav.module.scss";
import { useColorContext } from "@/context/color-context";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export type HeaderNavProps = {
  className?: string;
  isMobile?: boolean;
};

export function HeaderNav({ className, isMobile }: HeaderNavProps) {
  const { isLightMode, toggleLightMode } = useColorContext();
  const pathname = usePathname();

  const disableLightBulb = pathname.includes(PageRoute.courses);

  return (
    <nav
      className={clsx(styles.nav, className, {
        [styles["nav--mobile"]]: isMobile,
      })}
    >
      <HeaderNavLink label="Courses" href={PageRoute.courses} />
      <HeaderNavLink label="Blog" href={PageRoute.blog} />
      <HeaderNavLink label="Play" href={PageRoute.play} />
      <HeaderNavLink label="Join" href={PageRoute.join} />
      {!disableLightBulb && (
        <button
          className={clsx(styles.light, {
            [styles["light--light-mode"]]: isLightMode,
          })}
          onClick={toggleLightMode}
        >
          <BsFillLightbulbFill />
        </button>
      )}
    </nav>
  );
}
