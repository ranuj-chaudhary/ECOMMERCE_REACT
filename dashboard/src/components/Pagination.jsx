import { useState, useEffect } from 'react';

const Pagination = ({
  totalItems = 0,
  itemsPerPage = 5,
  pageGroupSize = 5,
  
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [groupStart, setGroupStart] = useState(1);
 
  const groupEnd = Math.min(groupStart + pageGroupSize - 1, totalPages);

  const pages = Array.from(
    { length: groupEnd - groupStart + 1 },
    (_, i) => groupStart + i
  );

  const handlePrev = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      if (newPage < groupStart) {
        setGroupStart(Math.max(1, groupStart - pageGroupSize));
      }
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      if (newPage > groupEnd) {
        setGroupStart(groupStart + pageGroupSize);
      }
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    // Reset pagination if totalItems or itemsPerPage changes
    setCurrentPage(1);
    setGroupStart(1);
  }, [totalItems, itemsPerPage]);

  return (
    <div className="text-white flex items-center justify-between w-full lg:w-1/2 ">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`p-2 bg-blue-500 disabled:bg-gray-400`}
      >
        Prev
      </button>

      <ul className="flex flex-1 justify-evenly">
        {pages.map((page) => (
          <li
            key={page}
            className={`cursor-pointer w-[2em] h-[2em] rounded-full flex justify-center items-center ${
              currentPage === page ? 'bg-blue-800' : 'bg-blue-600'
            }`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </li>
        ))}
      </ul>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`p-2 bg-blue-500 disabled:bg-gray-400`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
