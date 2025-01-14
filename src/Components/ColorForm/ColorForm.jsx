import "./ColorForm.css";

import { useState } from "react";
import { uid } from "uid";

import ColorInput from "../ColorInput/ColorInput.jsx";
import Button from "../Button/Button.jsx";

export default function ColorForm({
  onAddColor,
  defaultValue = {
    role: "some color",
    hex: "#123456",
    contrastText: "#FFFFFF",
  },
}) {
  const [color, setColor] = useState(defaultValue);

  function handleChange(event) {
    const { id, value } = event.target;
    setColor((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newColor = { id: uid(), ...color };
    onAddColor(newColor);
    setColor(defaultValue);
  }

  return (
    <form
      className="color-form"
      aria-label="Color Form"
      onSubmit={handleSubmit}
    >
      <fieldset className="add-color">
        <label htmlFor="role">Role</label>
        <div className="color-form__input">
          <input
            type="text"
            id="role"
            value={color.role}
            onChange={handleChange}
          />
        </div>

        <label htmlFor="hex">Hex</label>
        <ColorInput id="hex" defaultValue={color.hex} onChange={handleChange} />

        <label htmlFor="contrast-text">Contrast Text</label>
        <ColorInput
          id="contrastText"
          defaultValue={color.contrastText}
          onChange={handleChange}
        />

        <div className="color-form__input">
          <Button
            type="submit"
            label="Add Color"
            onclick={handleSubmit}
            className="submit-button"
          />
        </div>
      </fieldset>
    </form>
  );
}
