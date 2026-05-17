"use client";

import { useEffect, useRef, useState } from "react";

const text = "I engineer scalable web applications and robust cloud infrastructures by combining clean code, modern architecture, and strong problem-solving to deliver reliable and impactful digital solutions.";
const words = text.split(" ");

export default function ScrollRevealText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start when the element enters the bottom of the viewport
      // End when the element reaches near the top (so it takes a longer scroll to finish)
      const start = windowHeight - 50; 
      const end = windowHeight / 4; // Ends when it reaches 25% from the top
      
      let p = (start - rect.top) / (start - end);
      p = Math.max(0, Math.min(1, p));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="max-w-2xl text-center z-10 px-6 md:px-0 mt-8 mb-16">
      <h2 className="text-2xl md:text-4xl font-semibold leading-snug md:leading-relaxed">
        {words.map((word, i) => {
          const step = i / words.length;
          // Calculate if this specific word should be active
          const isActive = progress > step;
          return (
            <span 
              key={i} 
              className={`transition-colors duration-300 ${isActive ? "text-slate-900" : "text-slate-300"}`}
            >
              {word}{" "}
            </span>
          );
        })}
      </h2>
    </div>
  );
}
