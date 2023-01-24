import { useState } from "react";
import "./App.css";
import ImageDropZone from "./components/ImageDropZone";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ImageDropZone />
    </div>
  );
}

export default App;
