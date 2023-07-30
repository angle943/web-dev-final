import { PageRouteValues } from "@/constants/page-route";
import styles from "./header-nav-link.module.scss";
import { HeaderLink } from "@/components/header/header-link";
import clsx from "clsx";
import { useColorContext } from "@/context/color-context";

export type HeaderNavLinkProps = {
  label: string;
  href: PageRouteValues;
};

export function HeaderNavLink({ label, href }: HeaderNavLinkProps) {
  const { isLightMode } = useColorContext();
  return (
    <div className={styles.wrapper}>
      <HeaderLink
        className={clsx(styles.link, "text-base", {
          [styles["link--light-mode"]]: isLightMode,
        })}
        href={href}
      >
        {label}
      </HeaderLink>
    </div>
  );
}
