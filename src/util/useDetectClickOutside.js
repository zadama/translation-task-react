import React, { useRef, useEffect } from "react";

/**
 * Custom reusable hook that detects click outside provided ref.
 */

const useDetectClickOuteside = (ref, handleClick) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handleClick]);
};

export default useDetectClickOuteside;
