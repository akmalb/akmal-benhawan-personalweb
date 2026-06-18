export type Bilingual = {
  th: string;
  en: string;
};

export const personalInfo = {
  name: "อักมาล เบนหวัน",
  nameEn: "Akmal Benhawan",
  title: {
    th: "นักวิชาการคอมพิวเตอร์",
    en: "Computer Academic Officer",
  },
  institution: {
    th: "มหาวิทยาลัยราชภัฏยะลา",
    en: "Yala Rajabhat University",
  },
  email: "akmal.b@yru.ac.th",
  location: {
    th: "จังหวัดยะลา ประเทศไทย",
    en: "Yala, Thailand",
  },
  profileImage: "/images/profile.svg",
  cvUrl: "/cv/akmal-benhawan-cv.pdf",
  portfolioBadge: {
    th: "เว็บไซต์ส่วนตัวทางวิชาการ",
    en: "Academic Portfolio",
  },
  tagline: {
    th: "นักวิชาการคอมพิวเตอร์ที่ทำงานวิจัยและพัฒนาระบบสารสนเทศของมหาวิทยาลัย โดยมุ่งเน้นปัญญาประดิษฐ์ การวิเคราะห์ข้อมูล และบิ๊กดาต้า เพื่อสนับสนุนการบริหารจัดการ งานวิจัย และการบริการของสถาบัน",
    en: "A computer academic officer engaged in research and the development of university information systems, with a focus on artificial intelligence, data analytics, and big data to support institutional management, research, and services.",
  },
  buttons: {
    viewResearch: { th: "ดูทิศทางงานวิจัย", en: "Research Focus" },
    downloadCv: { th: "ดาวน์โหลดประวัติ", en: "Download CV" },
    contact: { th: "ติดต่อ", en: "Contact" },
  },
};

export const primaryRoles: Bilingual[] = [
  {
    th: "นักวิชาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฏยะลา",
    en: "Computer Academic Officer, Yala Rajabhat University",
  },
  {
    th: "นักวิจัยด้าน AI, Data Analytics และ Big Data",
    en: "Researcher in AI, Data Analytics, and Big Data",
  },
  {
    th: "ผู้พัฒนาระบบสารสนเทศมหาวิทยาลัย",
    en: "University Information Systems Developer",
  },
  {
    th: "วิทยากรด้าน AI และการวิเคราะห์ข้อมูล",
    en: "Lecturer in AI and Data Analytics",
  },
  {
    th: "หัวหน้าฝ่ายสื่อ มูลนิธิเพื่อนมุสลิม",
    en: "Head of Media Division, Muslim Friends Foundation",
  },
];

export const socialLinks = [
  { name: "GitHub", href: "https://github.com/akmalb", icon: "github" },
  { name: "Email", href: "mailto:akmal.b@yru.ac.th", icon: "email" },
];

