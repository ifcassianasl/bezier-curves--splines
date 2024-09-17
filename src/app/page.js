import { FaGithub } from "react-icons/fa6";
import Main from "@/components/main";
import References from "@/components/references";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex items-center center flex-col w-[100%]">
        <h1 className="text-3xl font-extrabold">Curvas de Bezier - Splines</h1>
        <h2 className="text-2xl self-end font-light">Cassiana Silveira</h2>
        <h2 className="text self-end font-thin">Métodos Matemáticos I</h2>
      </header>

      
      <Main />

      <footer className="flex flex-col gap-5 row-start-3 items-center w-[100%]">
        <References />
        <div className="flex gap-3 items-center">
          <p className="text-md">Disponível em</p>
          <a href="https://github.com/ifcassianasl/bezier-curves--splines" className="text-white text-4xl" target="_blank">
            <FaGithub />
          </a>
        </div>
      </footer>
    </div>
  );
}
