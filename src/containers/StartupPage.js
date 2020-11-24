import React from "react";
import Splash from "../assets/Splash.svg";
import HelloLogo from "../assets/Logo-Hello.png";
import Input from "../components/Input";

const StartupPage = (props) => {
  // Simple update to body tag. This is the only way, apart from using
  // React-helmet, to access the body styling. We have different values for
  // this page and the others, hence this code.
  document.body.style.background =
    "linear-gradient(0deg, #eaeff4 30%, #ffc75f 20%)";

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <React.Fragment>
      <div className="row-container">
        <div>
          <img alt="splash" id="splash" src={Splash}></img>
          <img alt="logo" id="hello-logo" src={HelloLogo}></img>
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
