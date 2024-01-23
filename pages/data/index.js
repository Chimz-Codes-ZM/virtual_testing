import React, { ReactNode } from "react";
import { GiFactory } from "react-icons/gi";
import { AiFillCar, AiFillFire, AiFillCloud } from "react-icons/ai";
import { SlChemistry } from "react-icons/sl";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { FaRecycle, FaLeaf } from "react-icons/fa";

import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoPeopleCircleOutline } from "react-icons/io5";
import {
  MdOutlineConnectWithoutContact,
  MdOutlineInsights,
} from "react-icons/md";
import { FaSlideshare } from "react-icons/fa";
import { GoInbox } from "react-icons/go";
import { CgProfile } from "react-icons/cg";

import Salomon from "../../public/assets/Salomo4.jpg";
import Samson from "../../public/team/samson.png";
import Jessica from "../../public/assets/jess.jpeg";
import Umutesi from "../../public/assets/liliane.jpeg";
import Fido from "../../public/assets/fido.jpeg";
import pascaline from "../../public/assets/pasc.jpeg";
import rodney from "../../public/assets/rodney.jpeg";
import jacob from "../../public/assets/jacob.jpeg";
import albert from "../../public/assets/albert.jpeg";
import Kenny from "../../public/assets/kenny.jpg";
import Karen from "../../public/assets/karen.jpg";

import Learnio from "../../public/assets/learnio.svg";
import Terran from "../../public/assets/Terran_icon.png";
import Forge from "../../public/assets/Forge.png";
import Pegasus from "../../public/assets/Pegasus.webp";

import Decarb from "../../public/assets/deca-logo.png";
import Technet from "../../public/assets/technet.svg";
import Torparama from "../../public/assets/torp.webp";

import Christina from "../../public/placeholders/christina.webp";
import Christina_2 from "../../public/placeholders/Christina_2.webp";
import itay from "../../public/placeholders/itay.webp";
import ronny from "../../public/placeholders/ronny.webp";
import shadreck from "../../public/placeholders/shedrack.webp";
import willian from "../../public/placeholders/willian.webp";

export const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

export const Growth = [
  {
    img: Decarb,
    link: "https://decarbonify.com",
  },
  {
    img: Technet,
    link: "https://www.technetconsulting.no/",
  },
  {
    img: Torparama,
    link: "https://www.torppanorama.no/",
  },
];

export const StartUp = [
  {
    id: 1,
    img: Learnio,
    link: "https://learnio.eu",
    bio: "Learnio provides cutting-edge digital learning programs and personal mentoring support to guarantee success as a digital freelancer.",
  },

  {
    id: 2,
    img: Forge,
    link: "https://www.forgeimage.net/",
    bio: "A Creative Illustration, Animation, And VFX Studio With Extensive Experience And A Flexible Approach, We Combine Compelling Storytelling Techniques With Stunning Visuals To Create Impactful Narratives That Appeal To A global audience.",
  },
  {
    id: 3,
    img: Pegasus,
    link: "https://pegasusplatform.no/",
    bio: "Pegasus Token Services provides Tokenization-as-a-Service where the equity can be controlled flexibly, transparently and at a very low cost through the Pegasus Platform. Pegasus Token Services proposes a solution to this problem by tokenizing the equity and distribute the assets flexibly and transparently to the talent as part of their registration process with Baobabpad",
  },
  {
    id: 4,
    img: Terran,
    link: "https://www.terran.team/",
    bio: "Terran Community connects responsible entities with individuals who look for opportunities to contribute",
  },
];

export const management_info = [
  {
    id: 1,
    img: Kenny,
    name: "Kenny Kaluiji",
    position: "Founder",
    Quote:
      "Impact-oriented innovative business developer with domain skills in ESG analysis, impact investing, responsible innovation strategy, renewable energy, Africa opportunities",
    linkedin:
      "https://www.linkedin.com/in/kenny-kaluiji-902a1576/?originalSubdomain=no",
  },

  {
    id: 2,
    img: Karen,
    name: "Karen Kana",
    position: "Impact Advisor",
    Quote:
      "A seasoned professional in Global Development Studies, Karen specializes in project and strategic management, comprehensive research, policy analysis, and advocacy, with a strong focus on gender-inclusive entrepreneurship and social impact projects.",
    linkedin: "https://www.linkedin.com/in/kana-karen/",
  },

  {
    id: 3,
    img: jacob,
    name: "Jacob Mwale",
    position: "Tech Lead",
    Quote:
      "Jacob Mwale is backend developer specializing in web development and database management. With expertise in project management, he guides professional growth and streamlines organizational processes for optimal performance.",
    linkedin: "https://www.linkedin.com/in/kana-karen/",
  },

  {
    id: 4,
    img: rodney,
    name: "Chimwemwe Masona",
    position: "Tech Lead",
    Quote:
      "Chimwemwe Masona is a results-driven front-end developer and tech lead. Committed to delivering exceptional user experiences, he takes a holistic approach to development, collaborating closely with designers and stakeholders.",
    linkedin: "https://www.linkedin.com/in/kana-karen/",
  },

  {
    id: 5,
    img: albert,
    name: "Albert Ngingwa",
    position: "Data Lead",
    Quote:
      "Results-driven and highly skilled Data Management professional with expertise in developing and maintaining information databases, conducting both quantitative and qualitative data analysis, and implementing data management activities.",
    linkedin: "https://www.linkedin.com/in/kana-karen/",
  },
];

