import { useState } from "react";
function Home() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <p>Teste.</p>
      <Contador />
    </div>
  );
}

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>

    </div>
  );
}

export default Home;
export { Contador };