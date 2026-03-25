/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hassan Mohamed",
  title: "Hi all, I'm Hassan",
  subTitle: emoji(
    "Computer and Communication Engineering student with strong foundations in backend development, object-oriented design, and database systems. Experienced in building scalable applications using Spring Boot, ASP.NET Core, and SQL, with a competitive programming background and proven problem-solving abilities. 🚀"
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Hassanmo-20",
  linkedin: "https://www.linkedin.com/in/hassan-m-82638328a/",
  // gitlab: "",
  // facebook: "",
  // medium: "",
  // stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BACKEND DEVELOPER PASSIONATE ABOUT BUILDING SCALABLE AND ROBUST APPLICATIONS",
  skills: [
    emoji(
      "⚡ Build scalable backend services using Spring Boot and ASP.NET Core with RESTful APIs"
    ),
    emoji("⚡ Design and manage relational databases with SQL Server"),
    emoji(
      "⚡ Apply OOP, SOLID principles, and clean architecture to write maintainable code"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: ".NET Core",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Alexandria University",
      logo: require("./assets/images/alexandriaUniLogo.png"),
      subHeader: "Bachelor of Computer and Communication Engineering",
      duration: "October 2023 — August 2028",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "DEPI — Full Stack .NET Developer Track",
      logo: require("./assets/images/depiLogo.png"),
      subHeader: "Ministry of Communications and Information Technology (MCIT)",
      duration: "Nov 2025 — Present",
      desc: "Digital Egypt Pioneers Initiative (DEPI) — Full Stack .NET Developer training program.",
      descBullets: [
        "Training in C#, ASP.NET Core MVC, Web APIs, Entity Framework Core, and SQL Server."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Structures & Algorithms",
      progressPercentage: "80%"
    },
    {
      Stack: "Database Design",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Member",
      company: "IEEE AlexSB",
      companylogo: require("./assets/images/ieee_alexsb_logo.jpg"),
      date: "Oct 2025 — Present",
      desc: "Participated in organizing the 'Protons' event and 'AleXtreme', a problem-solving contest.",
      descBullets: []
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "APPLICATIONS AND SYSTEMS I HAVE BUILT",
  projects: [
    {
      image: require("./assets/images/projectIcon.png"),
      projectName: "Skill Forge Learning Platform",
      projectDesc: "Java desktop Learning Management System using Swing and SOLID principles. Includes role-based dashboards, quiz engine, course management, and JSON persistence.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Abdoalrahmankhedr/skillforge"
        }
      ]
    },
    {
      image: require("./assets/images/projectIcon.png"),
      projectName: "Sudoku Game Application",
      projectDesc: "Java Swing Sudoku game using MVC architecture with puzzle generator, validation engine, and auto-solver.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Abdoalrahmankhedr/sudoku-_game"
        }
      ]
    },
    {
      image: require("./assets/images/projectIcon.png"),
      projectName: "Hotel Management System",
      projectDesc: "C-based hotel management system with authentication, reservations, and file-based persistence.",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Scholarships, Competitive Programming Rankings, and Recognitions",

  achievementsCards: [
    {
      title: "Sawiris Distinction Scholarship (SDS)",
      subtitle:
        "Fully funded scholarship awarded to top 50 students in Egypt.",
      image: require("./assets/images/scholarshipIcon.png"),
      imageAlt: "Sawiris Scholarship Logo",
      footerLink: []
    },
    {
      title: "Precise Energy 2025",
      subtitle:
        "Secured 3rd place out of 200 students in physics competition.",
      image: require("./assets/images/competitionIcon.png"),
      imageAlt: "Competition Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+20 120-727-2582",
  email_address: "hasan.mohamed9183@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