export const productionTeam = [
  {
    id: 5,
    img: Samson,
    project: Decarb,
    title: "Samson",
    lang: "English",
    services: "System Design",
    experience: "3 years",
    strength: "Front-End",
    industry: "ESG",
    back: `Samson Mabetho is an accomplished computer engineer and software developer with a track record of success in multiple companies. With a passion for innovation and a tireless work ethic, Samson has become known for his ability to take on complex projects and deliver results.

          Samson Mabetho is always eager to take on new challenges and is constantly seeking to learn and grow as a professional. Whether he's developing software, managing projects, or collaborating with others, he approaches every task with energy, enthusiasm, and a commitment to delivering results.`,
    bio: `Meet Samson Mabetho, a dynamic and dedicated front end web developer who brings a wealth of knowledge and experience to the world of software development. With over a 3 years of experience in the field, Samson has become a key player in the industry.

          Having spent years working as a front end developer, Samson has honed his craft and consistently produced high-quality work. He's always willing to go the extra mile to ensure that his projects are a success, and his attention to detail is second to none. Samson is a hard worker, and he prides himself on his ability to deliver top-notch results, no matter the task at hand.

          Samson's experience doesn't stop at front end development, though. He's also managed projects and worked collaboratively with cross-functional teams, demonstrating his exceptional leadership and interpersonal skills. He's a team player who enjoys working with others, and his ability to communicate complex ideas in a simple way has earned him a reputation as a trusted colleague and mentor.

          As a front end web developer, Samson is constantly exploring new technologies and staying up-to-date on industry trends. He's passionate about solving problems and finding innovative solutions to tricky issues. Whether it's building complex systems from scratch or optimizing existing ones, Samson is always up for the task.

          In summary, Samson is a front end web developer with a passion for software development, project management, and innovation. He's hardworking, analytical, and detail-oriented, and he always puts his best foot forward. With his exceptional skills and expertise, Samson is sure to make a lasting impact on the world of technology.`,
  },
  {
    id: 4,
    img: Jessica,
    project: Decarb,
    title: "Jessica",
    lang: "English, Portuguese",
    services: "System Design",
    experience: "3 years",
    strength: "Front-End",
    industry: "ESG",
    back: "ESG Customer Experience",
    bio: `Jessica is a highly skilled and experienced front-end web developer with a passion for creating visually stunning and intuitive user interfaces. With over 3 years of experience in the industry, she has honed her skills in HTML, CSS, and JavaScript, and is proficient in using various frameworks like React and Tailwind CSS. She is also well-versed in graphic design and has experience in tools like Figma and Adobe Creative Suite.

Jessica has a keen eye for design and aesthetics, and her work is characterized by clean lines, balanced layouts, and attention to detail. She understands the importance of creating responsive designs that can adapt to various screen sizes and devices and is always exploring new ways to enhance the user experience.

Jessica is committed to staying up-to-date with the latest web development trends and best practices. She takes courses regularly to expand her knowledge and skills, and actively participates in various developer communities.

In her free time, Jessica enjoys travelling, discovering new foods, capturing those moments through photography, and reading books. She also loves taking long walks, listening to music, and singing . Jessica's dedication and passion for front-end web development has earned her a reputation as a leader in her field, and her contributions have helped shape the industry in meaningful ways.`,
  },
  {
    id: 2,
    img: Salomon,
    project: Decarb,
    title: "Salomon",
    lang: "English",
    services: "System Design",
    experience: "3 years",
    strength: "Back-End",
    industry: "ESG",
    back: "Data Analyst",
    bio: `Salomon is an accomplished backend web developer with over a 3 years of experience in the field. He is highly skilled in developing and maintaining complex web applications and services, and is known for his attention to detail and ability to solve complex problems.

Salomon has a deep understanding of various programming languages and frameworks, including Java, Python, Ruby, and Node.js. He is well-versed in working with databases like MySQL and PostgreSQL, and has experience with various API and web service protocols such as REST and SOAP. Salomon is also an expert in using tools like Git and Jenkins for version control and continuous integration.

As a developer, Salomon is responsible for mentoring and training junior developers in his team. He takes great pride in sharing his knowledge and expertise with his peers, and takes an active role in improving his team's performance and efficiency.

Salomon is a strong advocate for code quality and follows best practices for writing clean and maintainable code. He believes that developing scalable and efficient systems requires a deep understanding of the business logic and user requirements.

Outside of work, Salomon enjoys reading about the latest technological advancements and attending tech conferences to stay up-to-date with the latest trends and best practices. His dedication and passion for web development have earned him a reputation as a leader in his field, and his contributions have helped shape the industry in meaningful ways.`,
  },

  {
    id: 7,
    img: jacob,
    // project: Savn,
    title: "Jacob",
    lang: "English",
    services: "Platform dev",
    experience: "1 year",
    strength: "Back-End",
    industry: "Development",
    back: "ESG Analyst-intern",
    bio: `Meet Jacob Mwale, an experienced back-end developer with a focus on Python, Django, Javascript, C, HTML, and CSS. Jacob has a strong passion for web development, API integration, and database management, and his impressive portfolio showcases his expertise.
          Jacob's proficiency in seamlessly integrating APIs into web applications, as well as his ability to work with databases such as MySQL, PostgreSQL, and Microsoft Access, has earned him a reputation as a skilled developer in the industry.
          Apart from his technical skills, Jacob has a keen interest in music, playing the guitar, piano, and singing. He is also passionate about teaching computer basics, which has helped him develop strong communication and teaching skills.
          With his dedication and commitment to delivering quality work, Jacob is a great choice for any project. His combination of technical proficiency, passion for learning, and excellent communication skills makes him an invaluable asset to any team.`,
  },
  {
    id: 8,
    img: rodney,
    // project: Savn,
    title: "Chimwemwe",
    lang: "English",
    services: "Platform dev",
    experience: "1 year",
    strength: "Front-End",
    industry: "Development",
    back: "ESG Analyst-intern",
    bio: `Chimwemwe Masona is a highly motivated front-end developer who is committed to delivering exceptional user experiences through his design and development skills. He holds a diploma in software engineering, with a specialization in front-end engineering, and has developed a strong command of HTML/CSS/SCSS, JavaScript, React, NextJS, Tailwind, and Typescript.

As a quick learner, Chimwemwe stays up-to-date with new technologies, tools, and techniques to ensure that his projects are optimized for functionality and user-friendliness. He understands that the power of design and user experience can make or break a project, and therefore takes a holistic approach to development. This means collaborating closely with designers, stakeholders, and other developers to ensure that every project meets the highest standards of quality and functionality.

Chimwemwe's excellent communication skills and collaborative spirit make him a great team player. He values teamwork and strives for timely delivery of high-quality projects, always going the extra mile to ensure that his work is of the highest standard.

In addition to his work as a front-end developer, Chimwemwe enjoys playing and watching sports, including football, basketball, and tennis. He finds that sports help him to stay physically fit and mentally sharp, and he is always looking for ways to challenge himself and improve his skills. Chimwemwe is also an avid reader and enjoys reading books on a variety of topics, from technology to personal development.`,
  },
  {
    id: 1,
    img: Umutesi,
    // project: Savn,
    title: "Liliane",
    lang: "English",
    services: "Platform dev",
    experience: "1 year",
    strength: "Design",
    industry: "Development",
    back: "ESG Analyst-intern",
    bio: `MUTESI LILIANE is a highly motivated computer application student with a strong passion for coding and software development. She has a keen eye for detail and is a skilled web developer with experience in HTML, CSS, JavaScript frameworks, Python, and Figma. LILIANE has worked on various projects throughout her studies, ranging from simple landing pages to complex web applications.
          LILIANE is committed to creating clean, responsive, and user-friendly websites that provide an optimal user experience. Her proficiency in front-end web development and understanding of user interface design enables her to create websites that are both visually appealing and functional. LILIANE is an excellent communicator and enjoys collaborating with designers, project managers, and other developers to ensure timely delivery of high-quality projects.
          Aside from her technical skills, LILIANE is an avid reader and enjoys spending time with friends. She also practices yoga as a way to relax and maintain a healthy work-life balance. LILIANE's dedication and commitment to delivering quality work make her a valuable asset to any team.
          In conclusion, LILIANE's passion for coding and software development, combined with her technical skills and excellent communication abilities, makes her an exceptional web developer with a promising future in the field.`,
  },
  {
    id: 3,
    img: pascaline,
    // project: Savn,
    title: "Pascaline",
    lang: "English",
    services: "Platform dev",
    experience: "1 year",
    strength: "Design",
    industry: "Development",
    back: "ESG Analyst-intern",
    bio: `NSHIMIYIMANA UWASE Pascaline, a 24-year-old lady living in Kigali City, Rwanda, is passionate about becoming a successful software designer and entrepreneur. With a strong desire to learn new skills as technology evolves, Pascaline aims to make a positive impact in the community.
          After completing her secondary school education at Lycee Notre Dame de Citeaux, where she focused on physics, mathematics, and geography (MPG), Pascaline pursued a major in computer and software engineering at the University of Rwanda/College of Science and Technology. She excelled in managing her workload, prioritizing projects and assignments to meet deadlines.
          Pascaline's impressive project portfolio includes the E-Health & stress detection and monitoring system, an IoT-based project that involved developing a wearable device and corresponding Android mobile app. The device utilizes sensor fusion to collect various vital body parameter data, including heart rate, body temperature, and oxygen saturation. It then uses an IF-THEN algorithm to determine stress status and provides notifications when a user is in danger. The system was built using PHP programming language, Android, and C programming language.
          With her strong work ethic, passion for coding, and collaborative spirit, Pascaline is well on her way to achieving her career goals and making a positive impact on society.`,
  },
  {
    id: 6,
    img: Fido,
    // project: Savn,
    title: "Fido",
    lang: "English",
    services: "Platform dev",
    experience: "1 year",
    strength: "Design",
    industry: "Development",
    back: "ESG Analyst-intern",
    bio: `Fido is an enthusiastic and dedicated web developer, known for her strong work ethic and creative problem-solving skills. She has always had a passion for technology and programming, and pursued her interest in web development during her college years.

        Fido has a solid foundation in front-end development, with a deep understanding of HTML, CSS, and JavaScript. She has also worked with various CMS platforms like WordPress and Drupal, and is well-versed in using popular frameworks like Bootstrap and React. Fido is a quick learner and keeps herself up-to-date with the latest web development trends and best practices.

        As a female web developer, Fido is a strong advocate for diversity and inclusion in the tech industry. She actively participates in organizations that support and empower women in tech, and mentors aspiring female developers.

        Fido's talent and hard work have earned her a reputation as a dependable and detail-oriented developer. She is known for her ability to take on complex projects and deliver high-quality work on time. Her passion for web development is matched only by her love for dogs, and she spends her free time volunteering at animal shelters and advocating for animal rights.

        Fido's dedication to her craft and commitment to making a positive impact in the world make her an inspiration to her peers and a role model for aspiring developers.`,
  },
];

