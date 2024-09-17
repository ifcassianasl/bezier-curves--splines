import Latex from 'react-latex-next';
import BezierChart from './bezierChart';
import dynamic from 'next/dynamic'

const DynamicBezierChart = dynamic(() => import('./bezierChart'), {
  loading: () => <p>Carregando...</p>,
  ssr: false,
})

const Main = () => {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className='text-lg max-w-prose flex flex-col gap-5'>
        <p>
          As curvas de Bezier são nomeadas a partir do matemático francês Pierre Bézier, que as desenvolveu enquanto trabalhava na indústria automobilística, na década de 1960, na tentativa de criar curvas suaves e precisas para a modelagem de carros. Foram aplicadas pela primeira vez na produção de automóveis pela Renault, em 1970.
        </p>
        <p>
          Na verdade, a base matemática para a criação de curvas suaves já havia se estabelecido mais de 50 anos antes com os polinomios de Bernstein, em 1912. 
        </p>
        <p>
            Além disso esse mesmo tipo de curvas já havia sido usada por Paul de Casteljau, um matemático francês, em 1959, que desenvolveu um algoritmo que permitia calcular curvas suaves a partir de pontos de controle, e o aplicou em designs usados pela Citroën, e só teve seu método publicado nos anos 80. Mas foi Bézier quem aprimorou o método e o popularizou.
        </p>
        <p>
          Hoje em dia as curvas de Bezier são muito utilizadas em softwares de design gráfico, como o Adobe Illustrator, o Inkscape e CorelDRAW, para a criação de formas e desenhos vetoriais como fontes, são utilizadas até mesmo em animações e jogos para criar modelagens realistas e movimentos suaves.
        </p>
        <p>
          As curvas de Bezier são definidas por um conjunto de pontos de controle, que são pontos que definem a forma da curva. A curva de Bezier é uma função polinomial que interpola os pontos de controle, e é definida por uma fórmula matemática.
        </p>
      </div>
      <Latex>$P = P_{0} + t * (P_{1} - P_{0})$</Latex>
      {/* <DynamicBezierChart/> */}
    </main>
  )
} 

export default Main;