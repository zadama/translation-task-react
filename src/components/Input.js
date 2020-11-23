import React, { useState } from "react";
import Arrow from "../assets/right-arrow.png";

const Input = ({ inputMaxLength, handleClick }) => {
  const [username, setUsername] = useState("");

  return (
    <div className="input-container">
      <div>
        <input
          text="text"
          placeholder="What's your name?"
          value={username}
          maxLength={inputMaxLength}
          onChange={(e) => {
            // const sliceUserName = e.target.value.slice(0, 5);
            setUsername(e.target.value);
          }}
        />
        <img onClick={handleClick} src={Arrow} />
      </div>
    </div>
  );
};

export default Input;
