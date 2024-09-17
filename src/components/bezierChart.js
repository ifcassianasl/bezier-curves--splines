'use client'

import P5 from "p5";
import Sketch from "p5-react";

const BezierChart = () => {
  const setup = (p5, canvasRef) => {
    p5.createCanvas(700, 500).parent(canvasRef);
  };
  
  const sketch = (p5) => {
    p5.draw = () => {
      p5.background(0);

      p5.stroke(255);
      p5.strokeWeight(24);
      p5.point(0, 300);
      p5.point(p5.mouseX, p5.mouseY);
      p5.point(400, 400);
      p5.point(700, 300);

      p5.strokeWeight(4);
      p5.noFill();
      p5.bezier(0, 300, p5.mouseX, p5.mouseY, 400, 400, 700, 300);

      p5.strokeWeight(2);
      p5.line(0, 300, p5.mouseX, p5.mouseY);
      p5.line(400, 400, 700, 300);
    };
  };

  return <Sketch setup={setup} sketch={sketch} />;

}

export default BezierChart