import React from "react";

const StartupPage = (props) => {
  return (
    <React.Fragment>
      <h1>StartupPage</h1>
      <img src={require("../assets/Logo-Hello.png").default}></img>;
    </React.Fragment>
  );
};

export default StartupPage;
