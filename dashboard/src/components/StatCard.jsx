import React from 'react';

const StatCard = ({ title, value, icon, iconClass, cardClass }) => {
  return (
    <div
      className={`flex justify-between items-center px-6 py-8 ${cardClass} rounded-md`}
    >
      <div>
        <p className="flex gap-1 items-center text-2xl font-bold">
          <span>{value}</span>
        </p>
        <p className="text-sm">{title}</p>
      </div>
      <div
        className={`flex justify-center items-center w-8 h-10 text-2xl  ${iconClass} rounded-full`}
      >
        {icon}
      </div>
    </div>
  );
};

export default StatCard;
