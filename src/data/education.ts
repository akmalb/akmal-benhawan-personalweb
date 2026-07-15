export type EducationItem = {
  degree: string;
  institution: string;
  year: string;
  detail?: string;
};

export type EducationEntry = {
  th: EducationItem;
  en: EducationItem;
};

export const education = {
  heading: {
    th: "ประวัติการศึกษา",
    en: "Education",
  },
  items: [
    {
      th: {
        degree: "กำลังศึกษาระดับปริญญาเอก สาขาวิทยาการข้อมูล",
        institution: "มหาวิทยาลัยสงขลานครินทร์",
        year: "ปัจจุบัน",
        detail:
          "มุ่งเน้นการวิจัยด้านการพยากรณ์ความยากจนหลายมิติด้วย Machine Learning และข้อมูลเชิงพื้นที่",
      },
      en: {
        degree: "Doctoral Study in Data Science",
        institution: "Prince of Songkla University",
        year: "Present",
        detail:
          "Research focus on multidimensional poverty prediction using machine learning and spatial data.",
      },
    },
    {
      th: {
        degree: "วิทยาศาสตรมหาบัณฑิต สาขาการจัดการเทคโนโลยีสารสนเทศ",
        institution: "มหาวิทยาลัยสงขลานครินทร์",
        year: "พ.ศ. 2566",
      },
      en: {
        degree: "Master of Science in Information Technology Management",
        institution: "Prince of Songkla University",
        year: "2023",
      },
    },
    {
      th: {
        degree: "วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์",
        institution: "มหาวิทยาลัยราชภัฏยะลา",
        year: "พ.ศ. 2550",
      },
      en: {
        degree: "Bachelor of Science in Computer Science",
        institution: "Yala Rajabhat University",
        year: "2007",
      },
    },
  ] satisfies EducationEntry[],
};

export type Education = typeof education;
