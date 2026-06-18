import type { Bilingual } from "./types";

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

export const navLinks = [
  { href: "#home", label: { th: "หน้าแรก", en: "Home" } },
  { href: "#about", label: { th: "เกี่ยวกับ", en: "About" } },
  { href: "#featured-research", label: { th: "งานวิจัย", en: "Research" } },
  { href: "#projects", label: { th: "โครงการ", en: "Projects" } },
  { href: "#training", label: { th: "อบรม", en: "Training" } },
  { href: "#community", label: { th: "มูลนิธิ", en: "Foundation" } },
  { href: "#contact", label: { th: "ติดต่อ", en: "Contact" } },
];

export const aboutSection = {
  label: { th: "เกี่ยวกับข้าพเจ้า", en: "About Me" },
  title: { th: "ประวัติและบทบาททางวิชาการ", en: "Academic Background & Roles" },
  description: {
    th: "ภาพรวมการปฏิบัติงานด้านเทคโนโลยีสารสนเทศ งานวิจัย และการบริการวิชาการ ณ มหาวิทยาลัยราชภัฏยะลา",
    en: "An overview of work in information technology, research, and academic service at Yala Rajabhat University.",
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

export const contactSection = {
  label: { th: "ติดต่อ", en: "Contact" },
  title: { th: "ช่องทางติดต่อ", en: "Get in Touch" },
  description: {
    th: "สำหรับการติดต่องานวิจัย ความร่วมมือด้านระบบสารสนเทศ หรือการบรรยาย",
    en: "For research inquiries, information systems collaboration, or speaking engagements.",
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

export type PersonalInfo = typeof personalInfo;
export type AboutContent = typeof aboutContent;
export type ContactContent = typeof contactContent;