export const emission_base = [
  {
    title: "Facilities",
    count: "6",
  },
  {
    title: "Regions",
    count: "65",
  },
  {
    title: "Employees",
    count: "32",
  },
  {
    title: "Supplier",
    count: "56",
  },
];

export const ghg_emissions = [
  {
    title: "Scope 1",
    entry_link: "scope1",
    description:
      "Scope 1 emissions refer to direct greenhouse gas emissions from a company's own operations, including fuel combustion and equipment usage.",
  },
  {
    title: "Scope 2",
    entry_link: "scope2",
    description:
      "Indirect emissions from energy purchased for use in operations, such as electricity or steam. It measures the carbon footprint from indirect energy consumption.",
  },
  {
    title: "Scope 3",
    entry_link: "scope3",
    description:
      "Indirect emissions from sources not owned or controlled by the company, such as suppliers and customers. These emissions have a significant impact on a company's overall carbon footprint and ESG performance.",
  },
];

export const employee_relations = [
  {
    title: "New Employee Hires and Employee Turnover",
    entry_link: "employee-turnover",
  },
  {
    title: "Different Benefits for Full-Time vs. Part-time Staff",
    entry_link: "full-time-part-time",
  },
  {
    title: "Parental Leave",
    entry_link: "parental-leave",
  },
  {
    title: "Relationship Policies and Supply Chain Management",
    entry_link: "supply-chain-management",
  },
];

export const scope1 = [
  {
    title: "Stationary Combustion",
    icon: GiFactory,
    count: "6",
    entry_link: "cat1",
  },
  {
    title: "Mobile Combustion",
    icon: AiFillCar,
    count: "65",
    entry_link: "cat2",
  },
  {
    title: "Process Emissions",
    icon: SlChemistry,
    count: "32",
    entry_link: "cat3",
  },
  {
    title: "Fugitive Emissions",
    icon: BsExclamationTriangleFill,
    count: "56",
    entry_link: "cat4",
  },
  {
    title: "CO2 Sequestration",
    icon: FaRecycle,
    count: "24",
    entry_link: "cat5",
  },
  {
    title: "Biogenic Emissions",
    icon: FaLeaf,
    count: "42",
    entry_link: "cat6",
  },
];

export const sample = [
  {
    name: "Sample",
    location: "None",
    start: "12/03/23",
    end: "12/05/23",
    status: "Open",
  },
  {
    name: "Ogoori",
    location: "Norway",
    start: "12/03/23",
    end: "12/05/23",
    status: "Open",
  },
  {
    name: "Debug",
    location: "Platform",
    start: "6/03/23",
    end: "12/08/23",
    status: "Open",
  },
  {
    name: "Tasks",
    location: "Platform",
    start: "1/03/23",
    end: "17/05/23",
    status: "Open",
  },
];

