import { P5Wrapper } from './P5Wrapper';
import p5 from 'p5';

export const InteractiveBackground = () => {
  const sketch = (p: p5) => {
    let particles: { x: number; y: number; vx: number; vy: number }[] = [];

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: p.random(p.width),
          y: p.random(p.height),
          vx: p.random(-1, 1),
          vy: p.random(-1, 1)
        });
      }
    };

    p.draw = () => {
      p.clear();
      p.noStroke();
      p.fill(155, 109, 255, 50); // Cyberpunk purple with transparency

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > p.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > p.height) particle.vy *= -1;

        particles.forEach((other, j) => {
          if (i !== j) {
            let d = p.dist(particle.x, particle.y, other.x, other.y);
            if (d < 100) {
              p.stroke(0, 240, 255, p.map(d, 0, 100, 100, 0));
              p.line(particle.x, particle.y, other.x, other.y);
            }
          }
        });

        p.circle(particle.x, particle.y, 4);
      });
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
  };

  return (
    <P5Wrapper
      sketch={sketch}
      className="fixed inset-0 -z-10 pointer-events-none opacity-50"
    />
  );
};