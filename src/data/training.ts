export const trainingSection = {
  label: { th: "การอบรมและบรรยาย", en: "Training & Lectures" },
  title: { th: "การถ่ายทอดความรู้", en: "Knowledge Sharing" },
  description: {
    th: "หัวข้อที่บรรยายและอบรมแก่บุคลากร อาจารย์ และผู้เกี่ยวข้องของมหาวิทยาลัย",
    en: "Topics presented in lectures and training sessions for university staff, faculty, and stakeholders.",
  },
};

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

export type TrainingTopic = (typeof trainingTopics)[number];