export const countries = [
  { country: "Afghanistan" },
  { country: "Albania" },
  { country: "Algeria" },
  { country: "Andorra" },
  { country: "Angola" },
  { country: "Antigua and Barbuda" },
  { country: "Argentina" },
  { country: "Armenia" },
  { country: "Australia" },
  { country: "Austria" },
  { country: "Azerbaijan" },
  { country: "Bahamas" },
  { country: "Bahrain" },
  { country: "Bangladesh" },
  { country: "Barbados" },
  { country: "Belarus" },
  { country: "Belgium" },
  { country: "Belize" },
  { country: "Benin" },
  { country: "Bhutan" },
  { country: "Bolivia" },
  { country: "Bosnia and Herzegovina" },
  { country: "Botswana" },
  { country: "Brazil" },
  { country: "Brunei" },
  { country: "Bulgaria" },
  { country: "Burkina Faso" },
  { country: "Burundi" },
  { country: "Cabo Verde" },
  { country: "Cambodia" },
  { country: "Cameroon" },
  { country: "Canada" },
  { country: "Central African Republic" },
  { country: "Chad" },
  { country: "Chile" },
  { country: "China" },
  { country: "Colombia" },
  { country: "Comoros" },
  { country: "Congo (Congo-Brazzaville)" },
  { country: "Costa Rica" },
  { country: "Cote d'Ivoire" },
  { country: "Croatia" },
  { country: "Cuba" },
  { country: "Cyprus" },
  { country: "Czechia" },
  { country: "Denmark" },
  { country: "Djibouti" },
  { country: "Dominica" },
  { country: "Dominican Republic" },
  { country: "Ecuador" },
  { country: "Egypt" },
  { country: "El Salvador" },
  { country: "Equatorial Guinea" },
  { country: "Eritrea" },
  { country: "Estonia" },
  { country: "Eswatini" },
  { country: "Ethiopia" },
  { country: "Fiji" },
  { country: "Finland" },
  { country: "France" },
  { country: "Gabon" },
  { country: "Gambia" },
  { country: "Georgia" },
  { country: "Germany" },
  { country: "Ghana" },
  { country: "Greece" },
  { country: "Grenada" },
  { country: "Guatemala" },
  { country: "Guinea" },
  { country: "Guinea-Bissau" },
  { country: "Guyana" },
  { country: "Haiti" },
  { country: "Holy See" },
  { country: "Honduras" },
  { country: "Hungary" },
  { country: "Iceland" },
  { country: "India" },
  { country: "Indonesia" },
  { country: "Iran" },
  { country: "Iraq" },
  { country: "Ireland" },
  { country: "Israel" },
  { country: "Italy" },
  { country: "Jamaica" },
  { country: "Japan" },
  { country: "Jordan" },
  { country: "Kazakhstan" },
  { country: "Kenya" },
  { country: "Kiribati" },
  { country: "Kuwait" },
  { country: "Kyrgyzstan" },
  { country: "Laos" },
  { country: "Latvia" },
  { country: "Lebanon" },
  { country: "Lesotho" },
  { country: "Liberia" },
  { country: "Libya" },
  { country: "Liechtenstein" },
  { country: "Lithuania" },
  { country: "Luxembourg" },
  { country: "Madagascar" },
  { country: "Malawi" },
  { country: "Malaysia" },
  { country: "Maldives" },
  { country: "Mali" },
  { country: "Malta" },
  { country: "Marshall Islands" },
  { country: "Mauritania" },
  { country: "Mauritius" },
  { country: "Mexico" },
  { country: "Micronesia" },
  { country: "Moldova" },
  { country: "Monaco" },
  { country: "Mongolia" },
  { country: "Montenegro" },
  { country: "Morocco" },
  { country: "Mozambique" },
  { country: "Myanmar (formerly Burma)" },
  { country: "Namibia" },
  { country: "Nauru" },
  { country: "Nepal" },
  { country: "Netherlands" },
  { country: "New Zealand" },
  { country: "Nicaragua" },
  { country: "Niger" },
  { country: "Nigeria" },
  { country: "North Korea" },
  { country: "North Macedonia (formerly Macedonia)" },
  { country: "Norway" },
  { country: "Oman" },
  { country: "Pakistan" },
  { country: "Palau" },
  { country: "Palestine State" },
  { country: "Panama" },
  { country: "Papua New Guinea" },
  { country: "Paraguay" },
  { country: "Peru" },
  { country: "Philippines" },
  { country: "Poland" },
  { country: "Portugal" },
  { country: "Qatar" },
  { country: "Romania" },
  { country: "Russia" },
  { country: "Rwanda" },
  { country: "Saint Kitts and Nevis" },
  { country: "Saint Lucia" },
  { country: "Saint Vincent and the Grenadines" },
  { country: "Samoa" },
  { country: "San Marino" },
  { country: "Sao Tome and Principe" },
  { country: "Saudi Arabia" },
  { country: "Senegal" },
  { country: "Serbia" },
  { country: "Seychelles" },
  { country: "Sierra Leone" },
  { country: "Singapore" },
  { country: "Slovakia" },
  { country: "Slovenia" },
  { country: "Solomon Islands" },
  { country: "Somalia" },
  { country: "South Africa" },
  { country: "South Korea" },
  { country: "South Sudan" },
  { country: "Spain" },
  { country: "Sri Lanka" },
  { country: "Sudan" },
  { country: "Suriname" },
  { country: "Sweden" },
  { country: "Switzerland" },
  { country: "Syria" },
  { country: "Tajikistan" },
  { country: "Tanzania" },
  { country: "Thailand" },
  { country: "Timor-Leste" },
  { country: "Togo" },
  { country: "Tonga" },
  { country: "Trinidad and Tobago" },
  { country: "Tunisia" },
  { country: "Turkey" },
  { country: "Turkmenistan" },
  { country: "Tuvalu" },
  { country: "Uganda" },
  { country: "Ukraine" },
  { country: "United Arab Emirates" },
  { country: "United Kingdom" },
  { country: "United States of America" },
  { country: "Uruguay" },
  { country: "Uzbekistan" },
  { country: "Vanuatu" },
  { country: "Vatican City" },
  { country: "Venezuela" },
  { country: "Vietnam" },
  { country: "Yemen" },
  { country: "Zambia" },
  { country: "Zimbabwe" },
];

export const roles = [
  { role: "Select a role" },
  { role: "Artificial Intelligence (AI) Engineer" },
  { role: "Back-End Developer" },
  { role: "Business Analyst" },
  { role: "Cloud Architect" },
  { role: "Computer Hardware Engineer" },
  { role: "Content Strategist" },
  { role: "Cryptographer" },
  { role: "Data Analyst" },
  { role: "Data Scientist" },
  { role: "Database Administrator" },
  { role: "DevOps Engineer" },
  { role: "Front-End Developer" },
  { role: "Full-Stack Developer" },
  { role: "Game Developer" },
  { role: "Information Security Analyst" },
  { role: "IT Manager" },
  { role: "Machine Learning Engineer" },
  { role: "Mobile Developer" },
  { role: "Network Administrator" },
  { role: "Product Manager" },
  { role: "Project Manager" },
  { role: "Quality Assurance (QA) Tester" },
  { role: "Scrum Master" },
  { role: "Software Architect" },
  { role: "Software Developer" },
  { role: "Software Engineer" },
  { role: "Systems Administrator" },
  { role: "Technical Writer" },
  { role: "UI/UX Designer" },
  { role: "Web Developer" },
];

