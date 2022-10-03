import { useState } from "react";
import Calculator from "./pages/calculator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Calculator></Calculator>
    </div>
  );
}

export default App;
