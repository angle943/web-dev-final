export const PageRoute = {
  home: "/",
  courses: "/courses",
  blog: "/blog",
  play: "/play",
  join: "/join",
  report: "/report",
} as const;

export type PageRouteValues = (typeof PageRoute)[keyof typeof PageRoute];

export const CoursesSection = {
  courses: "courses",
  business: "business",
  free: "free",
  books: "books",
} as const;

export type CoursesSectionValues =
  (typeof CoursesSection)[keyof typeof CoursesSection];

export const BlogSection = {
  why: "blog-why",
  java: "blog-java",
  react: "blog-react",
} as const;

export type BlogSectionValues = (typeof BlogSection)[keyof typeof BlogSection];
