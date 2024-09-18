const References = () => {
  return (
    <div className="flex flex-col gap-3 self-start">
      <p className="text-md text-xl font-bold">
        Referências: 
      </p>
      <ul className="list-disc list-inside p-4">
        <li className="mb-2">
          WIKIPEDIA, Bézier curve. Disponível em:{' '}
          <a target="_blank" href="https://en.wikipedia.org/wiki/B%C3%A9zier_curve" className="text-blue-500 underline">
            https://en.wikipedia.org/wiki/B%C3%A9zier_curve
          </a>. 
        </li>
        <li className="mb-2">
          WIKIPEDIA, Spline (mathematics). Disponível em:{' '}
          <a target="_blank" href="https://en.wikipedia.org/wiki/Spline_(mathematics)" className="text-blue-500 underline">
            https://en.wikipedia.org/wiki/Spline_(mathematics)
          </a>. 
        </li>
        <li className="mb-2">
          SUMMBIT, Bézier Curve Guide. 2022. Disponível em:{' '}
          <a target="_blank" href="https://www.summbit.com/blog/bezier-curve-guide/" className="text-blue-500 underline">
            https://www.summbit.com/blog/bezier-curve-guide/
          </a>. 
        </li>
        <li className="mb-2">
          The Coding Train, <strong>Bézier Curves</strong>, Youtube 22 de ago. de 2021. Disponível em:{' '} 
          <a target="_blank" href="https://www.youtube.com/watch?v=enNfb6p3j_g" className="text-blue-500 underline">
            https://www.youtube.com/watch?v=enNfb6p3j_g
          </a>. 
        </li>
        <li className="mb-2">
          Freya Holmér, <strong>The Continuity of Splines</strong>, Youtube 7 de dez. de 2022. Disponível em:{' '}
          <a target="_blank" href="https://www.youtube.com/watch?v=jvPPXbo87ds" className="text-blue-500 underline">
            https://www.youtube.com/watch?v=jvPPXbo87ds
          </a>. 
        </li>
        <li className="mb-2">
        Freya Holmér, <strong>The Beauty of Bézier Curves</strong>, Youtube 19 de ago. de 2021. Disponível em: {' '}
          <a target="_blank" href="https://www.youtube.com/watch?v=aVwxzDHniEw" className="text-blue-500 underline">
            https://www.youtube.com/watch?v=aVwxzDHniEw
          </a>. 
        </li>
      </ul>
    </div>
  )
};

export default References;