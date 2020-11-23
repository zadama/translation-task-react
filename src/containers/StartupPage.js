import React from "react";
import Splash from "../assets/Splash.svg";
import HelloLogo from "../assets/Logo-Hello.png";
import Input from "../components/Input";

const StartupPage = (props) => {
  //          <img src={require("../assets/Splash.svg").default}></img>

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <React.Fragment>
      <div className="row-container">
        <div>
          <img id="splash" src={Splash}></img>
          <img id="hello-logo" src={HelloLogo}></img>
        </div>

        <div>
          <h1>Lost in Translation</h1>
          <h4>Get Started!</h4>
        </div>
      </div>

      <Input inputMaxLength={25} handleClick={handleClick} />
    </React.Fragment>
  );
};

export default StartupPage;
