"use client";

import { useEffect, useState } from "react";

// Live clock for the top instrument bar. Renders a stable placeholder
// on the server to avoid hydration mismatch, then ticks client-side.
export default function Clock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="tabular" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
      {time ?? "––:––:––"}
    </span>
  );
}
