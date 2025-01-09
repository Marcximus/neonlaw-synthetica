import { P5Wrapper } from './P5Wrapper';
import p5 from 'p5';

export const InteractiveBackground = () => {
  const sketch = (p: p5) => {
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: number;
    }> = [];
    
    const centerX = p.windowWidth / 2;
    const centerY = 300; // Profile picture position
    
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      p.colorMode(p.HSB, 360, 100, 100, 100);
      
      // Create particles
      for (let i = 0; i < 150; i++) {
        particles.push({
          x: p.random(p.width),
          y: p.random(p.height),
          vx: p.random(-1, 1),
          vy: p.random(-1, 1),
          size: p.random(2, 4),
          color: p.random(360)
        });
      }
    };

    p.draw = () => {
      p.clear();
      
      // Update and draw particles
      particles.forEach((particle, i) => {
        // Calculate distance from center
        const d = p.dist(particle.x, particle.y, centerX, centerY);
        const maxDist = 250;
        
        // Attract particles towards the center when they're close
        if (d < maxDist) {
          const force = p.map(d, 0, maxDist, 0.5, 0);
          const angle = p.atan2(centerY - particle.y, centerX - particle.x);
          particle.vx += p.cos(angle) * force;
          particle.vy += p.sin(angle) * force;
        }
        
        // Update position with velocity damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = p.width;
        if (particle.x > p.width) particle.x = 0;
        if (particle.y < 0) particle.y = p.height;
        if (particle.y > p.height) particle.y = 0;
        
        // Draw particle with dynamic color based on distance
        const hue = p.map(d, 0, maxDist, 320, 280); // Purple to blue range
        const brightness = p.map(d, 0, maxDist, 100, 60);
        const alpha = p.map(d, 0, maxDist, 80, 30);
        
        p.noStroke();
        p.fill(hue, 80, brightness, alpha);
        p.circle(particle.x, particle.y, particle.size);
        
        // Draw connections between nearby particles
        particles.forEach((other, j) => {
          if (i !== j) {
            const d2 = p.dist(particle.x, particle.y, other.x, other.y);
            if (d2 < 80) {
              const lineAlpha = p.map(d2, 0, 80, 50, 0);
              const lineColor = p.map(d, 0, maxDist, 320, 280);
              p.stroke(lineColor, 80, 100, lineAlpha);
              p.line(particle.x, particle.y, other.x, other.y);
              
              // Add extra glow effect for connections near the center
              if (d < maxDist * 0.5) {
                p.strokeWeight(2);
                p.stroke(lineColor, 80, 100, lineAlpha * 0.3);
                p.line(particle.x, particle.y, other.x, other.y);
                p.strokeWeight(1);
              }
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
      className="fixed inset-0 -z-10 pointer-events-none opacity-80"
    />
  );
};