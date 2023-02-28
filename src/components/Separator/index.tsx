import React from "react";

export default function S({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) {
  if (width) {
    return <div style={{ width: width, height: "100%" }} />;
  }
  return <div style={{ width: "100%", height: height }} />;
}
