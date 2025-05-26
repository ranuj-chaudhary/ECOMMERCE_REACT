import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
const SellerAllProducts = () => {
  const [itemsPerPage, setItemsPerPage] = useState(5);

  return (
    <div className="overflow-x-auto mt-4 bg-[var(--primary-color)] p-4 w-full overflow-scroll">
      <div className="flex justify-between items-center gap-4 w-full ">
        <select
          name="pages"
          id=""
          className="w-10 h-10 text-center bg-gray-200 rounded-md "
          onClick={(e) => setItemsPerPage(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <input
          className=" px-4 py-2 rounded border border-gray-300 appearance-none   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Enter order to search"
          name="search"
        />
      </div>
      <div className="overflow-y-auto">
        <table className="w-full text-sm text-left text-white mt-2 ">
          <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
            <tr>
              <th scope="col" className="py-3 px-4">
                No
              </th>
              <th scope="col" className="py-3 px-4">
                Image
              </th>
              <th scope="col" className="py-3 px-4">
                Name
              </th>
              <th scope="col" className="py-3 px-4">
                Category
              </th>
              <th scope="col" className="py-3 px-4">
                Brand
              </th>
              <th scope="col" className="py-3 px-4">
                Price
              </th>
              <th scope="col" className="py-3 px-4">
                Discount
              </th>
              <th scope="col" className="py-3 px-4">
                Stock
              </th>
              <th scope="col" className="py-3 px-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((num) => (
              <tr key={num}>
                <td className="py-3 px-4 font-medium whitespace-nowrap">
                  {num}
                </td>
                <td className="py-3 px-4 font-medium whitespace-nowrap">
                  <img
                    src="/images/category/1.jpg"
                    alt=""
                    className="w-[45px] h-[45px]"
                  />
                </td>
                <td className="py-3 px-4 font-medium whitespace-nowrap">
                  Mens Woven Round Neck
                </td>
                <td className="py-3 px-4 font-medium whitespace-nowrap">
                  Sports
                </td>
                <td className="py-3 px-4 font-medium whitespace-nowrap">
                  Numero
                </td>
                <td className="py-3 px-4 font-medium whitespace-nowrap">
                  $454
                </td>
                <td className="py-3 px-4 font-medium whitespace-nowrap">20%</td>
                <td className="py-3 px-4 font-medium whitespace-nowrap">30</td>
                <td className="py-3 px-4 font-medium whitespace-nowrap flex items-center justify-evenly">
                  <span className="cursor-pointer" onclick={() => {}}>
                    👁️
                  </span>
                  <span className="cursor-pointer" onclick={() => {}}>
                    ✏️
                  </span>
                  <span className="cursor-pointer" onclick={() => {}}>
                    🔄
                  </span>
                  <span className="cursor-pointer" onclick={() => {}}>
                    🗑️
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination flex flex-end pt-8">
        <Pagination
          firstPage={1}
          itemsPerPage={itemsPerPage}
          totalItems={50}
          lastPage={10}
        />
      </div>
    </div>
  );
};

export default SellerAllProducts;
