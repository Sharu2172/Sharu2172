interface SkillType {
  title: string;
  icon: string;
  link: string;
}

interface SkillCategory {
  category: string;
  skills: SkillType[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      {
        title: "JavaScript",
        icon: "https://s2.svgbox.net/files.svg?ic=js",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        title: "Python",
        icon: "https://s2.svgbox.net/files.svg?ic=python",
        link: "https://www.python.org/",
      },
      {
        title: "C++",
        icon: "https://s2.svgbox.net/files.svg?ic=cpp",
        link: "https://www.w3schools.com/cpp/",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        title: "Node JS",
        icon: "https://s2.svgbox.net/files.svg?ic=node",
        link: "https://nodejs.org/en/",
      },
      {
        title: "FastAPI",
        icon: "",
        link: "https://fastapi.tiangolo.com/",
      },
    ],
  },
  {
    category: "Databases",
    skills: [
      {
        title: "Postgres",
        icon: "https://s2.svgbox.net/files.svg?ic=pgsql",
        link: "https://www.postgresql.org/",
      },
      {
        title: "SQLite",
        icon: "https://s2.svgbox.net/files.svg?ic=sqlite",
        link: "https://www.sqlite.org/index.html",
      },
      {
        title: "MongoDB",
        icon: "https://s2.svgbox.net/files.svg?ic=mongo",
        link: "https://www.mongodb.com/",
      },
      {
        title: "MySQL",
        icon: "https://s2.svgbox.net/files.svg?ic=mysql",
        link: "https://www.mysql.com/",
      },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      {
        title: "Git",
        icon: "https://s2.svgbox.net/files.svg?ic=git",
        link: "https://git-scm.com/",
      },
      {
        title: "Docker",
        icon: "https://s2.svgbox.net/files.svg?ic=docker2",
        link: "https://www.docker.com/",
      },
      {
        title: "PySpark",
        icon: "",
        link: "https://spark.apache.org/docs/latest/api/python/",
      }
    ],
  },
];

// Keep for backwards compatibility
export const skills: SkillType[] = skillCategories.flatMap(cat => cat.skills);
