export const contact = {
  th: {
    section: {
      label: "ติดต่อ",
      title: "ช่องทางติดต่อ",
      description:
        "สำหรับการติดต่องานวิจัย ความร่วมมือด้านระบบสารสนเทศ หรือการบรรยาย",
    },
    infoHeading: "ข้อมูลติดต่อ",
    labels: {
      email: "อีเมล",
      institution: "สังกัด",
      location: "พื้นที่ปฏิบัติงาน",
    },
    purposesHeading: "วัตถุประสงค์การติดต่อ",
    purposes: [
      { th: "ความร่วมมือด้านงานวิจัย", en: "Research Collaboration" },
      { th: "การอบรมและบรรยายวิชาการ", en: "Academic Training / Workshops" },
      { th: "การพัฒนาระบบสารสนเทศ", en: "Information Systems Development" },
      { th: "การวิเคราะห์ข้อมูลสถาบัน", en: "Institutional Data Analytics" },
    ],
    collaborateHeading: "ติดต่อเพื่อความร่วมมือ",
    collaborateText:
      "หากท่านสนใจร่วมงานด้านงานวิจัย การพัฒนาระบบสารสนเทศ หรือการเชิญบรรยาย สามารถติดต่อได้ทางอีเมล",
    sendEmail: "ส่งอีเมล",
    downloadCv: "ดู CV",
  },
  en: {
    section: {
      label: "Contact",
      title: "Get in Touch",
      description:
        "For research inquiries, information systems collaboration, or speaking engagements.",
    },
    infoHeading: "Contact Information",
    labels: {
      email: "Email",
      institution: "Affiliation",
      location: "Location",
    },
    purposesHeading: "Contact Purposes",
    purposes: [
      { th: "ความร่วมมือด้านงานวิจัย", en: "Research Collaboration" },
      { th: "การอบรมและบรรยายวิชาการ", en: "Academic Training / Workshops" },
      { th: "การพัฒนาระบบสารสนเทศ", en: "Information Systems Development" },
      { th: "การวิเคราะห์ข้อมูลสถาบัน", en: "Institutional Data Analytics" },
    ],
    collaborateHeading: "Collaboration Inquiries",
    collaborateText:
      "For research collaboration, information systems development, or speaking invitations, please reach out via email.",
    sendEmail: "Send Email",
    downloadCv: "View CV",
  },
};

export type Contact = typeof contact;
