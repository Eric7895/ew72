/*
  All portfolio content is stored here.

  Detail-page fields are optional. ProjectPage will only display
  sections that contain content.
*/

/* Import TravelSquirrel images */
import cityPage from "../assets/projects/travel_squirrel/city_page_in_detail.png";
import searchResult from "../assets/projects/travel_squirrel/search_result.png";
import homePage from "../assets/projects/travel_squirrel/home_page.png";
import dashboard from "../assets/projects/travel_squirrel/dashboard.png";

const projects = [
  {
    id: 1,
    title: "TravelSquirrel",
    slug: "travel-squirrel",

    // Short description shown on the homepage card.
    description:
      "A travel exploration application built by a four-person team to help users discover destinations using historical weather, flight reliability, cost-of-living, and city data.",

    technologies: ["React", "Node.js", "PostgreSQL", "Python", "AWS RDS", "Tableau", "Scikit-learn"],

    // main screenshot
    image: homePage,

    // Additional screenshots displayed on the project-detail page.
    screenshots: [
      {
        id: "explore-destinations",
        image: searchResult,
        title: "Explore Destinations",
        alt: "TravelSquirrel destination search page with travel filters and ranked city results",
        caption:
          "Users can filter and rank destinations by travel month, region, temperature, precipitation, cost of living, and comfort score.",
      },
      {
        id: "city-details",
        image: cityPage,
        title: "City Detail Page",
        alt: "TravelSquirrel city detail page showing location information and monthly weather statistics",
        caption:
          "Each destination includes city-level information and monthly statistics for temperature, precipitation, snowfall, and comfort score.",
      },
      {
        id: "tableau-dashboard",
        image: dashboard,
        title: "Tableau Dashboard",
        alt: "An interactive dashboard exploring regional weather trends",
        caption:
          "Allows users to explore total precipitation and snowfall by city and month, view monthly temperature trends, and compare the selected city with the hottest and coldest cities in the same country for the chosen month.",
      },
    ],

    overview:
      "TravelSquirrel is a deployed travel exploration web application built by a four-person team. It helps users evaluate destinations based on weather conditions, flight reliability, cost of living, and city characteristics. Users can filter destinations by travel month, region, temperature, precipitation, and other preferences, then examine detailed year-round statistics for individual cities.\n \n I owned the Explore Destinations feature and Tableau dashboard. I also built a Python data pipeline using BallTree nearest-neighbor search and Haversine distance to associate weather stations with cities, and optimized the feature’s PostgreSQL queries using materialized views, indexes, projection and filter pushdown, and query rewrites.",

    details: [
      {
        title: "My Contribution",
        content:
          "I was primarily responsible for the Explore Destinations workflow, which allows users to search and rank cities using filters such as month, region, temperature, precipitation, and cost of living. I also developed the Tableau dashboard used to explore regional weather trends.",
      },
      {
        title: "Data Engineering",
        content:
          "To connect global weather data with city records, I developed a Python pipeline using scikit-learn’s BallTree and the Haversine distance formula. The process assigned weather stations to nearby cities and supported the creation of monthly weather summaries used throughout the application. (Results included mapping between 33,000 cities and approximately 2.56 million weather records)",
      },
      {
        title: "Database Performance",
        content:
          "The initial Explore Destinations query required several joins and filtering stages across weather, city, flight, airport, and cost-of-living data. I improved its performance through query rewrites, materialized views, and targeted indexing. Application response time decreased from approximately 4.5 seconds to under 200 milliseconds, while worst-case raw query testing improved from roughly 26 seconds to about 13 milliseconds.",
      },
    ],

    githubUrl: "",
    liveUrl: "https://www.travelsquirrels.com/",
  },
];

export default projects;