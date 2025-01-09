import { useEffect, useRef } from 'react';
import p5 from 'p5';

export const AnimatedHeroText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<p5 | null>(null);

  useEffect(() => {
    if (!containerRef.current || canvasRef.current) return;

    const sketch = (p: p5) => {
      let font: p5.Font;
      let particles: Array<{
        pos: p5.Vector;
        vel: p5.Vector;
        size: number;
        color: string;
      }> = [];
      const colors = ['#00F0FF', '#9B6DFF', '#FF2E93'];
      
      p.preload = () => {
        font = p.loadFont('https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7oUXsrPMBTTA.woff2');
      };

      p.setup = () => {
        p.createCanvas(p.windowWidth, 200);
        p.textFont(font);
        p.textSize(48);
        p.textAlign(p.CENTER, p.CENTER);
        
        // Create particles from text points
        const points = font.textToPoints('Jura', p.width / 2 - 60, 100, 48, {
          sampleFactor: 0.1
        });
        
        points.forEach(point => {
          particles.push({
            pos: p.createVector(point.x, point.y),
            vel: p.createVector(p.random(-1, 1), p.random(-1, 1)),
            size: p.random(2, 4),
            color: colors[Math.floor(p.random(0, colors.length))]
          });
        });
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
          
          // Bounce off edges
          if (particle.pos.x < 0 || particle.pos.x > p.width) particle.vel.x *= -1;
          if (particle.pos.y < 0 || particle.pos.y > p.height) particle.vel.y *= -1;
          
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

  return <div ref={containerRef} className="w-full h-[200px]" />;
};