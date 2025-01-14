import "./ColorCards.css";
import Color from "../Color/Color.jsx";

export default function ColorCards({ colors, onDelete }) {
  return (
    <section className="color-cards">
      {colors.length > 0 ? (
        colors.map((color) => (
          <Color key={color.id} color={color} onDelete={onDelete} />
        ))
      ) : (
        <p>No colors ... Start by adding one!</p>
      )}
    </section>
  );
}
