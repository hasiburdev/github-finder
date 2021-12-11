import React, { useContext } from "react";
import { AlertContext } from "../../context/alert/AlertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    alert != null && (
      <div className="flex items-center mb-4 space-x-2">
        {/* SVG ICON */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="lightgray"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <strong className="text-base font-semibold text-white leading-7 flex-1">
          {alert.message}
        </strong>
      </div>
    )
  );
};

export default Alert;
