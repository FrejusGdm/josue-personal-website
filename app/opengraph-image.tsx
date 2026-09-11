import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated share image (1200x630) so link previews never scrape a random
// project screenshot. Deliberately typographic: no photo assets to maintain.
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
          padding: "96px",
          backgroundColor: "#1c1917",
          color: "#fafaf9",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            fontSize: 44,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#a8a29e",
            marginBottom: 24,
          }}
        >
          Josué Godeme
        </div>
        <div
          style={{
            fontSize: 72,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Researcher and builder, working on AI that speaks everyone&apos;s
          language.
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 32,
            color: "#a8a29e",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          Multilingual AI · Voice · Edge AI for education — josuegodeme.com
        </div>
      </div>
    ),
    { ...size }
  );
}