export const primary_skill = [
  { primary_skill: "Select skill" },
  { primary_skill: ".NET" },
  { primary_skill: "[Cross-Platfrom] React Native" },
  { primary_skill: "[JavaScript] Angular" },
  { primary_skill: "[JavaScript] Node.js" },
  { primary_skill: "[JavaScript] React" },
  { primary_skill: "[JavaScript] Vue" },
  { primary_skill: "Android" },
  { primary_skill: "Blockchain" },
  { primary_skill: "C/Embedded" },
  { primary_skill: "Cloud Engineering" },
  { primary_skill: "Cloud Engineering (AWS)" },
  { primary_skill: "Data Analyst" },
  { primary_skill: "Data Engineering" },
  { primary_skill: "Data Science" },
  { primary_skill: "DevOps" },
  { primary_skill: "DevOps (AWS)" },
  { primary_skill: "DevSecOps" },
  { primary_skill: "Digital Project Manager" },
  { primary_skill: "Elixir" },
  { primary_skill: "Flutter" },
  { primary_skill: "Golang" },
  { primary_skill: "Interaction Designer" },
  { primary_skill: "iOs" },
  { primary_skill: "Java" },
  { primary_skill: "Mulesoft" },
  { primary_skill: "PHP" },
  { primary_skill: "Product Manager" },
  { primary_skill: "Product Owner Technical" },
  { primary_skill: "Python" },
  { primary_skill: "QA" },
  { primary_skill: "Ruby" },
  { primary_skill: "Salesforce - Admin" },
  { primary_skill: "Salesforce - Architect" },
  { primary_skill: "Salesforce - BA/PM/PO" },
  { primary_skill: "Salesforce - Commerce Cloud" },
  { primary_skill: "Developer" },
  { primary_skill: "Salesforce - Marketer" },
  { primary_skill: "Scala" },
  { primary_skill: "Scrum Master" },
  { primary_skill: "SRE" },
  { primary_skill: "Technical Product Manager" },
  { primary_skill: "UI (Visual) Designer" },
  { primary_skill: "UI/UX Designer" },
  { primary_skill: "Unity" },
  { primary_skill: "UX Researcher" },
  { primary_skill: "UX Writer" },
];

export const techCategories = [
  "AI and Machine Learning",
  "Cybersecurity",
  "Data and Analytics",
  "Design",
  "Hardware and Electronics",
  "IT and Infrastructure",
  "Management and Leadership",
  "Marketing and Sales",
  "Project and Product Management",
  "Quality Assurance",
  "Software Development",
  "Technical Writing",
]

export const techPositions = [
  "AI Engineer",
  "Agile Coach",
  "Android Developer",
  "Angular Developer",
  "AR Developer",
  "Backend Engineer",
  "Bioinformatics Scientist",
  "Blockchain Developer",
  "Business Intelligence Developer",
  "Cloud Architect",
  "Cloud Solutions Engineer",
  "Cybersecurity Analyst",
  "Data Analyst",
  "Data Engineer",
  "Data Scientist",
  "Database Administrator",
  "Database Developer",
  "DevOps Engineer",
  "Django Fullstack Developer",
  "Docker/Kubernetes Engineer",
  "Embedded Systems Engineer",
  "Ethical Hacker",
  "Firmware Engineer",
  "Frontend Engineer",
  "Fullstack Engineer",
  "Game Developer",
  "Information Security Engineer",
  "Interaction Designer",
  "IoT Developer",
  "iOS Developer",
  "Java Developer",
  "JavaScript Developer",
  "LAMP Stack Developer",
  "Machine Learning Engineer",
  "Manual Tester",
  "MEAN Stack Developer",
  "MERN Stack Developer",
  "Mobile App Developer (iOS/Android)",
  "Network Security Engineer",
  "Node.js Developer",
  "NoSQL Developer",
  "PHP Developer",
  "Product Designer",
  "Product Manager",
  "Product Owner",
  "Project Manager",
  "Python Developer",
  "QA Engineer",
  "Quantum Developer",
  "React Developer",
  "React Native Developer",
  "Robotic Process Automation Developer",
  "Robotics Engineer",
  "Ruby on Rails Developer",
  "Scrum Master",
  "Security Consultant",
  "Server-side Developer",
  "Site Reliability Engineer",
  "Smart Contract Developer",
  "Software Engineer",
  "Statistician",
  "Systems Administrator",
  "UI/UX Designer",
  "Unity Developer",
  "Unreal Engine Developer",
  "Virtual Reality Developer",
  "Web Developer",
  "Other",
];

export const years_work_experience = [
  { years: "Select a year" },
  { years: "1 year" },
  { years: "2 years" },
  { years: "3 years" },
  { years: "4 years" },
  { years: "5 years" },
  { years: "6 years" },
  { years: "7 years" },
  { years: "8 years" },
  { years: "9 years" },
  { years: "10 years" },
  { years: "11 years" },
  { years: "12 years" },
  { years: "13 years" },
  { years: "14 years" },
  { years: "15+ years" },
];

export const years_primary_skill = [
  { years_primary_skill: "Select a year" },
  { years_primary_skill: "1 year" },
  { years_primary_skill: "2 years" },
  { years_primary_skill: "3 years" },
  { years_primary_skill: "4 years" },
  { years_primary_skill: "5 years" },
  { years_primary_skill: "6 years" },
  { years_primary_skill: "7 years" },
  { years_primary_skill: "8 years" },
  { years_primary_skill: "9 years" },
  { years_primary_skill: "10 years" },
  { years_primary_skill: "11 years" },
  { years_primary_skill: "12 years" },
  { years_primary_skill: "13 years" },
  { years_primary_skill: "14 years" },
  { years_primary_skill: "15+ years" },
];

export const english_level = [
  { english_level: "Select a level" },
  { english_level: "Beginner A1/A2" },
  { english_level: "Intermediate B1/B2" },
  { english_level: "C1/C2" },
  { english_level: "Native" },
];

export const heard_baobabpad = [
  { method: "Select an option" },
  { method: "Advertising" },
  { method: "Email" },
  { method: "In-person Event" },
  { method: "Job Posts" },
  { method: "News" },
  { method: "Referral" },
  { method: "Search Engine" },
  { method: "Social Media" },
  { method: "Word of Mouth" },
  { method: "Other" },
];

