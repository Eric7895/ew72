/*
  All portfolio content is stored here.

  Detail-page fields are optional. ProjectPage will only display
  sections that contain content.
*/
const projects = [
  {
    id: 1,
    title: "Project One",
    slug: "project-one",

    // Short description shown on the homepage card.
    description:
      "A short explanation of the problem, approach, and final result.",

    technologies: ["Python", "Pandas", "Machine Learning"],

    // Replace null with an imported image later.
    image: null,

    overview:
      "Provide a broader explanation of what the project does and why you created it.",

    details: [
      {
        title: "Problem",
        content:
          "Explain the problem or question that motivated the project.",
      },
      {
        title: "Approach",
        content:
          "Explain the main process, model, analysis, or design decisions.",
      },
      {
        title: "Result",
        content:
          "Describe the outcome, findings, performance, or completed product.",
      },
    ],

    githubUrl: "",
    liveUrl: "",
  },

  {
    id: 2,
    title: "Project Two",
    slug: "project-two",

    description:
      "A short explanation of the analysis and the insights discovered.",

    technologies: ["SQL", "Power BI", "Data Analysis"],
    image: null,

    overview:
      "Provide a broader explanation of this project and its purpose.",

    details: [
      {
        title: "Objective",
        content:
          "Explain the main goal of the analysis or application.",
      },
      {
        title: "Process",
        content:
          "Explain how the data was collected, cleaned, analyzed, or presented.",
      },
    ],

    githubUrl: "",
    liveUrl: "",
  },

  {
    id: 3,
    title: "Project Three",
    slug: "project-three",

    description:
      "A short explanation of the application and its primary features.",

    technologies: ["React", "FastAPI", "Python"],
    image: null,

    overview:
      "Provide a broader explanation of this project and how it works.",

    details: [],

    githubUrl: "",
    liveUrl: "",
  },
];

export default projects;