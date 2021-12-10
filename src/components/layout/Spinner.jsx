import React from "react";
import spinnerImage from "../../assets/images/spinner.gif";

const Spinner = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <img src={spinnerImage} alt="Loading..." width="200px" className="" />
    </div>
  );
};

export default Spinner;