export const conversationMessages = {
  1: [
    { text: "Hey, how's it going?", isCurrentUser: false },
    { text: "Hi there! Doing great, thanks.", isCurrentUser: true },
    {
      text: "I've been learning about networking recently.",
      isCurrentUser: false,
    },
    {
      text: "That's awesome! Networking is a crucial skill for developers. What have you learned so far?",
      isCurrentUser: true,
    },
    {
      text: "I've learned about IP addresses, subnetting, and the basics of TCP/IP.",
      isCurrentUser: false,
    },
    {
      text: "Those are fundamental concepts! IP addresses help identify devices on a network, and subnetting allows efficient address allocation.",
      isCurrentUser: true,
    },
    {
      text: "TCP/IP is the protocol suite that powers the internet. It enables reliable data transfer between devices.",
      isCurrentUser: true,
    },
    {
      text: "Exactly! I'm also exploring HTTP, DNS, and different types of network topologies.",
      isCurrentUser: false,
    },
    {
      text: "HTTP is the foundation of web communication, and DNS translates domain names to IP addresses. Network topologies determine how devices are connected.",
      isCurrentUser: true,
    },
    {
      text: "Thanks for the insights! Networking seems complex but fascinating.",
      isCurrentUser: false,
    },
  ],

  2: [
    {
      text: "Hey, have you been diving into UX research lately?",
      isCurrentUser: true,
    },
    {
      text: "Absolutely! UX research is crucial for understanding users and improving product experiences.",
      isCurrentUser: false,
    },
    {
      text: "Definitely. It helps in designing user-centered products and making informed decisions.",
      isCurrentUser: true,
    },
    {
      text: "I've heard about different methods like user interviews, surveys, and usability testing.",
      isCurrentUser: false,
    },
    {
      text: "Yes, those are common methods. User interviews provide qualitative insights, surveys help gather quantitative data, and usability testing uncovers usability issues.",
      isCurrentUser: true,
    },
    {
      text: "How about personas and user journeys? Are they important in UX research?",
      isCurrentUser: false,
    },
    {
      text: "Absolutely! Personas are fictional characters representing user types, and user journeys map out the user's experience through a product. They both help in understanding user needs and behaviors.",
      isCurrentUser: true,
    },
    {
      text: "I'm curious about remote user testing. It sounds convenient, but does it offer reliable results?",
      isCurrentUser: false,
    },
    {
      text: "Remote user testing can be effective, but it's important to consider factors like the participant's environment and possible technical issues. Moderated sessions and well-designed tasks can lead to valuable insights.",
      isCurrentUser: true,
    },
    {
      text: "Got it. How can I start learning more about UX research?",
      isCurrentUser: false,
    },
    {
      text: "There are plenty of online resources, courses, and books on UX research. Platforms like Coursera and LinkedIn Learning offer comprehensive courses. Don't forget to practice by conducting small research projects!",
      isCurrentUser: true,
    },
    {
      text: "Thanks for the advice! UX research sounds fascinating and impactful.",
      isCurrentUser: false,
    },
  ],
};

export const initialValidationErrors = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
};

export const village_member_profiles = [
  {
    imageSrc: willian,
    name: "Kofi Mensah",
    role: "Software Engineer",
    country: "Greece",
    experience: "2 years",
    courses: "CompTIA A+",
  },

  {
    imageSrc: Christina,
    name: "Zahara Mohammed",
    role: "UX Researcher",
    country: "Slovenia",
    experience: "2 years",
    courses: "Cisco CCNA",
  },
  {
    imageSrc: Christina_2,
    name: "Nala Sowande",
    role: "Systems Administrator",
    country: "Norway",
    experience: "2 years",
    courses: "AWS Certified Solutions Architect",
  },
  {
    imageSrc: shadreck,
    name: "Obinna Eze",
    role: "Software Engineer",
    country: "Greece",
    experience: "2 years",
    courses: "Microsoft Certified Azure Administrator",
  },
  {
    imageSrc: itay,
    name: "Ahmad Hassan",
    role: "UX Researcher",
    country: "Slovenia",
    experience: "2 years",
    courses: "Certified ScrumMaster (CSM)",
  },
  {
    imageSrc: ronny,
    name: "Isabella Muller",
    role: "Systems Administrator",
    country: "Norway",
    experience: "2 years",
    courses: "Certified Information Systems Security Professional (CISSP)",
  },
];

export const company_member_profiles = [
  {
    id: 1,
    name: "Google Inc",
    industry: "Tech",
    logo: "coming soon",
  },
  {
    id: 2,
    name: "Apple Inc",
    industry: "Tech",
    logo: "coming soon",
  },
  {
    id: 3,
    name: "Microsoft Corporation",
    industry: "Tech",
    logo: "coming soon",
  },
  {
    id: 4,
    name: "Amazon.com Inc",
    industry: "E-commerce",
    logo: "coming soon",
  },
  {
    id: 5,
    name: "Facebook, Inc",
    industry: "Social Media",
    logo: "coming soon",
  },
  {
    id: 6,
    name: "Tesla, Inc",
    industry: "Automotive",
    logo: "coming soon",
  },
];

export const languages = [
  "Mandarin Chinese",
  "Spanish",
  "English",
  "Hindi",
  "Arabic",
  "Bengali",
  "Portuguese",
  "Russian",
  "Urdu",
  "Indonesian",
  "Standard German",
  "French",
  "Japanese",
  "Telugu",
  "Marathi",
  "Vietnamese",
  "Korean",
  "Tamil",
  "Italian",
  "Turkish",
  "Yue Chinese",
  "Thai",
  "Gujarati",
  "Javanese",
  "Western Punjabi",
  "Wu Chinese",
  "Malay/Indonesian",
  "Kannada",
  "Odia",
  "Burmese",
  "Hakka Chinese",
  "Ukrainian",
  "Bhojpuri",
  "Tagalog",
  "Yoruba",
  "Maithili",
  "Uzbek",
  "Sundanese",
  "Thai",
  "Farsi",
  "Malayalam",
  "Igbo",
  "Sindhi",
  "Swahili",
  "Romanian",
  "Azerbaijani",
  "Dutch",
  "Nepali",
  "Gan Chinese",
  "Sinhala",
  "Chittagonian",
  "Khmer",
  "Hausa",
  "Kurdish",
  "Malagasy",
  "Amharic",
  "Cebuano",
  "Nepali",
  "Tibetan",
  "Chichewa",
  "Rundi",
  "Bambara",
  "Bulgarian",
  "Saraiki",
  "Zulu",
  "Kinyarwanda",
  "Swedish",
  "Yi Chinese",
  "Finnish",
  "Magahi",
  "Awadhi",
  "Gan Chinese",
  "Hungarian",
  "Chuang",
  "Madurese",
  "Greek",
  "Akan",
  "Kazakh",
  "Czech",
  "Sylheti",
  "Quechua",
  "Tatar",
  "Xhosa",
  "Slovak",
  "Malayalam",
  "Marwari",
  "Haryanvi",
  "Kurdish (Kurmanji)",
  "Zhuang",
  "Min Nan Chinese",
  "Ilocano",
  "Yoruba",
  "Burmese",
  "Amharic",
  "Oromo",
  "Igbo",
  "Maithili",
];

