"use client";
import { cn } from "@/lib/utils";

export default function WordPullUp({
  words,
  className
}) {
  return (
    <h1
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      {words.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            animation: `wordPull 0.4s ${i * 0.04 + 0.3}s both`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}
