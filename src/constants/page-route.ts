export const PageRoute = {
  home: "/",
  courses: "/courses",
  blog: "/blog",
  play: "/play",
  join: "/join",
  report: "/report",
} as const;

export type PageRouteValues = (typeof PageRoute)[keyof typeof PageRoute];
