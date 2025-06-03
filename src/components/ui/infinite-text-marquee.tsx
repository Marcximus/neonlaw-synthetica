
"use client";
 
import * as React from "react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
 
type InfiniteTextMarqueeProps = {
  text?: string;
  speed?: number;
  fontSize?: string;
  textColor?: string;
  hoverColor?: string;
};
 
export const InfiniteTextMarquee: React.FC<InfiniteTextMarqueeProps> = ({
  text = "Let's Get Started",
  speed = 30,
  fontSize = "2rem",
  textColor = "",
  hoverColor = "",
}) => {
  const repeatedText = Array(10).fill(text).join(" • ") + " •";
 
  return (
    <main className="relative w-full overflow-hidden">
      <motion.div
        className="whitespace-nowrap"
        animate={{
          x: [0, -1000],
          transition: {
            repeat: Infinity,
            duration: speed,
            ease: "linear",
          },
        }}
      >
        <span
          className={`font-medium tracking-tight py-4 m-0 transition-all hover:opacity-80 ${
            textColor ? "" : "text-gray-400"
          }`}
          style={{
            fontSize,
            color: textColor || undefined,
            '--hover-color': hoverColor || '#F97316',
          } as React.CSSProperties & { '--hover-color': string }}
          onMouseEnter={(e) => {
            if (hoverColor) {
              e.currentTarget.style.color = hoverColor;
            }
          }}
          onMouseLeave={(e) => {
            if (textColor) {
              e.currentTarget.style.color = textColor;
            } else {
              e.currentTarget.style.color = '';
            }
          }}
        >
          {repeatedText}
        </span>
      </motion.div>
    </main>
  );
};
