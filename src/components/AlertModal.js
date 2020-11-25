import React, { useEffect, useRef } from "react";
import useDetectClickOuteside from "../util/useDetectClickOutside";

const AlertModal = ({ children, closeModal }) => {
  const ref = useRef();
  useDetectClickOuteside(ref, closeModal);

  return (
    <div className="backdrop">
      <div ref={ref} className="modal">
        {children}
      </div>
    </div>
  );
};

export default AlertModal;
