export const training = {
  th: {
    section: {
      label: "การอบรมและบรรยาย",
      title: "การถ่ายทอดความรู้",
      description:
        "หัวข้อที่บรรยายและอบรมแก่บุคลากร อาจารย์ และผู้เกี่ยวข้องของมหาวิทยาลัย",
    },
    topics: [
      {
        title: "การวิเคราะห์ข้อมูลสำหรับงานวิจัย",
        description:
          "บรรยายและอบรมแนวทางการจัดการข้อมูล การวิเคราะห์เบื้องต้น และการนำเสนอผลสำหรับงานวิจัยของอาจารย์และนักวิจัย",
      },
      {
        title: "Power BI สำหรับการรายงานผลของหน่วยงาน",
        description:
          "ถ่ายทอดการสร้างแดชบอร์ดและรายงานเชิงภาพสำหรับหน่วยงานบริหารและวางแผนของมหาวิทยาลัย",
      },
      {
        title: "ปัญญาประดิษฐ์และ Prompt Engineering",
        description:
          "แนะนำการใช้งานเครื่องมือ AI อย่างมีประสิทธิภาพสำหรับงานวิชาการและงานธุรการของบุคลากรมหาวิทยาลัย",
      },
      {
        title: "การวิเคราะห์ข้อมูลเชิงพื้นที่",
        description:
          "บรรยายหลักการและเครื่องมือ GIS สำหรับงานวิจัยที่เกี่ยวข้องกับการพัฒนาพื้นที่และชุมชน",
      },
    ],
  },
  en: {
    section: {
      label: "Training & Lectures",
      title: "Knowledge Sharing",
      description:
        "Topics presented in lectures and training sessions for university staff, faculty, and stakeholders.",
    },
    topics: [
      {
        title: "Data Analytics for Research",
        description:
          "Lectures and workshops on data management, basic analysis, and presentation of research findings for faculty and researchers.",
      },
      {
        title: "Power BI for Institutional Reporting",
        description:
          "Teaching the creation of dashboards and visual reports for university management and planning units.",
      },
      {
        title: "AI and Prompt Engineering",
        description:
          "Introducing effective use of AI tools for the academic and administrative work of university staff.",
      },
      {
        title: "Spatial Data Analysis",
        description:
          "Lectures on GIS principles and tools for research related to area and community development.",
      },
    ],
  },
};

export type Training = typeof training;
