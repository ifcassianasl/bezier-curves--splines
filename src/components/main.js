import Latex from 'react-latex-next';
import BezierChart from './bezierChart';
import dynamic from 'next/dynamic'

const DynamicBezierChart = dynamic(() => import('./bezierChart'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})

const Main = () => {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Latex>$P = P_{0} + t * (P_{1} - P_{0})$</Latex>
      <DynamicBezierChart/>
    </main>
  )
} 

export default Main;