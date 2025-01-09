import { P5Wrapper } from './P5Wrapper';
import p5 from 'p5';

export const DataVisualization = () => {
  const sketch = (p: p5) => {
    const data = [65, 85, 120, 150, 200];
    let angle = 0;

    p.setup = () => {
      p.createCanvas(p.windowWidth, 400, p.WEBGL);
    };

    p.draw = () => {
      p.background(0, 31, 44, 200);
      p.rotateY(angle);
      angle += 0.01;

      data.forEach((value, i) => {
        p.push();
        p.translate(i * 50 - 100, 0, 0);
        p.normalMaterial();
        p.box(30, value, 30);
        p.pop();
      });
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, 400);
    };
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-bold mb-12 text-center tracking-tight">
          Performance Metrics
        </h2>
        <P5Wrapper sketch={sketch} className="w-full h-[400px]" />
      </div>
    </section>
  );
};