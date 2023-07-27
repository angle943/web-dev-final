import { PageRouteValues } from "@/constants/page-route";
import styles from "./header-nav-link.module.scss";
import { HeaderLink } from "@/components/header/header-link";

export type HeaderNavLinkProps = {
  label: string;
  href: PageRouteValues;
};

export function HeaderNavLink({ label, href }: HeaderNavLinkProps) {
  return (
    <div className={styles.wrapper}>
      <HeaderLink className={styles.link} href={href}>
        {label}
      </HeaderLink>
    </div>
  );
}
