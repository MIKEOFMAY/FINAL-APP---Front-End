import React, { useRef, useEffect } from "react";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import "./ErrorTool.css";

function ErrorTool({ message, onClose, progress }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, onClose);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onClose]);

  return (
    <div className="ErrorTool">
      <div className="ErrorTool__wrap" ref={wrapperRef}>
        <img
          className="ErrorTool__image"
          src={require("../../images/error-info.svg").default}
          alt="Image error"
        />
        <p className="ErrorTool__text">{message}</p>
        <div
          className="ErrorTool__progressBar"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
}

export default ErrorTool;
