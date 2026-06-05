"use client";

import { useEffect, useState } from "react";

export default function TypedText({ words }: { words: string[] }) {
  const [wordIdx, setWordIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    let delay = deleting ? 45 : 90;

    if (!deleting && text === current) {
      delay = 1400; // pause at full word
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIdx((i) => i + 1);
      delay = 200;
    }

    const id = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(id);
  }, [text, deleting, wordIdx, words]);

  return (
    <span>
      <span style={{ color: "var(--cyan-bright)" }}>{text}</span>
      <span className="caret">&nbsp;</span>
    </span>
  );
}
