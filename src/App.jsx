import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ComponenteTest />
      <ComponenteTest2 />
    </>
  );
}

function ComponenteTest() {
  return (
    <div>
      <h1>Componente en el mismo archivo</h1>
      <ComponenteTest2 />
    </div>
  );
}

const ComponenteTest2 = () => {
  return <h1>Otro en el mismo archivo</h1>;
};
