import images from '../project-images/project-images.js'

const projects = [ 
    {
        id: 1,
        projectTitle: "Plan Your Trip - Travel Budgeting App",
        projectTech: "HTML, CSS, JavaScript, Handlebars, and MySQL",
        projectDescription: "A travel budgeting app that allows users to save and update trip budget data. Users can also leave comments on individual city pages, which can be used for providing travel tips. A group project - my contribution included building the SQL database and troubleshooting JavaScript issues.",
        picture: images.planTrip,
        pictureAltText: "Plan Your Trip Budget App",
        githubLink: "https://github.com/darylnauman/cold-travel-planner",
        deployedLink: "https://intense-savannah-61016.herokuapp.com/"
    },
    {   
        id: 2,
        projectTitle: "Progressive Budget App",
        projectTech: "Progressive Web Application and MongoDB",
        projectDescription: "A budgeting app that allows users to enter transactions regardless of if they have access to the internet.",
        picture: images.budgetTracker,
        pictureAltText: "Progressive Budget App",
        githubLink: `https://github.com/gleeson-emily/progressive-budget-app`,
        deployedLink: `https://sleepy-everglades-32339.herokuapp.com/`
    },
    {
        id: 3,
        projectTitle: "Fitness Tracker",
        projectTech: "MongoDB and JavaScript",
        projectDescription: "A fitness tracker that uses a MongoDB database to save information about users' workouts.",
        picture: images.fitnessTracker,
        pictureAltText: "Fitness Tracker",
        githubLink: "https://github.com/gleeson-emily/fitness-tracker",
        deployedLink: " https://pacific-lowlands-33435.herokuapp.com/"
    },
    {
        id: 4,
        projectTitle: "Simple Day Planner",
        projectTech: "HTML, CSS, and jQuery",
        projectDescription: "A simple day planner app that allows users to enter information for each hour of the standard workday. The information is saved to local storage, and can be updated and deleted. Used jQuery to execute the logic and Bootstrap for CSS styling.",
        picture: images.dayPlanner,
        pictureAltText: "Simple Day Planner",
        githubLink: "https://github.com/gleeson-emily/simple-day-planner",
        deployedLink: "https://gleeson-emily.github.io/simple-day-planner/"
    },
    {
        id: 5,
        projectTitle: "Project Mayhem eSports Dashboard",
        projectTech: "HTML, CSS, JavaScript, and Server-Side APIs",
        projectDescription: "An eSports app that uses API calls to fetch information about eSports tournaments and teams. Built using Twitch and PandaScore APIs, and Bulma CSS framework for the styling. A group project - my contribution included pulling data from PandaScore's API and styling using Bulma.",
        picture: images.eSportsDash,
        pictureAltText: "Project Mayhem eSports Dashboard",
        githubLink: "https://github.com/Staycold/EsportsDashboard",
        deployedLink: "https://staycold.github.io/EsportsDashboard/"
    },
    {
    id: 6,
    projectTitle: "Google Book Search App",
    projectTech: "MERN",
    projectDescription: "A code refactoring exercise in which the app's RESTful API was replaced with a GraphQL API built using Apollo Server. Allows users to sign up, search for books using the Google Books API search engine, and save books to their personal account.",
    picture: images.bookSearch,
    pictureAltText: "Google Book Search App",
    githubLink: "https://github.com/gleeson-emily/book-search-app",
    deployedLink: "https://peaceful-stream-07540.herokuapp.com/."
    }
    
]

export default projects;