"use client";

import { useEffect } from "react";
import { useColorContext } from "@/context/color-context";
import { CoursesHeader } from "@/components/courses/courses-header";
import styles from "./courses.module.scss";
import { CoursesNav } from "@/components/courses/courses-nav";
import { CoursesCta } from "@/components/courses/courses-cta";
import { CoursesCourses } from "@/components/courses/courses-courses";
import { CoursesBusiness } from "@/components/courses/courses-business";
import { CoursesFree } from "@/components/courses/courses-free";
import { CoursesBooks } from "@/components/courses/courses-books";

export default function Courses() {
  const { isLightMode, toggleLightMode } = useColorContext();
  useEffect(() => {
    if (isLightMode) {
      toggleLightMode();
    }
  }, [isLightMode, toggleLightMode]);

  return (
    <main>
      <CoursesHeader />
      <CoursesNav />
      <div className={styles.body}>
        <CoursesCta />
        <CoursesCourses />
        <CoursesBusiness />
        <CoursesFree />
        <CoursesBooks />
      </div>
    </main>
  );
}
