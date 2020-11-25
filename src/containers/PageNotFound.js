import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

const PageNotFound = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 2000);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        Page with path {location.pathname} not found. You will be redirected!
      </h1>
    </div>
  );
};

export default PageNotFound;
