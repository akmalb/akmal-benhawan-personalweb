export type PublicationItem = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: "Journal Article" | "Conference Paper" | "Research Article";
  url?: string;
};

export const publications = {
  th: {
    label: "ผลงานวิชาการ",
    title: "ผลงานวิชาการและการนำเสนอ",
    subtitle: "Publications & Presentations",
    description:
      "ผลงานประชุมวิชาการและบทความที่เกี่ยวข้องกับการวิเคราะห์ข้อมูล การเรียนรู้ของเครื่อง และการประยุกต์ใช้เทคโนโลยีสารสนเทศ",
    emptyText: "อยู่ระหว่างรวบรวมข้อมูลผลงานวิชาการ",
    items: [
      {
        title: "Forecasting water inflow for bang lang dam",
        authors:
          "Akmal Benhawan, Sureena Matayong, Chidchanok Choksuchat",
        venue:
          "2022 IEEE 12th Annual Computing and Communication Workshop and Conference (CCWC)",
        year: "2022",
        type: "Conference Paper",
        url: "https://ieeexplore.ieee.org/abstract/document/9720865",
      },
      {
        title:
          "Self-Care Problems Classifications with SCADI Dataset: The Tree-Based Feature Selection",
        authors:
          "Sureena Matayong, Akmal Benhawan, Teeradej Phetkaew",
        venue:
          "2025 10th International Conference on Big Data Analytics (ICBDA)",
        year: "2025",
        type: "Conference Paper",
        url: "https://ieeexplore.ieee.org/abstract/document/11211245",
      },
    ] satisfies PublicationItem[],
  },

  en: {
    label: "Publications",
    title: "Publications & Presentations",
    subtitle: "Academic Publications",
    description:
      "Selected conference papers and academic outputs related to data analytics, machine learning, and applied information technology.",
    emptyText: "Publication records are being updated.",
    items: [
      {
        title: "Forecasting water inflow for bang lang dam",
        authors:
          "Akmal Benhawan, Sureena Matayong, Chidchanok Choksuchat",
        venue:
          "2022 IEEE 12th Annual Computing and Communication Workshop and Conference (CCWC)",
        year: "2022",
        type: "Conference Paper",
        url: "https://ieeexplore.ieee.org/abstract/document/9720865",
      },
      {
        title:
          "Self-Care Problems Classifications with SCADI Dataset: The Tree-Based Feature Selection",
        authors:
          "Sureena Matayong, Akmal Benhawan, Teeradej Phetkaew",
        venue:
          "2025 10th International Conference on Big Data Analytics (ICBDA)",
        year: "2025",
        type: "Conference Paper",
        url: "https://ieeexplore.ieee.org/abstract/document/11211245",
      },
    ] satisfies PublicationItem[],
  },
};

export type Publications = typeof publications;