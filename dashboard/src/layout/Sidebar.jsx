import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = React.useState(
    new Array(5).fill(0).map((_, i) => `Item ${i + 1}`)
  );

  return (
    <>
      <div
        className={`w-16 h-[100vh] ${
          !isOpen ? 'translate-x-0' : '-translate-x-full fixed'
        } left-0 top-0 p-4 bg-gray-200 transition-transform ease-linear duration-100`}
      >
        <button onClick={() => setIsOpen(!isOpen)}>☰ Menu</button>
      </div>

      <aside
        className={`h-[100vh] w-64 bg-gray-200  p-5 
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full  fixed'} 
         transition-transform ease-linear duration-100 z-10 `}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-4 top-4 "
        >
          ☰ Menu
        </button>
        {data.map((ele, i) => (
          <li key={i}>{ele}</li>
        ))}
      </aside>
    </>
  );
};

export default Sidebar;
