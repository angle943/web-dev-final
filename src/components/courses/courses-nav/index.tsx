import styles from "./courses-nav.module.scss";
import { CoursesNavLink } from "@/components/courses/courses-nav/courses-nav-link";
import { CoursesSection, PageRoute } from "@/constants/page-route";

export function CoursesNav() {
  return (
    <nav className={styles.nav}>
      <CoursesNavLink href={`${PageRoute.courses}#${CoursesSection.courses}`}>
        Courses
      </CoursesNavLink>
      <CoursesNavLink href={`${PageRoute.courses}#${CoursesSection.business}`}>
        Business
      </CoursesNavLink>
      <CoursesNavLink href={`${PageRoute.courses}#${CoursesSection.free}`}>
        Free Content
      </CoursesNavLink>
      <CoursesNavLink href={`${PageRoute.courses}#${CoursesSection.books}`}>
        Books
      </CoursesNavLink>
    </nav>
  );
}
