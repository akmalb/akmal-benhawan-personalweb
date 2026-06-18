export const projects = {
  th: {
    section: {
      label: "ระบบและโครงการ",
      title: "ระบบสารสนเทศที่รับผิดชอบ",
      description:
        "ระบบดิจิทัลที่เกี่ยวข้องกับการพัฒนาและดูแลในภารกิจของมหาวิทยาลัยราชภัฏยะลา",
    },
    items: [
      {
        description:
          "ระบบติดตามและรายงานผลการดำเนินงานด้านวิชาการของมหาวิทยาลัยราชภัฏยะลา",
        tags: ["ระบบเว็บ", "การวิเคราะห์ข้อมูล"],
      },
      {
        description:
          "ระบบบริการดิจิทัลสำหรับงานบริการและธุรการของมหาวิทยาลัย",
        tags: ["บริการออนไลน์", "ระบบสารสนเทศ"],
      },
      {
        description:
          "แพลตฟอร์มเชื่อมโยงการมีส่วนร่วมของนักศึกษา บุคลากร และพันธมิตรของมหาวิทยาลัย",
        tags: ["ชุมชน", "การมีส่วนร่วม"],
      },
      {
        description:
          "โครงสร้างพื้นฐานบิ๊กดาต้าสำหรับรวบรวมและจัดการข้อมูลในระดับสถาบัน",
        tags: ["Big Data", "คลังข้อมูล"],
      },
    ],
  },
  en: {
    section: {
      label: "Systems & Projects",
      title: "Information Systems Portfolio",
      description:
        "Digital systems developed and maintained as part of Yala Rajabhat University's operations.",
    },
    items: [
      {
        description:
          "A system for tracking and reporting academic performance at Yala Rajabhat University.",
        tags: [],
      },
      {
        description:
          "A digital service platform for university administrative and student services.",
        tags: [],
      },
      {
        description:
          "A platform connecting student, staff, and partner engagement at the university.",
        tags: [],
      },
      {
        description:
          "Big data infrastructure for institutional data aggregation and management.",
        tags: ["Big Data"],
      },
    ],
  },
  shared: [
    { name: "YRU Track", image: "/images/projects/yru-track.svg" },
    { name: "YRU Service", image: "/images/projects/yru-service.svg" },
    { name: "YRU Joins", image: "/images/projects/yru-joins.svg" },
    { name: "YRU Big Data", image: "/images/projects/yru-bigdata.svg" },
  ],
};

export type Projects = typeof projects;
