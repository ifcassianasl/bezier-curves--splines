'use client'

import Latex from 'react-latex-next';
import BezierChartWithDots from './bezierChartWithDots';
import { windowWidth } from '@/utils/utils';

const Derivatives = () => {
  return (
    <div className='flex flex-col gap-5  w-[100%]'>
      <h4 className='text-2xl font-bold mb-2'>
        Derivadas
      </h4>
      <p>
        As derivadas de uma curva de Bezier são úteis para calcular a tangente e a curvatura da curva em um determinado ponto.
      </p> 
      <p>
        Para uma curva de Bezier cúbica, as derivadas são:
      </p>
      <p className='self-center text-lg'>
          <Latex>
            $P&apos;(t) = P_{0}(-3t^2+6t-3) + P_{1}(9t^2-12t+3) + P_{2}(-9t^2+6t) + P_{3}(3t^2)$
          </Latex>
      </p>
      <p className='self-center text-lg'>
          <Latex>
            $P&apos;&apos;(t) = P_{0}(-6t+6) + P_{1}(18t-12) + P_{2}(-18t+6) + P_{3}(6t)$
          </Latex>
      </p>
      <p>
        A primeira derivada de uma curva de Bezier cúbica é uma curva de Bezier quadrática a segunda derivada é uma curva de Bezier linear e a terceira derivada é uma constante.
      </p>
      <p>
        Com a primeira derivada temos uma forma de calcular a tangente da curva em cada ponto, e assim também é possivel calcular o vetor normal de cada ponto da curva.
      </p>
      <p>
        A primeira derivada pode ser considerada como a velocidade dos pontos da curva e segunda derivada como a aceleração dos pontos da curva.
      </p>
      <p>
        Usando as duas derivadas é possivel calcular a curvatura da curva em um determinado ponto, com a seguinte expressão:
      </p>
      <p className='self-center text-lg'>
          <Latex>
            $\kappa = det(P&apos;, P&apos;&apos;) / ||P&apos;||^3$
          </Latex>
      </p>
      <p>
        Com isso, podemos calcular uma circunferência que melhor se ajusta a curva em cada ponto da curva de Bezier. 
      </p>
      <p className='self-center text-lg'>
          <Latex>
            $r = 1/\kappa$
          </Latex>
      </p>
      <div className='self-center text-lg'>
        <iframe width={windowWidth()} height="315" src="https://www.youtube.com/embed/aVwxzDHniEw?si=77N_IaOhaoEuWBDZ&amp;start=630" title="The Beauty of Bézier Curves" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <span className='self-center text-lg'>
        <BezierChartWithDots /> 
      </span>
    </div>
  );
}

export default Derivatives;