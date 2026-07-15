import { ImageResponse } from "next/og";

export const alt =
  "อักมาล เบ็ญหาวัน | Computer Technical Officer, Professional Level — Yala Rajabhat University";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

async function loadGoogleFont(family: string, weight: number, text: string) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await fetch(cssUrl).then((res) => res.text());
  const match = css.match(/src: url\(([^)]+)\) format\('(opentype|truetype|woff2)'\)/);

  if (!match) {
    throw new Error(`Failed to locate font URL for ${family}`);
  }

  const fontUrl = match[1];
  return fetch(fontUrl).then((res) => res.arrayBuffer());
}

export default async function Image() {
  const thaiText =
    "อักมาล เบ็ญหาวัน นักวิชาการคอมพิวเตอร์ ชำนาญการ";
  const englishText =
    "Akmal Benhawan Yala Rajabhat University AI Data Analytics Information Systems";

  const [notoThaiBold, notoSansSemiBold] = await Promise.all([
    loadGoogleFont("Noto Sans Thai", 700, thaiText),
    loadGoogleFont("Noto Sans", 600, englishText),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(145deg, #eef2f8 0%, #f4f6f9 45%, #ffffff 100%)",
          color: "#0c1222",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "6px",
              borderRadius: "999px",
              background: "#1a3a6b",
            }}
          />
          <div
            style={{
              fontSize: "24px",
              fontFamily: "Noto Sans",
              color: "#5c6b7f",
              letterSpacing: "0.02em",
            }}
          >
            Academic Portfolio
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontFamily: "Noto Sans Thai",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#0c1222",
            }}
          >
            อักมาล เบ็ญหาวัน
          </div>
          <div
            style={{
              fontSize: "36px",
              fontFamily: "Noto Sans",
              fontWeight: 600,
              color: "#1a3a6b",
              lineHeight: 1.3,
            }}
          >
            Akmal Benhawan
          </div>
          <div
            style={{
              marginTop: "8px",
              fontSize: "30px",
              fontFamily: "Noto Sans Thai",
              fontWeight: 700,
              color: "#0c1222",
              lineHeight: 1.35,
            }}
          >
            นักวิชาการคอมพิวเตอร์ ชำนาญการ
          </div>
          <div
            style={{
              fontSize: "26px",
              fontFamily: "Noto Sans",
              color: "#5c6b7f",
              lineHeight: 1.4,
            }}
          >
            Yala Rajabhat University
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "4px",
              borderRadius: "999px",
              background: "#1a3a6b",
            }}
          />
          <div
            style={{
              fontSize: "22px",
              fontFamily: "Noto Sans",
              color: "#3d6ba8",
              letterSpacing: "0.04em",
            }}
          >
            AI • Data Analytics • Information Systems
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Noto Sans Thai",
          data: notoThaiBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "Noto Sans",
          data: notoSansSemiBold,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