export const sectionHeadings = {
  about: {
    label: { th: "เกี่ยวกับข้าพเจ้า", en: "About Me" },
    title: { th: "ประวัติและบทบาททางวิชาการ", en: "Academic Background & Roles" },
    description: {
      th: "ภาพรวมการปฏิบัติงานด้านเทคโนโลยีสารสนเทศ งานวิจัย และการบริการวิชาการ ณ มหาวิทยาลัยราชภัฏยะลา",
      en: "An overview of work in information technology, research, and academic service at Yala Rajabhat University.",
    },
  },
  featuredResearch: {
    label: { th: "ทิศทางงานวิจัย", en: "Research Focus" },
    title: { th: "ประเด็นที่กำลังศึกษาและพัฒนา", en: "Current Research Directions" },
    description: {
      th: "สาขาความเชี่ยวชาญและประเด็นวิจัยที่เชื่อมโยงกับภารกิจของมหาวิทยาลัยและบริบทท้องถิ่นในจังหวัดยะลา",
      en: "Areas of expertise and research aligned with the university's mission and the local context of Yala Province.",
    },
  },
  research: {
    label: { th: "สาขาความเชี่ยวชาญ", en: "Areas of Expertise" },
    title: { th: "ความสนใจทางวิชาการ", en: "Academic Interests" },
    description: {
      th: "สาขาวิชาที่ใช้เป็นกรอบในการทำวิจัย พัฒนาระบบ และถ่ายทอดความรู้",
      en: "Disciplines that frame my research, system development, and knowledge-sharing activities.",
    },
  },
  projects: {
    label: { th: "ระบบและโครงการ", en: "Systems & Projects" },
    title: { th: "ระบบสารสนเทศที่รับผิดชอบ", en: "Information Systems Portfolio" },
    description: {
      th: "ระบบดิจิทัลที่เกี่ยวข้องกับการพัฒนาและดูแลในภารกิจของมหาวิทยาลัยราชภัฏยะลา",
      en: "Digital systems developed and maintained as part of Yala Rajabhat University's operations.",
    },
  },
  training: {
    label: { th: "การอบรมและบรรยาย", en: "Training & Lectures" },
    title: { th: "การถ่ายทอดความรู้", en: "Knowledge Sharing" },
    description: {
      th: "หัวข้อที่บรรยายและอบรมแก่บุคลากร อาจารย์ และผู้เกี่ยวข้องของมหาวิทยาลัย",
      en: "Topics presented in lectures and training sessions for university staff, faculty, and stakeholders.",
    },
  },
  community: {
    label: { th: "งานมูลนิธิและชุมชน", en: "Foundation & Community" },
    title: { th: "การรับผิดชอบด้านสื่อและชุมชน", en: "Media & Community Responsibilities" },
    description: {
      th: "บทบาทในมูลนิธิเพื่อนมุสลิม นอกเหนือจากภารกิจหลักในสถาบันการศึกษา",
      en: "Responsibilities with the Muslim Friends Foundation, alongside my university duties.",
    },
  },
  contact: {
    label: { th: "ติดต่อ", en: "Contact" },
    title: { th: "ช่องทางติดต่อ", en: "Get in Touch" },
    description: {
      th: "สำหรับการติดต่องานวิจัย ความร่วมมือด้านระบบสารสนเทศ หรือการบรรยาย",
      en: "For research inquiries, information systems collaboration, or speaking engagements.",
    },
  },
};

export const aboutContent = {
  paragraphs: [
    {
      th: "ข้าพเจ้านายอักมาล เบนหวัน ปฏิบัติหน้าที่นักวิชาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฏยะลา โดยมีบทบาทสำคัญในการพัฒนาและดูแลระบบสารสนเทศของสถาบัน สนับสนุนงานวิจัย และถ่ายทอดความรู้ด้านเทคโนโลยีแก่บุคลากรภายในมหาวิทยาลัย",
      en: "I serve as a Computer Academic Officer at Yala Rajabhat University, where I develop and maintain institutional information systems, support research activities, and share knowledge on technology with university personnel.",
    },
    {
      th: "ด้านงานวิจัย ข้าพเจ้าให้ความสนใจกับปัญญาประดิษฐ์ การวิเคราะห์ข้อมูล แมชชีนเลิร์นนิง บิ๊กดาต้า การวิเคราะห์ความยากจน การวิเคราะห์เชิงพื้นที่ และการเปลี่ยนผ่านสู่ดิจิทัล โดยเฉพาะในบริบทของมหาวิทยาลัยและพื้นที่ภาคใต้",
      en: "My research interests include artificial intelligence, data analytics, machine learning, big data, poverty analytics, spatial analytics, and digital transformation—particularly within the university and Southern Thailand contexts.",
    },
    {
      th: "นอกจากภารกิจในมหาวิทยาลัย ข้าพเจ้าดำรงตำแหน่งหัวหน้าฝ่ายสื่อ มูลนิธิเพื่อนมุสลิม รับผิดชอบงานด้านสื่อสารและการเผยแพร่ข้อมูลเพื่อการพัฒนาชุมชน",
      en: "Beyond the university, I serve as Head of the Media Division at the Muslim Friends Foundation, overseeing communications and outreach for community development.",
    },
  ],
  skillsHeading: { th: "เครื่องมือและทักษะ", en: "Tools & Skills" },
  positionHeading: { th: "ข้อมูลตำแหน่ง", en: "Position Details" },
  positionLabels: {
    role: { th: "ตำแหน่ง", en: "Position" },
    institution: { th: "สังกัด", en: "Affiliation" },
    location: { th: "พื้นที่ปฏิบัติงาน", en: "Location" },
  },
};