export const event_grid = [
  {
    id: 1,
    img_src:
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Virtual Hackathon",
    host: "CodeCraftersHub",
    date_time: "November 25, 2023, 8:00 PM",
    price: "Price: $75",
  },

  {
    id: 2,
    img_src:
      "https://plus.unsplash.com/premium_photo-1661290247940-5450aa0babaf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Webinar Series on Emerging Technologies",
    host: "TechInsightsConnect",
    date_time: "November 25, 2023, 8:00 PM",
    price: "Price: $75",
  },

  {
    id: 3,
    img_src:
      "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Tech Talk Panel Discussion",
    host: "ByteMindsForum",
    date_time: "November 25, 2023, 8:00 PM",
    price: "Price: $75",
  },

  {
    id: 4,
    img_src:
      "https://plus.unsplash.com/premium_photo-1680859126164-ac4fd8f56625?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Code Review Sessions",
    host: "DevCritiqueHub",
    date_time: "November 25, 2023, 8:00 PM",
    price: "Price: $75",
  },

  {
    id: 5,
    img_src:
      "https://images.unsplash.com/photo-1598908314766-3e3ce9bd2f48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Virtual Tech Networking Event",
    host: "ConnectTechPros",
    date_time: "November 25, 2023, 8:00 PM",
    price: "Price: $75",
  },

  {
    id: 6,
    img_src:
      "https://plus.unsplash.com/premium_photo-1681122423210-f7639c75f338?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Tech Demos and Showcases",
    host: "InnovateTechExpo",
    date_time: "November 25, 2023, 8:00 PM",
    price: "Price: $75",
  },
];

export const applications = [
  {
    id: 107,
    name: "Samson",
  },
  {
    id: 102,
    name: "Chimwemwe",
  },
  {
    id: 103,
    name: "Solomon",
  },
  {
    id: 104,
    name: "Jacob",
  },
  {
    id: 105,
    name: "Albert",
  },
  {
    id: 106,
    name: "Kenny",
  },
];

export const approved = [
  {
    id: 104,
    name: "Jacob",
  },
  {
    id: 105,
    name: "Albert",
  },
  {
    id: 106,
    name: "Kenny",
  },
];

export const denied = [
  {
    id: 107,
    name: "Samson",
  },
  {
    id: 102,
    name: "Chimwemwe",
  },
  {
    id: 103,
    name: "Solomon",
  },
];

export const trends = [
  {
    id: 1,
    img: "https://techcrunch.com/wp-content/uploads/2023/11/972EDAAB-FAF9-4DD0-B0D2-A5DBAD213213.jpeg?w=730&crop=1",
    date: "November 15, 2023",
    title: "Why Norrsken founder Niklas Adalberth is betting on Africa",
    link: "https://techcrunch.com/2023/11/15/why-norrsken-founder-niklas-adalberth-is-betting-on-africa/",
    source: "TechCrunch",
  },
  {
    id: 2,
    img: "https://techcrunch.com/wp-content/uploads/2023/11/3-min.png?w=730&crop=1",
    date: "November 30, 2023",
    title:
      "Salesforce Ventures and Female Founders Fund back Kenyan climate-tech Amini in $4M seed round",
    link: "https://techcrunch.com/2023/11/30/salesforce-ventures-and-female-founders-fund-back-kenyan-climate-tech-amini-in-4m-seed-round/",
    source: "TechCrunch",
  },
  {
    id: 3,
    img: "https://techcrunch.com/wp-content/uploads/2022/08/Jihan-Abass.-e1659423730694.jpg?w=730&crop=1",
    date: "August 2, 2022",
    title:
      "Kenyan insurtech Lami raises $3.7M seed extension led by Harlem Capital",
    link: "https://techcrunch.com/2022/08/02/kenyan-insurtech-lami-raises-3-7m-seed-extension-led-by-harlem-capital/",
    source: "TechCrunch",
  },
  {
    id: 4,
    img: "https://techcrunch.com/wp-content/uploads/2023/11/IMG-2463-min.jpg?w=730&crop=1",
    date: "November 24, 2023",
    title:
      "Saviu Ventures’ second fund reaches €12 million first close to back Francophone Africa startups",
    link: "https://techcrunch.com/2023/11/24/saviu-second-fund/",
    source: "TechCrunch",
  },
  {
    id: 5,
    img: "https://techcrunch.com/wp-content/uploads/2023/11/B1D80FDE-47E4-469A-BC2A-D6AF17132829.jpeg?w=730&crop=1",
    date: "November 13, 2023",
    title:
      "Shekel Mobility, a B2B marketplace for auto dealers in Africa, raises $7M led by Ventures Platform and MaC VC",
    link: "https://techcrunch.com/2023/11/13/shekel-mobility-a-b2b-marketplace-for-auto-dealers-in-africa-raises-7m-led-by-ventures-platform-and-mac-vc/",
    source: "TechCrunch",
  },
  {
    id: 6,
    img: "https://techcrunch.com/wp-content/uploads/2021/12/45B7318.jpg?w=730&crop=1",
    date: "November 3, 2023",
    title:
      "Norrsken22’s debut fund closes at $205M to back growth-stage startups in Africa",
    link: "https://techcrunch.com/2023/11/02/norrsken22s-debut-fund-closes-at-205m-to-back-growth-stage-startups-in-africa/",
    source: "TechCrunch",
  },
  {
    id: 7,
    img: "https://techcrunch.com/wp-content/uploads/2023/10/Sukhiba.jpeg?w=730&crop=1",
    date: "October 25, 2023",
    title:
      "Sukhiba eyes expansion to power WhatsApp conversational commerce in Africa",
    link: "https://techcrunch.com/2023/10/25/sukhiba-eyes-africa-growth/",
    source: "TechCrunch",
  },
  {
    id: 8,
    img: "https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-942480316.jpg?w=1390&crop=1",
    date: "October 17, 2023",
    title:
      "LeapFrog’s new fund to double down on financial and healthcare sectors in Africa and Asia",
    link: "https://techcrunch.com/2023/10/17/leapfrog-new-1b-fund/",
    source: "TechCrunch",
  },
  {
    id: 9,
    img: "https://techcrunch.com/wp-content/uploads/2023/10/545C3940-5903-4132-A537-173B77DD0E3F.jpeg?w=1390&crop=1",
    date: "October 24, 2023",
    title:
      "New solar mini-grids in Africa to be powered by Husk Power Systems’ $103M Series D",
    link: "https://techcrunch.com/2023/10/24/new-solar-mini-grids-in-africa-to-be-powered-by-husk-power-systems-103m-series-d/",
    source: "TechCrunch",
  },
  {
    id: 10,
    img: "https://techpoint.africa/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-05-at-12.39.52-909x682.jpeg",
    date: "December 5, 2023",
    title: "Call of Duty: Mobile launches dedicated Nigerian server ",
    link: "https://techpoint.africa/2023/12/05/call-of-duty-mobile-nigerian-server/",
    source: "Techpoint Africa",
  },
  {
    id: 11,
    img: "https://techpoint.africa/wp-content/uploads/2023/07/possessed-photography-znCLdh5-Srk-unsplash-931x682.webp",
    date: "December 5, 2023",
    title: "South Africa wants to be a global EV player ",
    link: "https://techpoint.africa/2023/12/05/techpoint-digest-728/",
    source: "Techpoint Africa",
  },
  {
    id: 12,
    img: "https://techpoint.africa/wp-content/uploads/2022/11/Pivo-Team-min-978x682.jpg",
    date: "December 5, 2023",
    title:
      "Nigerian fintech startup Pivo shuts down 1 year after announcing a $2 million round",
    link: "https://techpoint.africa/2023/12/05/pivo-has-shut-down/",
    source: "Techpoint Africa",
  },
];

