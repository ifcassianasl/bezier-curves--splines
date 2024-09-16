import { FaGithub } from "react-icons/fa6";
import Main from "@/components/main";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <head>
        <title>Bezier Curves -- Splines</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <header className="flex items-center center flex-col w-[100%]">
        <h1 className="text-3xl font-extrabold">Curvas de Bezier -- Splines</h1>
        <h2 className="text-2xl self-end font-light">Cassiana Silveira</h2>
        <h2 className="text self-end font-thin">Métodos Matemáticos I</h2>
      </header>

      
      <Main />

      <footer className="flex flex-row gap-3 row-start-3 items-center">
        <p className="text-md">Disponível em</p>
        <a href="https://github.com/ifcassianasl/bezier-curves--splines" className="text-white text-4xl">
          <FaGithub />
        </a>
      </footer>
    </div>
  );
}
