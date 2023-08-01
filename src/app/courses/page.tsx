"use client";

import { useEffect } from "react";
import { useColorContext } from "@/context/color-context";
import { CoursesHeader } from "@/components/courses/courses-header";
import styles from "./courses.module.scss";
import { CoursesNav } from "@/components/courses/courses-nav";

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
      <div className={styles.body}>hi</div>
    </main>
  );
}
