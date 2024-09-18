'use client'

import Sketch from "p5-react";
import { useCallback, useMemo, memo, useRef } from "react";
import Latex from 'react-latex-next';
import BezierChart from "./bezierChart";
import { cubic, windowWidth } from "@/utils/utils";

const CubicBezier = () => {
  const point0 = useRef(null)
  const point1 = useRef(null)
  const point2 = useRef(null)
  const point3 = useRef(null)

  const width = windowWidth()
  const vector = width >= 600 ? 575 : 575/2
  const vector2 = width >= 600 ? 500 : 250
  
  const setup = useCallback((p5, canvasRef) => {
    p5.createCanvas(width, 350).parent(canvasRef);
    point0.current = p5.createVector(25, width/2);
    point1.current = p5.createVector(100, 25);
    point2.current = p5.createVector(vector2, 25);
    point3.current = p5.createVector(vector, width/2);
  }, [vector, vector2, width]);
  
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
        const p = cubic(p5, point0.current, point1.current, point2.current, point3.current, t);
        p5.stroke(255, 204, 100);
        p5.strokeWeight(7);
        p5.point(p.x, p.y);
      }

    };
  })



  return (
    <div className='flex flex-col gap-5  w-[100%]'>
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
      <p>
        Ou, isolando cada ponto:
      </p>
      <span className='self-center text-lg'>
          <Latex>
            $P = P_{0}(-t^3+3t^2-3t-1) + P_{1}(3t^3-6t^2+3t) + P_{2}(-3t^3+3t^2) + P_{3}(t^3)$
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