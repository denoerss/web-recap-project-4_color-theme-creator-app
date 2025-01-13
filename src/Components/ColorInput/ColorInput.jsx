import "./ColorInput.css";

import { useEffect, useState } from "react";

export default function ColorInput({ id, defaultValue, onChange }) {
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleTextChange = (event) => {
    setInputValue(event.target.value);
    onChange(event);
  };

  useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);

  const handleColorChange = (event) => {
    setInputValue(event.target.value);
    onChange(event);
  };

  return (
    <div className="color-form__input">
      <input
        type="text"
        id={id}
        value={inputValue}
        onChange={handleTextChange}
      />
      <input
        type="color"
        id={id}
        value={inputValue}
        onChange={handleColorChange}
      />
    </div>
  );
}