export const navbar = [
  {
    icon: SiHomeassistantcommunitystore,
    sideHighlight: "Tech Village",
    href: "/virtual_tech_village/",
    tooltip: "Tech Village",
  },

  {
    icon: IoPeopleCircleOutline,
    sideHighlight: "virtual internship",
    href: "/virtual_tech_village/internship",
    tooltip: "Internship",
  },

  {
    icon: MdOutlineConnectWithoutContact,
    sideHighlight: "connect",
    href: "/virtual_tech_village/connect",
    tooltip: "Connect",
  },

  {
    icon: FaSlideshare,
    sideHighlight: "sharepad",
    href: "/virtual_tech_village/trends",
    tooltip: "Sharepad",
  },

  {
    icon: GoInbox,
    sideHighlight: "inbox",
    href: "/virtual_tech_village/inbox",
    tooltip: "Inbox",
  },
  {
    icon: CgProfile,
    sideHighlight: "profile",
    href: "/virtual_tech_village/profile",
    tooltip: "Profile",
  },
];

export const Project_teams = [
  {
    number: "1",
    projectId: "abc123",
    projectName: "Online Marketplace Platform",
    teamOwner: "Alice Johnson",
    projectDescription:
      "Developing a robust e-commerce platform with advanced search and recommendation features.",
    dateStarted: "2023-05-15",
    numberOfTeamMembers: 8,
  },
  {
    number: "2",
    projectId: "def456",
    projectName: "Health Monitoring App",
    teamOwner: "Bob Smith",
    projectDescription:
      "Building a mobile application to track and monitor users' health metrics, including fitness and medical data.",
    dateStarted: "2023-02-28",
    numberOfTeamMembers: 6,
  },
  {
    number: "3",
    projectId: "ghi789",
    projectName: "Financial Analytics Dashboard",
    teamOwner: "Charlie Davis",
    projectDescription:
      "Creating a comprehensive dashboard for financial analysts to visualize and analyze market trends.",
    dateStarted: "2023-07-10",
    numberOfTeamMembers: 10,
  },
  {
    number: "4",
    projectId: "jkl012",
    projectName: "Smart Home Automation System",
    teamOwner: "David Wilson",
    projectDescription:
      "Designing and implementing an intelligent home automation system with IoT integration.",
    dateStarted: "2023-04-03",
    numberOfTeamMembers: 12,
  },
  {
    number: "5",
    projectId: "mno345",
    projectName: "Educational Learning Platform",
    teamOwner: "Eva Martinez",
    projectDescription:
      "Developing an online learning platform with interactive courses, quizzes, and real-time progress tracking.",
    dateStarted: "2023-01-20",
    numberOfTeamMembers: 15,
  },
  {
    number: "6",
    projectId: "pqr678",
    projectName: "Supply Chain Management System",
    teamOwner: "Frank Anderson",
    projectDescription:
      "Building a scalable and efficient supply chain management system for a global logistics company.",
    dateStarted: "2023-06-05",
    numberOfTeamMembers: 14,
  },
  {
    number: "7",
    projectId: "stu901",
    projectName: "Social Media Analytics Tool",
    teamOwner: "Grace Turner",
    projectDescription:
      "Creating a tool to analyze and visualize social media data for marketing and brand management.",
    dateStarted: "2023-03-12",
    numberOfTeamMembers: 9,
  },
  {
    number: "8",
    projectId: "vwx234",
    projectName: "Customer Relationship Management (CRM) System",
    teamOwner: "Harry Brown",
    projectDescription:
      "Developing a CRM system to streamline customer interactions, sales, and support processes.",
    dateStarted: "2023-08-20",
    numberOfTeamMembers: 11,
  },
  {
    number: "9",
    projectId: "yz567",
    projectName: "Augmented Reality Game",
    teamOwner: "Ivy Green",
    projectDescription:
      "Designing an augmented reality game that combines real-world elements with immersive gameplay.",
    dateStarted: "2023-05-02",
    numberOfTeamMembers: 7,
  },
  {
    number: "10",
    projectId: "123abc",
    projectName: "EHR (Electronic Health Record) System",
    teamOwner: "Jack Taylor",
    projectDescription:
      "Creating a secure and user-friendly electronic health record system for healthcare institutions.",
    dateStarted: "2023-09-15",
    numberOfTeamMembers: 13,
  },
  {
    number: "11",
    projectId: "456def",
    projectName: "AI-Powered Chatbot",
    teamOwner: "Karen Lee",
    projectDescription:
      "Developing an intelligent chatbot with natural language processing capabilities for customer support.",
    dateStarted: "2023-04-18",
    numberOfTeamMembers: 8,
  },
];

export default () => null;
