import React from "react";

const SubHeaders = ({ label }) => {
  return (
    <div>
      <div className="bg-yellow-600 mt-[2rem] py-2 px-4 uppercase text-3xl tracking-wide font-serif ">
        {label}
      </div>
    </div>
  );
};

export default SubHeaders;
