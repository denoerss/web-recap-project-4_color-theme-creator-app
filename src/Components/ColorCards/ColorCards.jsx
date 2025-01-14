import "./ColorCards.css";
import Color from "../Color/Color.jsx";

export default function ColorCards({ colors }) {
  return (
    <section className="color-cards">
      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </section>
  );
}
