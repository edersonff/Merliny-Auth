import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main
        style={{
          height: "100%",
        }}
      >
        {children}
      </main>
    </>
  );
}
