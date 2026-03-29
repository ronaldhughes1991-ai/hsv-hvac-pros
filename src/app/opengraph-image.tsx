import { ImageResponse } from "next/og";

export const alt =
  "HSV HVAC Pros — Trusted HVAC Experts in Huntsville & North Alabama";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e40af 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 20px",
            borderRadius: "999px",
            border: "1px solid rgba(96,165,250,0.4)",
            backgroundColor: "rgba(59,130,246,0.15)",
            fontSize: "20px",
            color: "#93c5fd",
            marginBottom: "30px",
          }}
        >
          Serving Athens, Huntsville & North Alabama
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "10px",
          }}
        >
          HSV HVAC Pros
        </div>

        <div
          style={{
            fontSize: "48px",
            fontWeight: 800,
            lineHeight: 1.2,
            color: "#93c5fd",
            marginBottom: "30px",
          }}
        >
          Residential HVAC Experts
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "24px",
            color: "#cbd5e1",
            lineHeight: 1.5,
            maxWidth: "700px",
            marginBottom: "40px",
          }}
        >
          AC Repair • Heating Maintenance • Emergency 24/7 Service • System
          Installation
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            fontSize: "22px",
            fontWeight: 700,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "32px" }}>15+</span>
            <span
              style={{
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#93c5fd",
              }}
            >
              Years Experience
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "32px" }}>4,800+</span>
            <span
              style={{
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#93c5fd",
              }}
            >
              Homes Served
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "32px" }}>4.9/5</span>
            <span
              style={{
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#93c5fd",
              }}
            >
              Google Rating
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "32px" }}>(256) 588-4712</span>
            <span
              style={{
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#93c5fd",
              }}
            >
              Call Now
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
