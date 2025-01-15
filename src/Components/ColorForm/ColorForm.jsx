import "./ColorForm.css";

import { useEffect, useState } from "react";
import { uid } from "uid";

import ColorInput from "../ColorInput/ColorInput.jsx";
import Button from "../Button/Button.jsx";

export default function ColorForm({
  onAddColor,
  onEdit,
  editColor = null,
  onCancel,
}) {
  const [color, setColor] = useState({
    role: "some color",
    hex: "#123456",
    contrastText: "#FFFFFF",
  });

  // Pre-fill the form if editing
  useEffect(() => {
    if (editColor) {
      setColor(editColor);
    }
  }, [editColor]);

  function handleChange(event) {
    const { id, value } = event.target;
    setColor((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (editColor) {
      // Edit existing color
      onEdit({ ...color });
    } else {
      // Add a new color
      const newColor = { id: uid(), ...color };
      onAddColor(newColor);
    }
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
        <ColorInput
          type="text"
          id="hex"
          defaultValue={color.hex}
          onChange={handleChange}
        />

        <label htmlFor="contrast-text">Contrast Text</label>
        <ColorInput
          type="text"
          id="contrastText"
          defaultValue={color.contrastText}
          onChange={handleChange}
        />

        <div className="color-form__input">
          {editColor && ( // only show cancel button in edit mode
            <Button
              type="button"
              label="Cancel"
              className="cancel-button"
              onClick={onCancel} // Trigger cancel confirmation
            />
          )}

          <Button
            type="submit"
            label={editColor ? "Update Color" : "Add Color"}
            className="submit-button"
          />
        </div>
      </fieldset>
    </form>
  );
}
