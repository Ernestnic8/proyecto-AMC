import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-amber-400 w-full h-16 flex items-center justify-center">
        <a href="https://vite.dev" target="_blank" className="flex items-center">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="flex items-center">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-center">Vite + React</h1>
      <div className="px-2 flex flex-col items-center">
        <button onClick={() => setCount((count) => count + 1)} className="bg-amber-400 w-32 h-10 rounded-md text-white font-bold">
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="rounded-md bg-amber-400 text-center p-2 mt-4">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
