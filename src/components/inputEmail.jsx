import React from "react";
function InputEmail({ value, onChange }) {
  return (
    <div>
      <label>email:</label>
      <input
        type="text"
        value={value}
        Onchange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
export default InputEmail;
