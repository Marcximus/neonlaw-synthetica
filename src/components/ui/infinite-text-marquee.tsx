
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
    <div className="relative w-screen overflow-hidden" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
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
    </div>
  );
};
