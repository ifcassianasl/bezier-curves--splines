'use client'

import P5 from "p5";
import Sketch from "p5-react";
import { windowWidth } from "@/utils/utils";

const BezierChart = () => {

  const width = windowWidth()
  const vector = width >= 600 ? 575 : 575/2
  const vector2 = width >= 600 ? 400 : 200

  const setup = (p5, canvasRef) => {
    p5.createCanvas(width, 600).parent(canvasRef);
  };
  
  const sketch = (p5) => {
    p5.draw = () => {
      p5.background(0);

      p5.stroke(255);
      p5.strokeWeight(24);
      p5.point(25, 300);
      p5.point(p5.mouseX, p5.mouseY);
      p5.point(vector2, 200);
      p5.point(vector, 300);

      p5.strokeWeight(4);
      p5.noFill();
      p5.bezier(25, 300, p5.mouseX, p5.mouseY, vector2, 200, vector, 300);

      p5.strokeWeight(2);
      p5.line(25, 300, p5.mouseX, p5.mouseY);
      p5.line(vector2, 200, vector, 300);
    };
  };

  return <Sketch setup={setup} sketch={sketch} />;

}

export default BezierChart