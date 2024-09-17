import Latex from 'react-latex-next';
import dynamic from 'next/dynamic'
import BasicHistory from './basicHistory'

const DynamicLinearBezier = dynamic(() => import('./linearBezier'), {
  loading: () => <p>Carregando...</p>,
  ssr: false,
})

const DynamicQuadraticBezier = dynamic(() => import('./quadraticBezier'), {
  loading: () => <p>Carregando...</p>,
  ssr: false,
})

const Main = () => {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-lg max-w-prose">
      <BasicHistory/>
  
      <DynamicLinearBezier/>
      <DynamicQuadraticBezier/>
    </main>
  )
} 

export default Main

