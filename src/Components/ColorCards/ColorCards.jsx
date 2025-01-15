import "./ColorCards.css";
import Color from "../Color/Color.jsx";

export default function ColorCards({ colors, onDelete, onEdit }) {
  return (
    <section className="color-cards">
      {colors.length > 0 ? (
        colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            onDelete={onDelete}
            onEdit={onEdit} // Pass onEdit for editing
          />
        ))
      ) : (
        <p>No colors ... Start by adding one!</p>
      )}
    </section>
  );
}
