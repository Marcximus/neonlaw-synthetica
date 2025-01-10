import { useEffect, useRef } from 'react';
import p5 from 'p5';

const ProfileBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      const particles: Array<{ x: number; y: number; speed: number }> = [];
      const numParticles = 50;

      p.setup = () => {
        const canvas = p.createCanvas(300, 300);
        canvas.position(0, 0);
        
        // Initialize particles
        for (let i = 0; i < numParticles; i++) {
          particles.push({
            x: p.random(p.width),
            y: p.random(p.height),
            speed: p.random(0.5, 2)
          });
        }
      };

      p.draw = () => {
        p.clear();
        
        // Draw particles and connections
        particles.forEach((particle, index) => {
          // Update particle position
          particle.y -= particle.speed;
          if (particle.y < 0) particle.y = p.height;

          // Draw particle
          p.stroke(255, 255, 255, 50);
          p.strokeWeight(2);
          p.point(particle.x, particle.y);

          // Connect nearby particles
          particles.slice(index + 1).forEach(other => {
            const d = p.dist(particle.x, particle.y, other.x, other.y);
            if (d < 50) {
              p.stroke(255, 255, 255, p.map(d, 0, 50, 50, 0));
              p.line(particle.x, particle.y, other.x, other.y);
            }
          });
        });
      };

      p.windowResized = () => {
        p.resizeCanvas(300, 300);
      };
    };

    const p5Instance = new p5(sketch, containerRef.current);
    return () => p5Instance.remove();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0"
      style={{ opacity: 0.3 }}
    />
  );
};

export default ProfileBackground;