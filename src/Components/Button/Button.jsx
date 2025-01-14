import "./Button.css";

export default function Button({ label, onClick, type, className }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      aria-label={label}
    >
      {label}
    </button>
  );
}
