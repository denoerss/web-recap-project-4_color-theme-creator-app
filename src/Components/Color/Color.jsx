import "./Color.css";
import Button from "../Button/Button.jsx";

import { useState } from "react";

export default function Color({ color, onDelete }) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <div
      className="color-card"
      style={{ background: color.hex, color: color.contrastText }}
    >
      {/* COLOR INPUT */}
      <h3 className="color-card-highlight">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

      {/* DELETE BUTTON */}
      {isConfirmed ? (
        <section className="delete-button">
          <p className="color-card-highlight">Really delete?</p>
          <Button
            type="button"
            label="Cancel"
            className="cancel-button"
            onClick={() => setIsConfirmed(false)}
          />
          <Button
            type="button"
            label="Delete"
            className="delete-button"
            onClick={() => onDelete(color.id)}
          />
        </section>
      ) : (
        <Button
          type="button"
          label="Delete"
          className="delete-button"
          onClick={() => setIsConfirmed(true)}
        />
      )}

      {/* EDIT BUTTON */}
      <Button
        type="button"
        label="Edit"
        className="edit-button"
        onClick={() => {}}
      />
    </div>
  );
}
