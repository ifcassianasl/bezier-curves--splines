'use client'

import Sketch from "p5-react";
import { useCallback, useMemo, memo, useRef } from "react";
import Latex from 'react-latex-next';
import BezierChart from "./bezierChart";

const CubicBezier = () => {
  const point0 = useRef(null)
  const point1 = useRef(null)
  const point2 = useRef(null)
  const point3 = useRef(null)
  
  const setup = useCallback((p5, canvasRef) => {
    p5.createCanvas(600, 350).parent(canvasRef);
    point0.current = p5.createVector(25, 300);
    point1.current = p5.createVector(100, 25);
    point2.current = p5.createVector(500, 25);
    point3.current = p5.createVector(575, 300);
  }, []);
  
  const sketch = useRef(function sketch (p5) {
    p5.draw = () => {
      p5.background(0);
      
      p5.stroke(255);
      p5.strokeWeight(15);
      p5.point(point0.current.x, point0.current.y)
      p5.point(point1.current.x, point1.current.y);
      p5.point(point2.current.x, point2.current.y);
      p5.point(point3.current.x, point3.current.y);

      p5.strokeWeight(2);
      p5.line(point0.current.x, point0.current.y, point1.current.x, point1.current.y);
      p5.line(point1.current.x, point1.current.y, point2.current.x, point2.current.y);
      p5.line(point2.current.x, point2.current.y, point3.current.x, point3.current.y);

      for(let t = 0; t <= 1.05; t += 0.05) {
        const x1 = p5.lerp(point0.current.x, point1.current.x, t);
        const y1 = p5.lerp(point0.current.y, point1.current.y, t);
        const x2 = p5.lerp(point1.current.x, point2.current.x, t);
        const y2 = p5.lerp(point1.current.y, point2.current.y, t);
        const x3 = p5.lerp(point2.current.x, point3.current.x, t);
        const y3 = p5.lerp(point2.current.y, point3.current.y, t);
        const x4 = p5.lerp(x1, x2, t);
        const y4 = p5.lerp(y1, y2, t);
        const x5 = p5.lerp(x2, x3, t);
        const y5 = p5.lerp(y2, y3, t);
        const x = p5.lerp(x4, x5, t);
        const y = p5.lerp(y4, y5, t);
        p5.stroke(255, 204, 100);
        p5.strokeWeight(7);
        p5.point(x, y);
      }

    };
  })



  return (
    <div className='flex flex-col gap-5'>
      <h4 className='text-2xl font-bold mb-2'>
        Curva de Bezier Cubica
      </h4>
      <p>
        O formato mais comum da curva de Bezier é a curva cúbica. Partindo de quatro pontos, o ponto inicial, dois pontos de controle e o ponto final, a curva de Bezier cúbica é definida pela seguinte equação:
      </p>
      <p className='self-center'>
        <Latex>
          $A = lerp(P_{0}, P_{1}, t)$
        </Latex>
      </p>
      <p className='self-center'>
        <Latex>
          $B = lerp(P_{1}, P_{2}, t)$
        </Latex>
      </p>
      <p className='self-center'>
        <Latex>
          $C = lerp(P_{2}, P_{3}, t)$
        </Latex>
      </p>
      <p className='self-center'>
        <Latex>
          $D = lerp(A, B, t)$
        </Latex>
      </p>
      <p className='self-center'>
        <Latex>
          $E = lerp(B, C, t)$
        </Latex>
      </p>
      <p className='self-center'>
        <Latex>
          $P = lerp(D, E, t)$
        </Latex>
      </p>
      <p>
        Ou
      </p>
      <span className='self-center text-lg'>
          <Latex>
            $P = (1 - t)^3P_{0} + 3(1 - t)^2tP_{1} + 3(1 - t)t^2P_{2} + t^3P_{3}$
          </Latex>
      </span>

      <span className='self-center text-lg'>
        <Sketch setup={setup} sketch={sketch.current}  />
      </span>

      <span className='self-center text-lg'>
        <BezierChart />
      </span>
    </div>
  )
}

export default CubicBezier