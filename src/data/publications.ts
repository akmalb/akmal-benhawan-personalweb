export type PublicationItem = {
  title: string;
  venue?: string;
  year?: string;
  type?: string;
};

export const publications = {
  th: {
    section: {
      label: "ผลงานตีพิมพ์และการนำเสนอ",
      title: "ผลงานวิชาการและการนำเสนอ",
      description:
        "รายการผลงานวิชาการ บทความ และการนำเสนอผลงานวิจัย",
    },
    placeholder: "อยู่ระหว่างรวบรวมข้อมูลผลงานวิชาการ",
    items: [] as PublicationItem[],
  },
  en: {
    section: {
      label: "Publications & Presentations",
      title: "Publications & Presentations",
      description:
        "Academic publications, articles, and research presentations.",
    },
    placeholder: "Publication records are being updated.",
    items: [] as PublicationItem[],
  },
};

export type Publications = typeof publications;
