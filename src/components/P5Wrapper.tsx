
import { useEffect, useRef } from 'react';
import p5 from 'p5';

interface P5WrapperProps {
  sketch: (p: p5) => void;
  className?: string;
}

export const P5Wrapper = ({ sketch, className = "" }: P5WrapperProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<p5 | null>(null);

  useEffect(() => {
    console.log("P5Wrapper useEffect running...");
    
    if (containerRef.current && !canvasRef.current) {
      try {
        console.log("Creating p5 instance...");
        canvasRef.current = new p5(sketch, containerRef.current);
        console.log("p5 instance created successfully");
      } catch (error) {
        console.error("Error creating p5 instance:", error);
      }
    }

    return () => {
      if (canvasRef.current) {
        try {
          console.log("Cleaning up p5 instance...");
          canvasRef.current.remove();
          canvasRef.current = null;
        } catch (error) {
          console.error("Error cleaning up p5 instance:", error);
        }
      }
    };
  }, [sketch]);

  return <div ref={containerRef} className={className} />;
};
