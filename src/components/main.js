import dynamic from 'next/dynamic'
import BasicHistory from './basicHistory'

const LinearBezier = dynamic(() => import('./linearBezier'), {
  loading: () => <p>Carregando...</p>,
  ssr: false,
})

const QuadraticBezier = dynamic(() => import('./quadraticBezier'), {
  loading: () => <p>Carregando...</p>,
  ssr: false,
})

const CubicBezier = dynamic(() => import('./cubicBezier'), {
  loading: () => <p>Carregando...</p>,
  ssr: false,
})

const Derivatives = dynamic(() => import('./derivatives'), {
  loading: () => <p>Carregando...</p>,
  ssr: false,
})

const Main = () => {
  return (
    <main className="flex flex-col gap-8 items-center text-lg max-w-prose">
      <BasicHistory/>
      <LinearBezier/>
      <QuadraticBezier/>
      <CubicBezier/>
      <Derivatives />
    </main>
  )
} 

export default Main

