import Latex from 'react-latex-next';
import BezierChart from './bezierChart';

const Main = () => {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Latex>$P = P_{0} + t * (P_{1} - P_{0})$</Latex>
      <BezierChart/>
    </main>
  )
} 

export default Main;