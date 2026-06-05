"use client";

import { useEffect, useState } from "react";

// Cycles through words with a typewriter effect. The first word is
// rendered immediately (and on the server) so there's no empty flash
// and SSR markup is meaningful.
export default function TypedText({
  words,
  className,
}: {
  words: readonly string[];
  className?: string;
}) {
  const [text, setText] = useState(words[0] ?? "");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    let delay = deleting ? 45 : 90;

    if (!deleting && text === current) {
      delay = 1600; // hold full word
      const t = setTimeout(() => setDeleting(true), delay);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
      );
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, wordIdx, words]);

  return (
    <span className={className}>
      {text}
      <span className="caret" aria-hidden />
    </span>
  );
}
