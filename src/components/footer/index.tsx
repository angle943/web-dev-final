import { Container } from "@/components/container";
import styles from "./footer.module.scss";
import { Logo } from "@/components/logo";
import { FooterLinks } from "@/components/footer/footer-links";
import { PageRoute } from "@/constants/page-route";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import clsx from "clsx";
import { useColorContext } from "@/context/color-context";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const { isLightMode } = useColorContext();

  const hideHr =
    pathname.includes(PageRoute.courses) || pathname.includes(PageRoute.report);

  return (
    <Container className={styles.container}>
      <hr className={clsx(styles.hr, { [styles["hr--hide"]]: hideHr })} />
      <footer className={styles.footer}>
        <div className={styles.main}>
          <Logo />
          <div
            className={clsx(styles.links, {
              [styles["links--light-mode"]]: isLightMode,
            })}
          >
            <FooterLinks
              title="Quicklinks"
              links={[
                { label: "Courses", href: PageRoute.courses },
                { label: "Blog", href: PageRoute.blog },
                { label: "Play", href: PageRoute.play },
                { label: "Join", href: PageRoute.join },
              ]}
            />
            <FooterLinks
              title="Events"
              links={[{ label: "Workshops" }, { label: "Speaking Events" }]}
            />
            <FooterLinks
              title="About Us"
              links={[
                { label: "Our Mission" },
                { label: "Team" },
                { label: "FAQ" },
                { label: "Report", href: PageRoute.report },
              ]}
            />
          </div>
        </div>
        <div className={styles.bottom}>
          <nav
            className={clsx(styles.socials, {
              [styles["socials--light-mode"]]: isLightMode,
            })}
          >
            <a>
              <FaGithub />
            </a>
            <a>
              <FaYoutube />
            </a>
            <a>
              <FaTwitter />
            </a>
            <a>
              <FaTiktok />
            </a>
            <a>
              <FaLinkedin />
            </a>
            <a>
              <FaFacebook />
            </a>
            <a>
              <FaInstagram />
            </a>
          </nav>
          <div className={clsx("text-sm", styles["bottom-right"])}>
            <nav
              className={clsx(styles.legals, {
                [styles["legals--light-mode"]]: isLightMode,
              })}
            >
              <a>Privacy Policy</a>
              <a>Terms & Conditions</a>
            </nav>
            <span
              className={clsx(styles.copyright, {
                [styles["copyright--light-mode"]]: isLightMode,
              })}
            >
              Copyright © 2023, ACDX LLC
            </span>
          </div>
        </div>
      </footer>
    </Container>
  );
}
