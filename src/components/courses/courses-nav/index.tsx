import styles from "./courses-nav.module.scss";
import { CoursesNavLink } from "@/components/courses/courses-nav/courses-nav-link";
import { CoursesSection } from "@/constants/page-route";

export function CoursesNav() {
  return (
    <nav className={styles.nav}>
      <CoursesNavLink href={`#${CoursesSection.courses}`}>
        Courses
      </CoursesNavLink>
      <CoursesNavLink href={`#${CoursesSection.business}`}>
        Business
      </CoursesNavLink>
      <CoursesNavLink href={`#${CoursesSection.free}`}>Free</CoursesNavLink>
      <CoursesNavLink href={`#${CoursesSection.books}`}>Books</CoursesNavLink>
    </nav>
  );
}
