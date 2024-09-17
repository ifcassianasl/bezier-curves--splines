const References = () => {
  return (
    <div className="flex flex-col gap-3 self-start">
      <p className="text-md text-xl font-bold">
        Referências: 
      </p>
      {/* TODO: Referências  */}
      <ul className="list-disc list-inside p-4">
        <li className="mb-2">
          WIKIPEDIA. Bézier curve. Disponível em:{' '}
          <a href="https://en.wikipedia.org/wiki/B%C3%A9zier_curve" className="text-blue-500 underline">
            https://en.wikipedia.org/wiki/B%C3%A9zier_curve
          </a>. 
          Acesso em: 10 out. 2023.
        </li>
        <li className="mb-2">
          WIKIPEDIA. Spline (mathematics). Disponível em:{' '}
          <a href="https://en.wikipedia.org/wiki/Spline_(mathematics)" className="text-blue-500 underline">
            https://en.wikipedia.org/wiki/Spline_(mathematics)
          </a>. 
          Acesso em: 10 out. 2023.
        </li>
        <li className="mb-2">
          SUMMBIT. Bézier Curve Guide. Disponível em:{' '}
          <a href="https://www.summbit.com/blog/bezier-curve-guide/" className="text-blue-500 underline">
            https://www.summbit.com/blog/bezier-curve-guide/
          </a>. 
          Acesso em: 10 out. 2023.
        </li>
        <li className="mb-2">
          YOUTUBE. Bézier Curves Explained. Disponível em:{' '} 
          <a href="https://www.youtube.com/watch?v=enNfb6p3j_g" className="text-blue-500 underline">
            https://www.youtube.com/watch?v=enNfb6p3j_g
          </a>. 
          Acesso em: 10 out. 2023.
        </li>
        <li className="mb-2">
          YOUTUBE. The Beauty of Bézier Curves. Disponível em:{' '}
          <a href="https://www.youtube.com/watch?v=jvPPXbo87ds" className="text-blue-500 underline">
            https://www.youtube.com/watch?v=jvPPXbo87ds
          </a>. 
          Acesso em: 10 out. 2023.
        </li>
        <li className="mb-2">
          YOUTUBE. Bézier Curves: A Primer. Disponível em: {' '}
          <a href="https://www.youtube.com/watch?v=aVwxzDHniEw" className="text-blue-500 underline">
            https://www.youtube.com/watch?v=aVwxzDHniEw
          </a>. 
          Acesso em: 10 out. 2023.
        </li>
      </ul>
    </div>
  )
};

export default References;