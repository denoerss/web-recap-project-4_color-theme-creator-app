import { initialColors } from "./lib/colors";
import { useState } from "react";

import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";

import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    setColors((prevColors) => [newColor, ...prevColors]);
  }

  return (
    <>
      <h1>Theme Creator</h1>

      <ColorForm onAddColor={handleAddColor} />

      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
