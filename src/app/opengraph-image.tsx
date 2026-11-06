import { ImageResponse } from "next/og";
export const alt = "Furniture Catalog Rescue: Every price in its place.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "58px 68px",
        background: "#F4F3EE",
        color: "#232622",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 26, color: "#3450CB" }}>
        Furniture Catalog Rescue
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 112,
          lineHeight: 0.98,
          letterSpacing: -7,
        }}
      >
        <span>Every price</span>
        <span>in its place.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #a9afa4",
          paddingTop: 22,
          fontSize: 22,
        }}
      >
        <span>Reviewed Shopify furniture price changes.</span>
        <span style={{ color: "#3450CB" }}>Start with ten rows.</span>
      </div>
    </div>,
    size,
  );
}
