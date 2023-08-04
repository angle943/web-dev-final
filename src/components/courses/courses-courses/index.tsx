import styles from "./courses-courses.module.scss";
import { CoursesSectionHeader } from "@/components/courses/courses-section-header";
import { CoursesSection } from "@/constants/page-route";
import { courseData } from "@/data/courses";
import { CoursesCard } from "@/components/courses/courses-card";

export function CoursesCourses() {
  return (
    <section className={styles.section}>
      <CoursesSectionHeader
        id={CoursesSection.courses}
        title="Featured Courses"
      />
      <div className={styles.grid}>
        {courseData.map((courseData) => (
          <CoursesCard key={courseData.id} {...courseData} />
        ))}
      </div>
    </section>
  );
}
