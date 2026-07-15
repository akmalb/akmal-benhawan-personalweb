# สรุปสถานะโปรเจกต์ — Academic Portfolio

**อัปเดตล่าสุด:** 15 กรกฎาคม 2026  
**ขั้นปัจจุบัน:** Version 1.0 — พร้อมใช้งาน / พร้อม deploy ~95%

เว็บพอร์ตโฟลีโอวิชาการของ **อักมาล เบ็ญหาวัน** สร้างครบแล้ว เหลืองานเล็กน้อยก่อนปิดเวอร์ชันเต็ม

---

## ใช้อะไรทำบ้าง (Tech Stack)

| เทคโนโลยี | ใช้ทำอะไร |
|-----------|----------|
| **Next.js 16** (App Router) | Framework เว็บ |
| **React 19 + TypeScript** | UI และ type safety |
| **Tailwind CSS v4** | สไตล์ / ธีม |
| **`src/data/*`** | เก็บเนื้อหาทั้งหมด (แยกจาก UI) |
| **Vercel Analytics** | เก็บสถิติผู้เข้าชม |
| **Vercel** (แนะนำ) | Deploy production |

---

## มีโครงสร้างอย่างไร

### โครงสร้างโค้ดหลัก

```
app/
  page.tsx              ← ประกอบ section ทั้งหมด
  layout.tsx            ← font, theme, Analytics
  components/           ← Hero, About, Research, ...
  globals.css           ← สี / spacing / theme

src/data/
  profile.ts            ← โปรไฟล์, CV, social, nav
  research.ts
  publications.ts
  projects.ts
  training.ts
  community.ts
  contact.ts

public/
  cv/Akmal-Benhawan-CV.pdf
  images/...
```

### ลำดับหน้าเว็บ

```
Navbar
 → Hero
 → About (+ Core Expertise)
 → Research
 → Publications
 → Projects
 → Training
 → Foundation
 → Contact
 → Footer
```

### หลักการออกแบบข้อมูล

- **UI แยกจาก content** — แก้ข้อความแก้ที่ `src/data` เป็นหลัก
- **สองภาษา TH/EN** ในหน้าเดียว
- **ซ่อน Publications** อัตโนมัติถ้าไม่มีรายการ

---

## ทำอะไรไปแล้วบ้าง

### สำเร็จแล้ว

1. สร้างเว็บ academic portfolio ครบทุก section
2. แยก data layer + bilingual layout
3. ปรับ UX: ลดข้อมูลซ้ำ, รวมบทบาทเป็น Core Expertise
4. เปิด Publications ด้วยผลงานจริง 2 รายการ (layout แบบ CV)
5. Social: Scholar, LinkedIn, Email
6. CV path ถูกต้อง (`/cv/Akmal-Benhawan-CV.pdf`)
7. ปุ่ม CV เปิดในแท็บใหม่ + ข้อความ **ดู CV / View CV**
8. ติดตั้ง Vercel Analytics

### ยังค้างเล็กน้อย

| รายการ | สถานะ |
|--------|--------|
| Facebook / YouTube URL | ยังว่าง (`href: null`) |
| Deploy production | ยังต้องทำ/ยืนยัน |
| ผลงานตีพิมพ์เพิ่ม | เพิ่มใน `publications.ts` เมื่อมี |

---

## ตอนนี้ทำถึงขั้นไหน

| ขั้น | สถานะ |
|------|--------|
| 1. สร้างโครงเว็บ | เสร็จ |
| 2. ใส่เนื้อหา + สองภาษา | เสร็จ |
| 3. ปรับ UX / ลดความซ้ำ | เสร็จ |
| 4. Publications + CV + Analytics | เสร็จ |
| 5. **Version 1.0 Soft Launch** | **อยู่ตรงนี้** |
| 6. Production deploy + polish ต่อ | ขั้นถัดไป |

---

## แผนดำเนินต่อ (แนะนำ)

1. **Deploy บน Vercel** แล้วทดสอบ CV / Publications / Analytics จริง
2. ใส่ URL **Facebook / YouTube** (ถ้ามี) ใน `profile.ts`
3. เพิ่มผลงานใน `publications.ts` เมื่อมีรายการใหม่
4. (ทางเลือก) ปรับรูปโปรไฟล์จริง / polish เล็กน้อยหลัง go-live

---

## สรุปสั้น ๆ

โค้ดและเนื้อหาหลักพร้อมเป็น Version 1.0 แล้ว  
ขั้นถัดไปที่สำคัญที่สุดคือ **deploy แล้วทดสอบบน production**
