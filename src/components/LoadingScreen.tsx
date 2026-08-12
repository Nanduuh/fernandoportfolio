import { useEffect, useState } from "react";

const lines = [
  "Initializing Fernando.dev...",
  "Loading projects...",
  "Compiling creativity...",
  "Ready.",
];

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen ${done ? "is-done" : ""}`} aria-hidden={done}>
      <div className="loading-terminal">
        {lines.map((line, index) => (
          <span key={line} style={{ animationDelay: `${index * 220}ms` }}>
            <b>{">"}</b> {line}
          </span>
        ))}
      </div>
    </div>
  );
}
