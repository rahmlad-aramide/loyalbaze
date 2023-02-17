import React from "react";

const Button = ({ children }) => {
  return (
    <>
      <button
        className="w-[100%] rounded-full bg-gradient-to-r from-secondary to-tertiary py-[6px] hover:scale-95 transition duration-200"
        type="submit"
      >
        {children}
      </button>
    </>
  );
};

export default Button;
