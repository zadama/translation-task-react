import React from "react";

const TranslationResults = (props) => {
  // If space was added to sentence, create a new line.
  if (props.sign === " ") {
    return <div className="sentence-divider"></div>;
  }

  return (
    <img
      id="sign"
      alt={props.sign}
      src={require("../assets/signs/" + props.sign + ".png").default}
      style={{ props }}
    ></img>
  );
};

export default TranslationResults;
