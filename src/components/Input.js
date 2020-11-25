import React, { useState, useRef } from "react";
import debounce from "lodash/debounce";

const Input = (props) => {
  const [inputValue, setInputValue] = useState("");

  // Ska tas bort
  // const delayedQuery = useRef(debounce((q) => props.handleClick(q), 500))
  // .current;

  return (
    <div className="input-container">
      <div>
        <input
          text="text"
          placeholder={
            props.isTranslationPage ? "Enter a sentence.." : "What's your name?"
          }
          value={inputValue}
          maxLength={props.inputMaxLength}
          onChange={(e) => {
            // const sliceUserName = e.target.value.slice(0, 5);
            setInputValue(e.target.value);
            // delayedQuery(e.target.value);
          }}
        />
        <button
          onClick={() => {
            props.handleClick(inputValue);
          }}
        >
          {props.isTranslationPage ? "Translate" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Input;
