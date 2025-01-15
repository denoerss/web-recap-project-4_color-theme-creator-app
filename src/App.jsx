// import { useState } from "react";
import { initialColors } from "./lib/colors";

import ColorForm from "./Components/ColorForm/ColorForm.jsx";
import ColorCards from "./Components/ColorCards/ColorCards.jsx";
import useLocalStorageState from "use-local-storage-state";

import "./App.css";

function App() {
  const [colors, setColors] = useLocalStorageState("Theme Colors", {
    defaultValue: initialColors,
  });

  function handleAddColor(newColor) {
    setColors((prevColors) => [newColor, ...prevColors]);
  }

  function handleDeleteColor(colorId) {
    setColors((prevColors) =>
      prevColors.filter((color) => color.id !== colorId)
    );
  }

  function handleEditColor(editedColor) {
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.id === editedColor.id ? editedColor : color
      )
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>

      {/* Add ColorForm only adds colors */}
      <ColorForm onAddColor={handleAddColor} />

      {/* ColorCard display and manages individual cards */}
      <ColorCards
        colors={colors}
        onDelete={handleDeleteColor}
        onEdit={handleEditColor}
      />
    </>
  );
}

export default App;
