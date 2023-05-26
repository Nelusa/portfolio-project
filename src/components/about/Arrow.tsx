import React from "react";

const Arrow: React.FC = () => {
  return (
    <div className="hidden 2xl:block ml-3">
      <div className="relative h-full">
        <div className="absolute ml-[7px] w-[2px] h-full bg-gray-700 bottom-0 left-1/4 z-20"></div>
        <div className="absolute w-4 h-4 border-gray-700 border-b-2 border-r-2  rotate-45 bg-gray-900 bottom-0 left-1/2 -mt-4 z-10"></div>
      </div>
    </div>
  );
};

export default Arrow;