export const featuredResearch = [
  {
    title: {
      th: "การวิเคราะห์ข้อมูลและปัญญาประดิษฐ์เพื่อสนับสนุนการบริหารมหาวิทยาลัย",
      en: "Data Analytics and AI for University Management Support",
    },
    summary: {
      th: "ศึกษาและพัฒนาแนวทางการนำข้อมูลและเทคนิคปัญญาประดิษฐ์มาใช้ในการสนับสนุนการตัดสินใจ การรายงานผล และการวางแผนของหน่วยงานในมหาวิทยาลัยราชภัฏยะลา",
      en: "Studying and developing approaches to apply data and AI techniques to support decision-making, reporting, and planning across university units.",
    },
    methods: ["Python", "Power BI", "Machine Learning"],
  },
  {
    title: {
      th: "โครงสร้างพื้นฐานบิ๊กดาต้าและคลังข้อมูลสถาบัน",
      en: "Institutional Big Data and Data Warehouse Infrastructure",
    },
    summary: {
      th: "ออกแบบและพัฒนาระบบรวบรวมข้อมูลขนาดใหญ่ของมหาวิทยาลัย เพื่อให้หน่วยงานสามารถเข้าถึง วิเคราะห์ และนำข้อมูลไปใช้ประโยชน์ร่วมกันได้อย่างเป็นระบบ",
      en: "Designing and developing the university's large-scale data infrastructure to enable systematic access, analysis, and shared use of institutional data.",
    },
    methods: ["Big Data", "Oracle", "MariaDB"],
  },
  {
    title: {
      th: "การวิเคราะห์เชิงพื้นที่และความยากจนในบริบทท้องถิ่น",
      en: "Spatial Analytics and Poverty Studies in Local Contexts",
    },
    summary: {
      th: "ใช้เครื่องมือวิเคราะห์เชิงพื้นที่และข้อมูลทางสังคมเศรษฐกิม เพื่อศึกษาประเด็นพัฒนาชุมชนและภูมิภาค โดยเฉพาะในพื้นที่จังหวัดยะลาและภาคใต้",
      en: "Applying spatial analytics and socioeconomic data to study community and regional development issues, especially in Yala and Southern Thailand.",
    },
    methods: ["GIS", "R", "SPSS"],
  },
];

