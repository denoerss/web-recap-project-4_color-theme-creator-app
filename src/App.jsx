import { useState } from "react";
import { initialColors } from "./lib/colors";

import ColorForm from "./Components/ColorForm/ColorForm.jsx";
import ColorCards from "./Components/ColorCards/ColorCards.jsx";

import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    setColors((prevColors) => [newColor, ...prevColors]);
  }

  function handleDeleteColor(colorId) {
    setColors((prevColors) =>
      prevColors.filter((color) => color.id !== colorId)
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />
      <ColorCards colors={colors} onDelete={handleDeleteColor} />
    </>
  );
}

export default App;
