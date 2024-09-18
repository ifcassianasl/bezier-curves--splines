'use client'

import { cubic } from "@/utils/utils";
import P5 from "p5";
import Sketch from "p5-react";
import { useRef } from "react";
import { windowWidth } from "../utils/utils";

const BezierChartWithDots = () => {
  const point0 = useRef(null)
  const point1 = useRef(null)
  const point2 = useRef(null)
  const point3 = useRef(null)

  const width = windowWidth()
  const vector = width >= 600 ? 575 : 575/2
  const vector2 = width >= 600 ? 400 : 200

  const setup = (p5, canvasRef) => {
    p5.createCanvas(width, 600).parent(canvasRef);
    point0.current = p5.createVector(25, 300);
    point1.current = p5.createVector(100, 25);
    point2.current = p5.createVector(vector2, 200);
    point3.current = p5.createVector(vector, 300);
  };
  
  const sketch = (p5) => {
    p5.draw = () => {
      p5.background(0);
      p5.stroke(255);
      
      p5.strokeWeight(24);
      p5.point(point0.current.x, point0.current.y);
      p5.point(p5.mouseX, p5.mouseY);
      p5.point(point2.current.x, point2.current.y);
      p5.point(point3.current.x, point3.current.y);
      
      
      p5.strokeWeight(4);
      p5.line(point0.current.x, point0.current.y, p5.mouseX, p5.mouseY);
      p5.line(point2.current.x, point2.current.y, point3.current.x, point3.current.y);

      for(let t = 0; t <= 1.05; t += 0.05) {
        const v = cubic(p5, point0.current, p5.createVector(p5.mouseX, p5.mouseY), point2.current, point3.current, t);
        p5.stroke(255, 204, 100);
        p5.strokeWeight(7);
        p5.point(v.x, v.y);
      }
    };
  };

  return <Sketch setup={setup} sketch={sketch} />;

}

export default BezierChartWithDots