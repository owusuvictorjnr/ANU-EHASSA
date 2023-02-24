import React from "react";

const SubHeaders = ({ label, programme }) => {
  return (
    <div>
      <div className="bg-yellow-300 py-2 px-4 uppercase">
        {label}
        {programme}
      </div>
    </div>
  );
};

export default SubHeaders;
