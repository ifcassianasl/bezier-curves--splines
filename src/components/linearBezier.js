'use client'

import P5 from "p5";
import Sketch from "p5-react";
import { useRef } from "react";
import Latex from 'react-latex-next';

const LinearBezier = () => {
  const point0 = useRef(null)
  const point1 = useRef(null)
  
  const setup = (p5, canvasRef) => {
    p5.createCanvas(600, 300).parent(canvasRef);
    point0.current = p5.createVector(50, 100);
    point1.current = p5.createVector(550, 100);
  };
  
  const sketch = (p5) => {
    p5.draw = () => {
      p5.background(0);
      
      p5.stroke(255);
      p5.strokeWeight(24);
      p5.point(point0.current.x, point0.current.y)
      p5.point(point1.current.x, point1.current.y);

      p5.strokeWeight(4);
      p5.line(point0.current.x, point0.current.y, point1.current.x, point1.current.y);

      for(let t = 0; t <= 1.05; t += 0.05) {
        const x = p5.lerp(point0.current.x, point1.current.x, t);
        const y = p5.lerp(point0.current.y + 100, point1.current.y + 100, t);
        p5.stroke(255, 204, 100);
        p5.strokeWeight(5);
        p5.point(x, y);
      }

    };
  };

  return (
    <div className='max-w-prose flex flex-col gap-5'>
        <h4 className='text-2xl font-bold mb-2'>
          Curva de Bezier Linear
        </h4>
        <p className='text-lg'>
          É a forma mais simples da curva de Bezier, é definida por dois pontos de controle conectados por uma linha reta que liga esses dois pontos.
        </p>
        <p className='text-lg'>
          A fórmula da curva de Bezier linear é dada por:
        </p>
        <span className='self-center text-lg'>
          <Latex>
            $P = P_{0} + t \times (P_{1} - P_{0}) =  (1 - t)P_{0} + tP_{1}$
          </Latex>
        </span>
        <p className='text-lg'>
          com <Latex>$0 \leq t \leq 1$</Latex>.
        </p>
        <p className='text-lg'>
          Que representa a interpolação linear entre os pontos de controle <Latex>$P_{0}$</Latex> e <Latex>$P_{1}$</Latex>.
          Como representado abaixo com <Latex>$t$</Latex> variando no intervalo de 0.5 nos pontos abaixo da reta.
        </p>
        <p className='text-lg'>
          Essa interpolação também é chamada de <Latex>$lerp()$</Latex>
        </p>
        <p className='text-lg'>
          Considerando <Latex>$P_{0}$</Latex> o ponto a esquerda e <Latex>$P_{1}$</Latex> o ponto a direita, temos a seguinte representação:
        </p>
        <span className='self-center text-lg'>
          <Latex>
            $P = lerp(P_{0}, P_{1}, t)$
          </Latex>
        </span>
        <Sketch setup={setup} sketch={sketch}  />
      </div>   
  );

}

export default LinearBezier