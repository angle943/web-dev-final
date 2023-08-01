export enum CourseTag {
  htmlcss = "HTML/CSS",
  js = "JavaScript",
  ts = "Typescript",
  node = "Node",
  react = "React",
  algorithms = "Algorithms",
  python = "Python",
  rust = "Rust",
  java = "Java",
  uiux = "UI/UX",
}

export enum CourseDifficulty {
  beginner = "beginner",
  intermediate = "intermediate",
  advanced = "advanced",
}

export type Course = {
  id: string;
  title: string;
  description: string;
  difficulty: CourseDifficulty;
  lengthInMinutes: number;
  img: string;
  tags: CourseTag[];
};

export const courseData: Course[] = [
  {
    id: "intro-html-css",
    title: "Introduction to HTML and CSS",
    description:
      "Learn the fundamentals of developing a modern website using HTML and CSS!",
    difficulty: CourseDifficulty.beginner,
    lengthInMinutes: 732,
    img: "/courses/intro-html-css.jpg",
    tags: [CourseTag.htmlcss, CourseTag.uiux],
  },
  {
    id: "intro-js",
    title: "Introduction to Programming using JavaScript",
    description: "Learn how to program using the Javascript language!",
    difficulty: CourseDifficulty.beginner,
    lengthInMinutes: 864,
    img: "/courses/intro-js.jpg",
    tags: [CourseTag.js],
  },
  {
    id: "intro-python",
    title: "Introduction to Programming using Python",
    description: "Learn how to program using the Python language!",
    difficulty: CourseDifficulty.beginner,
    lengthInMinutes: 729,
    img: "/courses/intro-python.png",
    tags: [CourseTag.python],
  },
  {
    id: "intro-java",
    title: "Introduction to Java",
    description:
      "Learn the industry leading Java programming language from scratch.",
    difficulty: CourseDifficulty.beginner,
    lengthInMinutes: 1235,
    img: "/courses/intro-java.png",
    tags: [CourseTag.java],
  },
  {
    id: "web-dev-bootcamp",
    title: "Web Development Bootcamp using HTML/CSS/JavaScript",
    description:
      "Learn how to build modern, professional websites using HTML, CSS, and JavaScript.",
    difficulty: CourseDifficulty.beginner,
    lengthInMinutes: 1385,
    img: "/courses/web-dev.jpg",
    tags: [CourseTag.htmlcss, CourseTag.js, CourseTag.uiux],
  },
  {
    id: "node-npm",
    title: "Introduction to Node.js and NPM",
    description: "Learn all about node.js and the NPM ecosystem",
    difficulty: CourseDifficulty.beginner,
    lengthInMinutes: 484,
    img: "/courses/node-npm.png",
    tags: [CourseTag.js, CourseTag.node],
  },
  {
    id: "js-complete",
    title: "JavaScript Complete",
    description:
      "Learn all that is to learn about the JavaScript language. From asynchronous programming to scoping and beyond.",
    difficulty: CourseDifficulty.intermediate,
    lengthInMinutes: 1023,
    img: "/courses/js-complete.jpg",
    tags: [CourseTag.js],
  },
  {
    id: "node-api",
    title: "RESTful API Development with Node.js",
    description:
      "Learn how to build RESTful API using Node.js, Prisma, and many more.",
    difficulty: CourseDifficulty.beginner,
    lengthInMinutes: 982,
    img: "/courses/node-api.png",
    tags: [CourseTag.node, CourseTag.js],
  },
  {
    id: "intro-react",
    title: "Introduction to React",
    description: "Learn the fundamentals of React.",
    difficulty: CourseDifficulty.beginner,
    lengthInMinutes: 1409,
    img: "/courses/intro-react.png",
    tags: [CourseTag.react, CourseTag.js],
  },
  {
    id: "typescript-fundamental",
    title: "Typescript Fundamentals",
    description: "Learn the fundamentals of Typescript.",
    difficulty: CourseDifficulty.intermediate,
    lengthInMinutes: 735,
    img: "/courses/typescript-fundamental.png",
    tags: [CourseTag.ts, CourseTag.js],
  },
];
