/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 800 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ajitesh Nair",
  title: "Hi all, I'm Ajitesh",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 experienced in building large-scale applications using Python, Go, C, C++, and more."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1s27GKMkCQtfDEVb3cF7qfxJDwML_MMNi/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Ajitesh27",
  linkedin: "https://www.linkedin.com/in/AjiteshNair/",
  gmail: "ajiteshnair@gmail.com",
  instagram: "https://www.instagram.com/_ajitesh27/",
  // Add acm and illinois email
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "and many more...",
    emoji(
      "⚡ Passionate about creating scalable and efficient cloud-based distributed systems."
    ),
    emoji("⚡ Proficient in building robust and efficient APIs for seamless service integration and communication."),
    emoji(
      "⚡ Skilled with Docker and Kubernetes for containerization and orchestration, developing, and monitoring large-scale applications."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "c",
      fontAwesomeClassname: "fab fa-c"
    },
    {
      skillName: "go",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "html",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "linode",
      fontAwesomeClassname: "fab fa-linode"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Illinois Urbana-Champaign",
      logo: require("./assets/images/uiucLogo.jpg"),
      subHeader: "Masters in Computer Science                                                                                             GPA :   3.94 / 4.0",
      duration: "January 2024 - May 2025",
      descBullets: [
        "Member of the Association for Computing Machinery (ACM)",
        "Top 5 - Code in the Dark, Hack Illinois 2024",
        "CS Grad Teaching Assistant for 'Topics in Software Engineering' and 'Software Engineering I' with Dr.Darko Marinov"
      ],
      courses: [
         "Distributed Systems", "Computer Security", "Data Management", "Database Systems", "Advanced topics in Software Engineering", "Data Mining", "Threat Detection",  "Artificial Intelligence"
      ]
    },
    {
      schoolName: "PES University",
      logo: require("./assets/images/pesuLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering                             GPA :   8.86 / 10.0",
      duration: "August 2018 - May 2022",
      descBullets: [
        "Specialization in Machine Intelligence and Data Science",
        "Minors in Electronics and Communication Engineering",
        "Received scholarships 7 times in 8 semesters for being in the top 20% of the university"
      ],
      courses: [
        "Python",
        "C",
        "Design and Analysis of Algorithms",
        "Data Structures",
        "Cloud Computing",
        "Big Data",
        "Operating Systems",
        "Computer Networks",
        "Object Oriented Programming",
        "Machine Learning",
        "Data Analytics",
        "Natural Language Processing",
        "Database Management Systems",
      ]
    }
  ]
};
// TODO: All courses not scrolling
// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Akamai Technologies",
      companylogo: require("./assets/images/akamaiLogo.png"),
      date: "                                    Summer Intern                       May 2024 - Aug 2024 ( 3 Months )                               California, US\n                                 Software Engineer                     July 2022 - Dec 2023 ( 1.5 Years )                                 Bangalore, IN\n                      Software Engineering Intern            Jan 2022 - June 2022 ( 6 Months )                              Bangalore, IN",
      descBullets: [
       "Developed a new version of a product ( Kafka -> S3 ) that reduced memory usage by 50% and increased throughput by 12 times.",
       "Developed various tools and APIs to create and manage AWS / Linode Instances / Volumes / Disks, handle customer migrations, CRUD operations on Cassandra, automatically create Athena Partitions, manage customer events, etc.",
       "Created a Golang library to interact with SaltStack to manage clusters remotely enabling Linode to emulate AWS Opsworks.",
        "Dockerized several projects and migrated them to Kubernetes by creating helm charts and designing Jenkins pipelines to build and deploy images.",
        "Optimized memory consumption and enhanced Trino query performance by redesigning system architecture.",
        "Leveraged knowledge in Go, Python, REST APIs, Kubernetes, Big Data, Jenkins, Salt, Kafka, Consul, etc."
      ]
    },
    {
      role: "Software Development Intern",
      company: "Autodesk",
      companylogo: require("./assets/images/autodeskLogo.png"),
      date: "                           July 2021 - Dec 2021 ( 6 Months )                                                                      Bangalore, IN",
      descBullets: [
        "Worked on the development of a new “Read-Only for Me” feature for the flagship Fusion 360 product.",
        "Created automations to monitor regressions and fixed them, Upgraded UI elements, and optimized several workflows.",
        "Leveraged knowledge in C++, Git, OOPS, Data Models, Agile Development, Jira, CAD, Testing, etc."
      ]},
    {
      role: "Product Development Intern",
      company: "nSmiles",
      companylogo: require("./assets/images/nsmilesLogo.png"),
      date: "                           Jan 2021 - Jun 2021 ( 6 Months )                                                                      Bangalore, IN",
      descBullets: [
        'Leader of the "AI-based Career Counseling with Chatbots” project.',
        "Designed and created a chatbot. Incorporated features like Real-time score updation, Automatic Email generation, etc.",
        "Leveraged knowledge in RASA, Python, REST API, Machine Learning, HTML, CSS, Javascript, etc."
      ]},
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Data @ ANZ Virtual Internship",
      subtitle:
        "Worked on Exploratory Data Analysis and Predictive Analytics.",
      image: require("./assets/images/anz.jpeg"),
      imageAlt: "ANZ Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1iV5Q1ODKNF_F1sbK3OSQLk3ACjHASmUh/view?usp=sharing"
        }
      ]
    },
    {
      title: "Google Cloud Ready Facilitator Program",
      subtitle:
        "Completed 24 quests and earned 12 skill badges related to cloud infrastructure, cloud-native application development, big data, and machine learning. ",
      image: require("./assets/images/googleCloud.png"),
      imageAlt: "Google Cloud Logo",
      footerLink: [
        {
          name: "View Google Cloud Badges",
          url: "https://www.cloudskillsboost.google/public_profiles/1732a518-e3e6-4853-b802-62cdcc0078bf"
        }
      ]
    },

    {
      title: "Data Analytics Consulting Virtual Internship",
      subtitle: "Worked on Data Quality Assessment, Data Insights, and Data Presentation.",
      image: require("./assets/images/kpmg.jpeg"),
      imageAlt: "KPMG Logo",
      footerLink: [
        {name: "View Certificate", url: "https://drive.google.com/file/d/1GmRLziMXIcWGhYyDzDlV3Jgqentsu0wg/view?usp=sharing"},
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description:
        ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: ""
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

// npm run deploy