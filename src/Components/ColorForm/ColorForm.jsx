import "./ColorForm.css";

import { useState } from "react";
import { uid } from "uid";

export default function ColorForm({ onAddColor }) {
  const [color, setColor] = useState({
    role: "some color",
    hex: "#123456",
    contrastText: "#ffffff",
  });

  function handleChange(event) {
    const { id, value } = event.target;
    setColor(() => ({ ...color, [id]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newColor = { id: uid(), ...color }; // generate unique ID for new color
    onAddColor(newColor); // pass new color to parent component
    setColor({ role: "some color", hex: "#123456", contrastText: "#ffffff" }); // reset form
  }

  return (
    <form
      className="color-form"
      aria-label="Color Form"
      onSubmit={handleSubmit}
    >
      <fieldset className="add-color">
        <label htmlFor="role">Role</label>
        <fieldset className="input-fields">
          <input
            type="text"
            id="role"
            value={color.role}
            onChange={handleChange}
          />
        </fieldset>

        <label htmlFor="hex">Hex</label>
        <fieldset className="input-fields">
          <input
            type="text"
            id="hex"
            value={color.hex}
            onChange={handleChange}
          />
          <input
            type="color"
            id="hex"
            value={color.hex}
            onChange={handleChange}
          />
        </fieldset>

        <label htmlFor="contrast-text">Contrast Text</label>
        <fieldset className="input-fields">
          <input
            type="text"
            id="contrastText"
            value={color.contrastText}
            onChange={handleChange}
          />
          <input
            type="color"
            id="contrastText"
            value={color.contrastText}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset className="input-fields">
          <button type="submit" aria-label="Add Color">
            ADD COLOR
          </button>
        </fieldset>
      </fieldset>
    </form>
  );
}
