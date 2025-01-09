import { P5Wrapper } from './P5Wrapper';
import p5 from 'p5';

export const InteractiveBackground = () => {
  const sketch = (p: p5) => {
    let particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    const centerX = p.windowWidth / 2;
    const centerY = 300; // Approximate position of the profile picture
    
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      // Create more particles for a denser effect
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: p.random(p.width),
          y: p.random(p.height),
          vx: p.random(-0.5, 0.5),
          vy: p.random(-0.5, 0.5),
          size: p.random(2, 4)
        });
      }
    };

    p.draw = () => {
      p.clear();
      
      particles.forEach((particle, i) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap particles around the screen
        if (particle.x < 0) particle.x = p.width;
        if (particle.x > p.width) particle.x = 0;
        if (particle.y < 0) particle.y = p.height;
        if (particle.y > p.height) particle.y = 0;

        // Calculate distance from center (profile picture)
        const d = p.dist(particle.x, particle.y, centerX, centerY);
        const maxDist = 300; // Maximum distance for connection lines
        
        // Draw particles with gradient color based on distance
        const alpha = p.map(d, 0, maxDist, 100, 20);
        p.noStroke();
        
        // Create a cyberpunk gradient effect
        const hue = p.map(d, 0, maxDist, 0, 60);
        p.fill(244, 114, 182, alpha); // Pink with varying opacity
        p.circle(particle.x, particle.y, particle.size);

        // Connect particles with lines if they're close enough
        particles.forEach((other, j) => {
          if (i !== j) {
            const d2 = p.dist(particle.x, particle.y, other.x, other.y);
            if (d2 < 100) {
              // Make lines more visible near the profile picture
              const lineAlpha = p.map(d, 0, maxDist, 50, 10);
              p.stroke(244, 114, 182, lineAlpha);
              p.line(particle.x, particle.y, other.x, other.y);
            }
          }
        });
      });
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
  };

  return (
    <P5Wrapper
      sketch={sketch}
      className="fixed inset-0 -z-10 pointer-events-none opacity-70"
    />
  );
};