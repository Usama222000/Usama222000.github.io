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
  username: "Usama Ahmed",
  title: "Hi all, I'm Usama ",
  subTitle: emoji(
    "I am a passionate and results-oriented Senior DevOps Engineer with a strong foundation in the principles of DevOps, a commitment to continuous improvement, and a dedication to fostering collaboration between development and operations teams.My journey in DevOps has been an exciting evolution. I've always been captivated by the idea of seamlessly merging development and operations to create a more efficient, agile, and collaborative software development lifecycle."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1uAMcmR72eHQ9Qj8MGf9wfMkCNfe0V58c/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Usama222000",
  linkedin: "https://www.linkedin.com/in/usama-ahmed-0ba3461a3/",
  gmail: "usamamukhtar0@gmail.com",
  instagram: "https://www.instagram.com/usamaahmed_2/?next=%2F",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/people/Usama-Ahmed/pfbid02xbdA7KzBTJzQasYGc35gT99zTLmpCe3dABMVhJn9J9BRhcduEB8xRJJvy3SPivPrl/?mibextid=hu50Ix",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DevOps Engineer who automate the stuff..",
  skills: [
    emoji(
      "⚙️ Implementing Infrastructure as Code (IaC) using Terraform for automated provisioning and management of cloud resources"
    ),
    emoji(
      "⚙️ Designing and implementing Continuous Integration and Continuous Deployment (CI/CD) pipelines for efficient software delivery and deployment automation"
    ),
    emoji(
      "⚙️ Orchestrating containerized applications at scale using Kubernetes for efficient deployment, scaling, and management of containerized workloads"
    ),
    emoji(
      "⚙️ Implementing monitoring and logging solutions for cloud-native applications using tools like Prometheus, Grafana, ELK Stack"
    ),
    emoji(
      "⚙️ Automating repetitive tasks and workflows using scripting languages like Bash, Python, or PowerShell"
    ),
    emoji(
      "⚙️ Designing and implementing secure, scalable, and highly available cloud architectures on platforms like AWS, Azure, or Google Cloud Platform (GCP)"
    )

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
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
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fa-solid fa-sitemap"
    },
    {
      skillName: "terraform",
      fontAwesomeClassname: "fa-solid fa-cloud"
    },
    {
      skillName: "cloudformation",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "github actions",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "circle Ci",
      fontAwesomeClassname: "fas fa-circle"
    },
    {
      skillName: "argocd",
      fontAwesomeClassname: "fas fa-rocket"
    },
    {
      skillName: "aws sam",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "aws lambda",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bahria University",
      logo: require("./assets/images/bahrialogo.png"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "September 2018 - July 2022"
    },
    {
      schoolName: "Fauji Foundation College for Boys",
      logo: require("./assets/images/ffcb.png"),
      subHeader: "HSSC in ICS",
      duration: "September 2016 - April 2018"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "CI/CD", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Containerization",
      progressPercentage: "80%"
    },
    {
      Stack: "IAC",
      progressPercentage: "100%"
    },
    {
      Stack: "AWS",
      progressPercentage: "90%"
    },
    {
      Stack: "Container Orchestation",
      progressPercentage: "90%"
    },
    {
      Stack: "Security",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Devop Engineer",
      company: "Contour Softwares",
      companylogo: require("./assets/images/contoursoftware_logo.jpg"),
      date: "Jan 2025 – Present",
      descBullets: [
          "Attend Meetings with Offshore Clients: Collaborate with international clients to gather requirements, provide updates, and discuss project progress.",
          "Handle Deployments: Manage and oversee the deployment of applications and infrastructure, ensuring smooth and timely execution.",
          "Design Infrastructure: Architect and design scalable, secure, and cost-efficient cloud and on-premise infrastructures.",
          "Design Deployment Processes: Develop and optimize deployment processes to ensure automation, consistency, and reliability.",
          "Collaboration with Cross-functional Teams: Work closely with development, operations, and support teams to ensure seamless integration and deployment.",
          "Monitor and Troubleshoot: Keep track of deployed systems and applications to quickly identify and resolve any issues or performance bottlenecks.",
          "Cost Optimization: Focus on reducing costs while maintaining performance and reliability of deployed systems."
      ]
    },
    {
      role: "Senior Devop Engineer",
      company: "Vizz Web solutions",
      companylogo: require("./assets/images/vizz.png"),
      date: "Dec 2023 – Dec 2024",
      descBullets: [
        "Maintaining production grade servers on contabo provider.",
        "Collaborating with developers to troubleshoot real-time issues.",
        "Maintaining monitoring production grade EC2 servers on AWS.",
        "Creating solutions to optimize infrastructure cost.",
        "Creating CI/CD pipelines for automatic deployment of multiple applications.",
        "Dockerizing the application code and deploying those applications on container orchestration tools such as ECS and EKS.",
        "Deploying the complex infrastructure through Terraform, making the code dynamic enough so that it can be used for different use cases.",
        "Attending meetings with the clients, and providing them with the solutions for their problem statement."
      ]
    },
    {
      role: "Devops Engineer",
      company: "Eurus Technolgies",
      companylogo: require("./assets/images/eurus.png"),
      date: "Sept 2022 – Dec 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Use of Groovy (Declarative and Scripted methods) with Jenkins and Github Actions",
        "for extensive CI/CD pipeline architecture and implementation for client apps",
        "Provisioning and control of infrastructure using AWS cloud formation (such as simple, nested, and cross stacks), as well as bespoke Terraform modules",
        "Elastic Container Service (ECS) on AWS has been Dockerized and used to deploy micro services",
        "Elastic Kubernetes Service (EKS) on AWS for the deployment of microservices",
        "Helm chart design for EKS-based apps",
        "Identity Access Management (IAM) for users and services on AWS",
        "Working with AWS services like EC2, EBS, RDS, Secrets Manager, Parameter Store",
        "Load Balancers (ALB,NLB), ECS, CloudFront, VPC, Route53, S3, KMS, IAM, lambda,etc"
      ]
    },
    {
      role: "Junior Devops Engineer",
      company: "Terabit IT",
      companylogo: require("./assets/images/terabit.png"),
      date: "Nov 2020 – AUG 2022",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Assisted in the development and maintenance of CI/CD pipelines to automate the software delivery process,",  
        "Collaborated with development and operations teams to enhance system reliability and efficiency,",  
        "Supported the deployment and management of applications on cloud platforms, such as AWS and Azure,",  
        "Participated in infrastructure provisioning and management using Infrastructure as Code (IaC) tools like Terraform and CloudFormation,",  
        "Monitored system performance and troubleshot issues to ensure optimal operations,",  
        "Helped with configuration management and version control using tools like Git,",  
        "Contributed to documentation and knowledge sharing to promote best practices within the team,",  
        "Learned and implemented security best practices in all aspects of system and application management,",  
        "Stayed updated with the latest DevOps tools and technologies, contributing ideas for continuous improvement."  

      ]
    }


 
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
  title: "Projects",
  subtitle: "SOME OF MY PROJECTS",
  projects: [
    {
      image: require("./assets/images/elmonx.png"),
      projectName: "Elmonx",
      projectDesc: "Created infrastructure for this application , created CI/CD for automatic deployments on the server for dev and prod stage ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://elmonx.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/digiebot.png"),
      projectName: "Digiebot",
      projectDesc: "Created optimized infrastructure for this application to reduce the cloud cost , enable proper security practices in infrastructure , created CI/CD for automatic deployments on the server for dev and prod stage",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://trading.digiebot.com/login?returnUrl=/"
        }
      ]
    },
    {
      image: require("./assets/images/terraform.png"),
      projectName: "Handling Bounced Email in AWS Simple Emailing Service",
      projectDesc: "Created Infrastructure via Terraform to handle the bounced emails when the ratio exceeds 5% . Used AWS microservices like SNS (Simple notification service) , AWS Lambda function to notify the user on slack by sending the bounced email's id and also store the ID's & email in the DynamoDB",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Usama222000/SES-bounce-email-handling-via-terraform.git"
        }
      ]
    },
    {
      image: require("./assets/images/terraform.png"),
      projectName: "Atlantis Terraform Deployment on AWS ECS",
      projectDesc: "Atlantis is a terraform pull request automation tool , So Deployed the Atlantis server on AWS Elastic Container Service via terraform , using Compliance based terraform modules and few custom modules . Creating Application load balancer and attaching it to the Atlantis server , Creating sub domain in Route53 and routing it to the Atlantis server via ALB",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Usama222000/Atantis-server-on-ECS-via-terraform.git"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
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
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
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
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3355216328",
  email_address: "usamamukhtar0@gmail.com",
  display: true
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
  isHireable
};