export const researchInterests = [
  {
    title: { th: "ปัญญาประดิษฐ์", en: "Artificial Intelligence" },
    description: {
      th: "การประยุกต์ใช้ AI และ Prompt Engineering ในงานวิจัย งานบริหาร และการพัฒนาระบบของมหาวิทยาลัย",
      en: "Applying AI and prompt engineering in university research, administration, and system development.",
    },
    icon: "brain",
  },
  {
    title: { th: "การวิเคราะห์ข้อมูล", en: "Data Analytics" },
    description: {
      th: "การจัดการ วิเคราะห์ และสรุปผลข้อมูลเพื่อสนับสนุนการวิจัยและการรายงานของสถาบัน",
      en: "Managing, analyzing, and summarizing data to support institutional research and reporting.",
    },
    icon: "chart",
  },
  {
    title: { th: "แมชชีนเลิร์นนิง", en: "Machine Learning" },
    description: {
      th: "การสร้างและทดลองใช้แบบจำลองเชิงคาดการณ์สำหรับงานวิจัยและการวางแผน",
      en: "Building and experimenting with predictive models for research and planning.",
    },
    icon: "network",
  },
  {
    title: { th: "บิ๊กดาต้า", en: "Big Data" },
    description: {
      th: "การออกแบบโครงสร้างข้อมูลและระบบที่รองรับปริมาณข้อมูลขนาดใหญ่ของมหาวิทยาลัย",
      en: "Designing data architectures and systems that handle the university's large-scale datasets.",
    },
    icon: "database",
  },
  {
    title: { th: "การวิเคราะห์ความยากจน", en: "Poverty Analytics" },
    description: {
      th: "การใช้ข้อมูลเชิงปริมาณศึกษาประเด็นความยากจนและการพัฒนาสังคม",
      en: "Using quantitative data to study poverty and social development issues.",
    },
    icon: "community",
  },
  {
    title: { th: "การวิเคราะห์เชิงพื้นที่", en: "Spatial Analytics" },
    description: {
      th: "การนำข้อมูลเชิงพื้นที่และ GIS มาใช้ในงานวิจัยและการวางแผนพัฒนาพื้นที่",
      en: "Applying geospatial data and GIS in research and regional development planning.",
    },
    icon: "map",
  },
  {
    title: { th: "การเปลี่ยนผ่านสู่ดิจิทัล", en: "Digital Transformation" },
    description: {
      th: "การพัฒนาและปรับปรุงกระบวนการงานของมหาวิทยาลัยด้วยเทคโนโลยีดิจิทัล",
      en: "Developing and improving university workflows through digital technology.",
    },
    icon: "transform",
  },
];

export const projects = [
  {
    name: "YRU Track",
    description: {
      th: "ระบบติดตามและรายงานผลการดำเนินงานด้านวิชาการของมหาวิทยาลัยราชภัฏยะลา",
      en: "A system for tracking and reporting academic performance at Yala Rajabhat University.",
    },
    tags: ["ระบบเว็บ", "การวิเคราะห์ข้อมูล"],
    image: "/images/projects/yru-track.svg",
  },
  {
    name: "YRU Service",
    description: {
      th: "ระบบบริการดิจิทัลสำหรับงานบริการและธุรการของมหาวิทยาลัย",
      en: "A digital service platform for university administrative and student services.",
    },
    tags: ["บริการออนไลน์", "ระบบสารสนเทศ"],
    image: "/images/projects/yru-service.svg",
  },
  {
    name: "YRU Joins",
    description: {
      th: "แพลตฟอร์มเชื่อมโยงการมีส่วนร่วมของนักศึกษา บุคลากร และพันธมิตรของมหาวิทยาลัย",
      en: "A platform connecting student, staff, and partner engagement at the university.",
    },
    tags: ["ชุมชน", "การมีส่วนร่วม"],
    image: "/images/projects/yru-joins.svg",
  },
  {
    name: "YRU Big Data",
    description: {
      th: "โครงสร้างพื้นฐานบิ๊กดาต้าสำหรับรวบรวมและจัดการข้อมูลในระดับสถาบัน",
      en: "Big data infrastructure for institutional data aggregation and management.",
    },
    tags: ["Big Data", "คลังข้อมูล"],
    image: "/images/projects/yru-bigdata.svg",
  },
];

export const trainingTopics = [
  {
    title: {
      th: "การวิเคราะห์ข้อมูลสำหรับงานวิจัย",
      en: "Data Analytics for Research",
    },
    description: {
      th: "บรรยายและอบรมแนวทางการจัดการข้อมูล การวิเคราะห์เบื้องต้น และการนำเสนอผลสำหรับงานวิจัยของอาจารย์และนักวิจัย",
      en: "Lectures and workshops on data management, basic analysis, and presentation of research findings for faculty and researchers.",
    },
  },
  {
    title: {
      th: "Power BI สำหรับการรายงานผลของหน่วยงาน",
      en: "Power BI for Institutional Reporting",
    },
    description: {
      th: "ถ่ายทอดการสร้างแดชบอร์ดและรายงานเชิงภาพสำหรับหน่วยงานบริหารและวางแผนของมหาวิทยาลัย",
      en: "Teaching the creation of dashboards and visual reports for university management and planning units.",
    },
  },
  {
    title: {
      th: "ปัญญาประดิษฐ์และ Prompt Engineering",
      en: "AI and Prompt Engineering",
    },
    description: {
      th: "แนะนำการใช้งานเครื่องมือ AI อย่างมีประสิทธิภาพสำหรับงานวิชาการและงานธุรการของบุคลากรมหาวิทยาลัย",
      en: "Introducing effective use of AI tools for the academic and administrative work of university staff.",
    },
  },
  {
    title: {
      th: "การวิเคราะห์ข้อมูลเชิงพื้นที่",
      en: "Spatial Data Analysis",
    },
    description: {
      th: "บรรยายหลักการและเครื่องมือ GIS สำหรับงานวิจัยที่เกี่ยวข้องกับการพัฒนาพื้นที่และชุมชน",
      en: "Lectures on GIS principles and tools for research related to area and community development.",
    },
  },
];

