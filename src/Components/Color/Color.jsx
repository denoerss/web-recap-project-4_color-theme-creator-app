import { useState } from "react";

import "./Color.css";

import Button from "../Button/Button.jsx";
import ColorForm from "../ColorForm/ColorForm.jsx";

export default function Color({ color, onDelete, onEdit }) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isEditMode, setEditMode] = useState(false);
  const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);
  const [editedColor, setEditedColor] = useState(color); // current editable color
  const [initialColor] = useState(color); // save initial color for reset

  // Reset to initial color and exit edit mode
  function handleConfirmationCancel() {
    setEditedColor(initialColor); // Reset to initial values
    setEditMode(false); // Exit edit mode
    setShowCancelConfirmation(false); // Hide cancel confirmation
  }

  return (
    <div
      className="color-card"
      style={{ background: color.hex, color: color.contrastText }}
    >
      {isEditMode ? (
        <>
          <h3>Edit Color</h3>
          <ColorForm
            editColor={editedColor} // pass local edited color
            onEdit={(editedColor) => {
              setEditedColor(editedColor); // update card locally
              onEdit(editedColor); // Update color globally
              setEditMode(false); // Exit edit mode
            }}
            onCancel={() => setShowCancelConfirmation(true)} // show cancel confirmation
          />
          {showCancelConfirmation && (
            <div className="cancel-confirmation">
              <p className="color-card-highlight">Really cancel?</p>
              <Button
                type="button"
                label="Yes"
                className="confirm-cancel-button"
                onClick={handleConfirmationCancel}
              />
              <Button
                type="button"
                label="No"
                className="deny-cancel-button"
                onClick={() => setShowCancelConfirmation(false)} // Dismiss confirmation
              />
            </div>
          )}
        </>
      ) : (
        <>
          {/* COLOR DATA */}
          <div className="color-hex">
            <h3 className="color-card-highlight">{color.hex}</h3>
            <Button
              type="button"
              label="Copy"
              className="copy-button"
              onClick={() => {}}
            />
          </div>

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
            onClick={() => setEditMode(true)} // Enter edit mode
          />
        </>
      )}
    </div>
  );
}
