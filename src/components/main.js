import Latex from 'react-latex-next';

const Main = () => {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Latex>$P = P_{0} + t * (P_{1} - P_{0})$</Latex>
    </main>
  )
} 

export default Main;