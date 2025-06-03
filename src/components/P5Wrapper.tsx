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
    if (containerRef.current && !canvasRef.current) {
      canvasRef.current = new p5(sketch, containerRef.current);
    }

    return () => {
      if (canvasRef.current) {
        canvasRef.current.remove();
        canvasRef.current = null;
      }
    };
  }, [sketch]);

  return <div ref={containerRef} className={className} />;
};