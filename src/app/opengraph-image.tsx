import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "#06070c",
          backgroundImage:
            "radial-gradient(700px 500px at 15% 0%, rgba(139,92,246,0.45), transparent 60%), radial-gradient(700px 500px at 100% 100%, rgba(56,189,248,0.35), transparent 60%)",
          color: "#eef0f5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#a78bfa",
            marginBottom: 28,
          }}
        >
          {profile.role}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -3,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 38,
            color: "#a2a7b5",
            marginTop: 30,
            maxWidth: 900,
          }}
        >
          Building intelligent systems with Vision AI &amp; LLMs
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#6b7080",
            marginTop: 60,
          }}
        >
          bhavyaverdia.me
        </div>
      </div>
    ),
    { ...size }
  );
}
