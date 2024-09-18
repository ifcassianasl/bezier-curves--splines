import Latex from 'react-latex-next';

const Derivatives = () => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='text-2xl font-bold mb-2'>
        Derivadas
      </h4>
      <p>
        As derivadas de uma curva de Bezier são úteis para calcular a tangente à curva em um determinado ponto. Além disso, as derivadas são usadas para calcular a curvatura da curva em um determinado ponto.
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
    </div>
  );
}

export default Derivatives;