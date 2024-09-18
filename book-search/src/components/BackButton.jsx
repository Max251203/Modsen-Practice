import React from "react";
import { FaRightToBracket } from "react-icons/fa6";

const BackButton = ({ onClick }) => {
  return (
    <button type="button" className="flex flex-c back-btn" onClick={onClick}>
      <FaRightToBracket size={22} />
      <span className="fs-18 fw-6">Назад</span>
    </button>
  );
};

export default BackButton;
