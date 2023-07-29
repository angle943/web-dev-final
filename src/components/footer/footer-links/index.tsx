import Link from "next/link";
import clsx from "clsx";
import styles from "./footer-links.module.scss";
import { useColorContext } from "@/context/color-context";

export type FooterLink = {
  label: string;
  href?: string;
};

export type FooterLinksProps = {
  title: string;
  links: FooterLink[];
};

export function FooterLinks({ title, links }: FooterLinksProps) {
  const { isLightMode } = useColorContext();

  return (
    <div
      className={clsx(styles.container, {
        [styles["container--light-mode"]]: isLightMode,
      })}
    >
      <h6 className={clsx("text-base", styles.title)}>{title}</h6>
      <nav className={styles.nav}>
        {links.map(({ label, href }) => {
          if (href) {
            return (
              <Link
                className={clsx("text-sm", styles.link, {
                  [styles["link--light-mode"]]: isLightMode,
                })}
                href={href}
                key={label}
              >
                {label}
              </Link>
            );
          }

          return (
            <span
              className={clsx("text-sm", styles.fake, {
                [styles["fake--light-mode"]]: isLightMode,
              })}
              key={label}
            >
              {label}
            </span>
          );
        })}
      </nav>
    </div>
  );
}
