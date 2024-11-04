import React from "react";
function InputName({ value, onChange }) {
    return (
      <div>
        <label>name:</label>
        <input
          type="text"
          value={value}
          Onchange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  }
  
  export default InputName;
  