export const communityWork = {
  role: {
    th: "หัวหน้าฝ่ายสื่อ",
    en: "Head of Media Division",
  },
  organization: {
    th: "มูลนิธิเพื่อนมุสลิม",
    en: "Muslim Friends Foundation",
  },
  description: {
    th: "รับผิดชอบงานด้านสื่อสาร การจัดทำและเผยแพร่เนื้อหา รวมถึงการประสานงานกิจกรรมที่ส่งเสริมการพัฒนาชุมชนและการมีส่วนร่วมของสาธารณะ โดยทำงานควบคู่ไปกับภารกิจในสถาบันการศึกษา",
    en: "Responsible for communications, content production and dissemination, and coordinating activities that promote community development and public engagement, alongside my university duties.",
  },
  highlights: [
    {
      th: "กำกับดูแลงานสื่อและการสื่อสารของมูลนิธิ",
      en: "Overseeing the foundation's media and communications work",
    },
    {
      th: "วางแผนและผลิตเนื้อหาสำหรับการเผยแพร่สู่สาธารณะ",
      en: "Planning and producing content for public outreach",
    },
    {
      th: "ประสานงานกิจกรรมเพื่อการพัฒนาชุมชน",
      en: "Coordinating community development activities",
    },
  ],
  contributionsHeading: {
    th: "หน้าที่หลัก",
    en: "Key Responsibilities",
  },
};

export const contactContent = {
  infoHeading: { th: "ข้อมูลติดต่อ", en: "Contact Information" },
  labels: {
    email: { th: "อีเมล", en: "Email" },
    institution: { th: "สังกัด", en: "Affiliation" },
    location: { th: "พื้นที่ปฏิบัติงาน", en: "Location" },
  },
  collaborateHeading: { th: "ติดต่อเพื่อความร่วมมือ", en: "Collaboration Inquiries" },
  collaborateText: {
    th: "หากท่านสนใจร่วมงานด้านงานวิจัย การพัฒนาระบบสารสนเทศ หรือการเชิญบรรยาย สามารถติดต่อได้ทางอีเมล",
    en: "For research collaboration, information systems development, or speaking invitations, please reach out via email.",
  },
  sendEmail: { th: "ส่งอีเมล", en: "Send Email" },
  downloadCv: { th: "ดาวน์โหลดประวัติ", en: "Download CV" },
};

export const footerContent = {
  rights: { th: "สงวนลิขสิทธิ์", en: "All rights reserved." },
};

export const skills = [
  "Python",
  "R",
  "Power BI",
  "SPSS",
  "Oracle",
  "MariaDB",
  "WordPress",
  "AI Prompt Engineering",
];

export const navLinks = [
  { href: "#home", label: { th: "หน้าแรก", en: "Home" } },
  { href: "#about", label: { th: "เกี่ยวกับ", en: "About" } },
  { href: "#featured-research", label: { th: "งานวิจัย", en: "Research" } },
  { href: "#projects", label: { th: "โครงการ", en: "Projects" } },
  { href: "#training", label: { th: "อบรม", en: "Training" } },
  { href: "#community", label: { th: "มูลนิธิ", en: "Foundation" } },
  { href: "#contact", label: { th: "ติดต่อ", en: "Contact" } },
];
