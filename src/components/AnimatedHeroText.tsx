import { useEffect, useRef, useState } from 'react';
import p5 from 'p5';

export const AnimatedHeroText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<p5 | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current || canvasRef.current) return;

    const sketch = (p: p5) => {
      let particles: Array<{
        pos: p5.Vector;
        vel: p5.Vector;
        size: number;
        color: string;
      }> = [];
      const colors = ['#00F0FF', '#9B6DFF', '#FF2E93'];
      
      p.setup = () => {
        p.createCanvas(p.windowWidth, 200);
        p.textSize(48);
        p.textAlign(p.CENTER, p.CENTER);
        
        // Create particles directly using the current text
        const text = 'Jura';
        const textWidth = p.textWidth(text);
        const x = p.width / 2 - textWidth / 2;
        
        // Create a grid of particles around the text area
        for (let i = 0; i < 100; i++) {
          particles.push({
            pos: p.createVector(
              x + p.random(0, textWidth),
              100 + p.random(-20, 20)
            ),
            vel: p.createVector(p.random(-1, 1), p.random(-1, 1)),
            size: p.random(2, 4),
            color: colors[Math.floor(p.random(0, colors.length))]
          });
        }
        
        setIsLoading(false);
      };

      p.draw = () => {
        p.clear();
        
        // Draw connecting lines
        p.stroke(255, 20);
        particles.forEach((particle, i) => {
          particles.slice(i + 1).forEach(other => {
            const d = p.dist(particle.pos.x, particle.pos.y, other.pos.x, other.pos.y);
            if (d < 50) {
              p.line(particle.pos.x, particle.pos.y, other.pos.x, other.pos.y);
            }
          });
        });

        // Update and draw particles
        particles.forEach(particle => {
          particle.pos.add(particle.vel);
          
          // Bounce off edges with some padding
          if (particle.pos.x < p.width * 0.3 || particle.pos.x > p.width * 0.7) particle.vel.x *= -1;
          if (particle.pos.y < 80 || particle.pos.y > 120) particle.vel.y *= -1;
          
          p.noStroke();
          p.fill(particle.color);
          p.circle(particle.pos.x, particle.pos.y, particle.size);
        });

        // Draw glowing text
        p.fill(255);
        p.noStroke();
        p.drawingContext.shadowBlur = 20;
        p.drawingContext.shadowColor = '#00F0FF';
        p.text('Jura', p.width / 2, 100);
        p.drawingContext.shadowBlur = 0;
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, 200);
      };
    };

    canvasRef.current = new p5(sketch, containerRef.current);

    return () => {
      if (canvasRef.current) {
        canvasRef.current.remove();
        canvasRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[200px]">
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white animate-pulse">Jura</h1>
        </div>
      )}
    </div>
  );
};