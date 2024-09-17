'use client'

import Sketch from "p5-react";
import { useRef } from "react";
import Latex from 'react-latex-next';

const QuadraticBezier = () => {
  const point0 = useRef(null)
  const point1 = useRef(null)
  const point2 = useRef(null)
  
  const setup = (p5, canvasRef) => {
    p5.createCanvas(600, 350).parent(canvasRef);
    point0.current = p5.createVector(25, 300);
    point1.current = p5.createVector(300, 25);
    point2.current = p5.createVector(575, 300);
  };
  
  const sketch = (p5) => {
    p5.draw = () => {
      p5.background(0);
      
      p5.stroke(255);
      p5.strokeWeight(15);
      p5.point(point0.current.x, point0.current.y)
      p5.point(point1.current.x, point1.current.y);
      p5.point(point2.current.x, point2.current.y);

      p5.strokeWeight(2);
      p5.line(point0.current.x, point0.current.y, point1.current.x, point1.current.y);
      p5.line(point1.current.x, point1.current.y, point2.current.x, point2.current.y);

      for(let t = 0; t <= 1.05; t += 0.05) {
        const x1 = p5.lerp(point0.current.x, point1.current.x, t);
        const y1 = p5.lerp(point0.current.y, point1.current.y, t);
        const x2 = p5.lerp(point1.current.x, point2.current.x, t);
        const y2 = p5.lerp(point1.current.y, point2.current.y, t);
        const x = p5.lerp(x1, x2, t);
        const y = p5.lerp(y1, y2, t);
        p5.stroke(255, 204, 100);
        p5.strokeWeight(7);
        p5.point(x, y);
      }

    };
  };


  return (
    <div className='flex flex-col gap-5'>
      <h4 className='text-2xl font-bold mb-2'>
        Curva de Bezier Quadrática
      </h4>
      <p>
        Partindo do mesmo principio da curva de Bezier linear, a curva de Bezier quadrática é uma curva de segundo grau. Partindo de três pontos, o ponto inicial, o ponto de controle e o ponto final, a curva de Bezier quadrática é definida pela seguinte equação:
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
          $P = lerp(A, B, t)$
        </Latex>
      </p>
      <p>
        Ou
      </p>
      <span className='self-center text-lg'>
          <Latex>
            $P = (1 - t)^2 P_{0} + 2(1 - t)tP_{1} + t^2 P_{2}$
          </Latex>
      </span>

      <span className='self-center text-lg'>
        <Sketch setup={setup} sketch={sketch}  />
      </span>
    </div>
  )
}
export default QuadraticBezier