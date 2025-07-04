import React from "react";
import { Link } from "react-router-dom";
import Pagination from "./../../components/Pagination";
import { FaEye } from "react-icons/fa";

const SellerOrders = () => {
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  return (
    <div className="overflow-x-auto mt-4 bg-[var(--primary-color)] p-4 w-full">
      <div className="flex justify-between items-center gap-4 w-full">
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
      <table className="w-full text-sm text-white mt-2 text-center">
        <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700 ">
          <tr>
            <th scope="col" className="py-3 px-4">
              Order Id
            </th>
            <th scope="col" className="py-3 px-4">
              Price
            </th>
            <th scope="col" className="py-3 px-4">
              Payment Status
            </th>
            <th scope="col" className="py-3 px-4">
              Order Status
            </th>
            <th scope="col" className="py-3 px-4">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="py-3 px-4 font-medium whitespace-nowrap">#313131</td>
            <td className="py-3 px-4 font-medium whitespace-nowrap">$123</td>
            <td className="py-3 px-4 font-medium whitespace-nowrap">pending</td>
            <td className="py-3 px-4 font-medium whitespace-nowrap">pending</td>
            <td className="py-3 px-4 font-medium whitespace-nowrap flex justify-center">
              <Link
                to={`/admin/dashboard/order/details/id`}
                className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50"
              >
                <FaEye />
              </Link>
            </td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-medium whitespace-nowrap">#313131</td>
            <td className="py-3 px-4 font-medium whitespace-nowrap">$123</td>
            <td className="py-3 px-4 font-medium whitespace-nowrap">pending</td>
            <td className="py-3 px-4 font-medium whitespace-nowrap">pending</td>
            <td className="py-3 px-4 font-medium whitespace-nowrap flex justify-center">
              <Link
                to={`/admin/dashboard/order/details/id`}
                className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50"
              >
                <FaEye />
              </Link>
            </td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-medium whitespace-nowrap">#313131</td>
            <td className="py-3 px-4 font-medium whitespace-nowrap">$123</td>
            <td className="py-3 px-4 font-medium whitespace-nowrap">pending</td>
            <td className="py-3 px-4 font-medium whitespace-nowrap">pending</td>
            <td className="py-3 px-4 font-medium whitespace-nowrap flex justify-center">
              <Link
                to={`/admin/dashboard/order/details/id`}
                className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50"
              >
                <FaEye />
              </Link>
            </td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-medium whitespace-nowrap">#313131</td>
            <td className="py-3 px-4 font-medium whitespace-nowrap">$123</td>
            <td className="py-3 px-4 font-medium whitespace-nowrap">pending</td>
            <td className="py-3 px-4 font-medium whitespace-nowrap">pending</td>
            <td className="py-3 px-4 font-medium whitespace-nowrap flex justify-center">
              <Link
                to={`/admin/dashboard/order/details/id`}
                className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50"
              >
                <FaEye />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="pagination flex flex-end">
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

export default SellerOrders;
