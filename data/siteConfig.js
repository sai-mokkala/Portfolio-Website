module.exports = {
  siteTitle: 'Hi! I\'m Sai!',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Sai',
  twitterUsername: '_franciscodf',
  githubUsername: 'Saikumarmokkala',
  authorAvatar: '/images/ava1.jpg',
  authorDescription: `
    I'm passionate about building softwares.
    Experienced in building, maintenance of web & mobile, cloud applications. Implemented CI/CD pipelines for cloud and local machines. Used Docker, Kubernetes, GIT and Jenkins in automation, orchestration of applications. 

  
  `,

  authorskills: `
  <b>Programming Skills</b>: Java, C, Python, C#, C++, SQL, R, Pig, Hive <br />
    <b>Web Development</b>: PHP, HTML, CSS, JavaScript, ReactJS, MongoDB, JSON, Bootstrap, Node.js, WordPress, Laravel <br />
    <b>Software Skills and Framework </b>: Windows, Linux, Eclipse, Android Studio, Spring Boot, React Native, Hadoop Map-Reduce, Scala, Kafka, Sqoop <br/>
    <b> Development Methodologies</b>: Agile/Scrum, Waterfall  </br>
    <b>Software Testing</b>: JUnit, JaCoCo, PITMutation, Jenkins, Selenium Automation </br>
    <b> Tools: </b> Google Cloud Platform, Kubernetes, CI/CD pipelines, JIRA, Vscode, AWS, Docker, Terraform, GIT
  
`,
  skills: [
    {
      name: 'HTML',
      
    },
    {
      name: 'CSS',
      level: 60
    },
    {
      name: 'Javascript',
      level: 50
    },
    {
      name: 'NodeJs',
      level: 40
    },
    {
      name: 'React',
      level: 60
    },
    {
      name: 'Git',
      level: 70
    },
    {
      name: 'NodeJs',
      level: 40
    },
    {
      name: 'React',
      level: 60
    },
    {
      name: 'Git',
      level: 70
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Office of Information Technology - University of Texas, Arlington",
      begin: {
        month: 'May',
        year: '2019'
      },
      duration: '2 yr- till May 2021',
      occupation: "Full Stack Developer",
      description: " Responsible for adding new features to enhance user experience using ReactJS in front-end and Node.js for back-end, developed REST API services for UTA employees. Implemented orchestration with Kubernetes, CI/CD pipelines for applications using Gitlab."
    },
      {
      company: "Nexgenux technologies",
      begin: {
        month: 'Jan',
        year: '2018'
      },
      duration: '1 yr- till Dec 2018',
      occupation: "Software Developer",
      description: " Performed algorithmic development in Java with modules in Spring MVC architecture and interaction with Hibernate for database mapping, integrated Kafka for data ingestion and acceleration of extracting data, tested in Junit, PIT Mutation and Selenium. Designed and implemented the REST API services for back-end, used Maven for project management. Used GIT for source code version control and integrated with Jenkins for CI/CD pipelines. Created docker images and orchestrated with kubernetes. Implemented cloud storage backup environment using AWS storage services."
    }, {
      company: "Johnson Controls",
      begin: {
        month: 'May',
        year: '2017'
      },
      duration: '3 months - till Jul 2017',
      occupation: "Software Engineer Intern",
      description: " Worked on code optimization and maintenance of dynamic website using ReactJS in front-end and Firebase in back-end. Implemented Bug fixation and decreased code redundancy by 5%."
    
     
  
    },
    {
      company: "IIM Lucknow",
      begin: {
        month: 'Dec',
        year: '2016'
      },
      duration: '2 months - till Jan 2017',
      occupation: "Research Intern",
      description: "Conducted statistical research on complex data solutions using R Studio."
  
    },
  
   
    {
      company: "Amaron Batteries",
      begin: {
        month: 'May',
        year: '2015'
      },
      duration: '3 months - till Jul 2015',
      occupation: "Software Engineer Intern",
      description: " Implemented Android application using Java that delivers batteries to clients across cities with multiple options including priority delivery, repair maintenance and chat service system for customers."
  
    },
  ],
  portfolio: [
    {
      image: "/images/jenk3.jpg",
      description: "Database to AWS S3 Automation",
      url: "https://github.com/Saikumarmokkala/Database-backup-to-AWS-S3"
      
    },
    {
      image: "/images/net4.jpg",
      description: "Netflix Clone (Full stack)",
      url: "https://github.com/Saikumarmokkala/Netflix-Clone"
      
    },
    {
      image: "/images/dist1.jpg",
      description: "Distributed System Projects",
      url: "https://github.com/Saikumarmokkala/Distributed-System-Projects"
      
    },
    {
      image: "/images/qui2.jpg",
      description: "Online Quiz (AWS) ",
      url: "https://github.com/Saikumarmokkala/Online-Quiz"
      
    },
    {
      image: "/images/ecom1.jpg",
      description: "Ecommerce Price tracker",
      url: "https://github.com/Saikumarmokkala/ecomm-pricetracker"
      
    },
    {
      image: "/images/kube1.jpg",
      description: "Kubernetes Minikube Cluster",
      url: "https://github.com/Saikumarmokkala/Kubernetes-minikube-cluster"
      
    },
    {
      image: "/images/rout1.jpg",
      description: "Shortest route between Cities",
      url: "https://github.com/Saikumarmokkala/Shortest-Route-between-Cities"
      
    },
    {
      image: "/images/li5.png",
      description: "Running EC2 using Docker",
      url: "https://github.com/Saikumarmokkala/Docker-Jenkins-SSH"
      
    },
 
 
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/_franciscodf",
    linkedin: "https://www.linkedin.com/in/saikumarreddymokkala/",
    github: "https://github.com/Saikumarmokkala",
    email: "saimokkala2@gmail.com"
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portfolio',
      url: '/portfolio',
    }
  ]
}
