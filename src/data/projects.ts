export const projectsSection = {
  label: { th: "ระบบและโครงการ", en: "Systems & Projects" },
  title: { th: "ระบบสารสนเทศที่รับผิดชอบ", en: "Information Systems Portfolio" },
  description: {
    th: "ระบบดิจิทัลที่เกี่ยวข้องกับการพัฒนาและดูแลในภารกิจของมหาวิทยาลัยราชภัฏยะลา",
    en: "Digital systems developed and maintained as part of Yala Rajabhat University's operations.",
  },
};

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

export type Project = (typeof projects)[number];
