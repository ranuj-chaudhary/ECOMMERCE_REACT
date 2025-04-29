import React, { useState } from 'react';
import Pagination from '../../components/Pagination';

const PaymentRequest = () => {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  return (
    <div className=" w-full bg-[var(--primary-color)] text-[var(--text-primary)] p-4 rounded-md">
      <h1>Withdrawal Request</h1>
      <table className="table-auto w-full mt-4 text-left border-2 border-white ">
        <thead className="uppercase border border-white">
          <tr className="border border-white">
            <th scope="col" className="py-3 px-4 border border-white">
              No
            </th>
            <th scope="col" className="py-3 px-4 border border-white">
              Amount
            </th>
            <th scope="col" className="py-3 px-4 border border-white">
              Status
            </th>
            <th scope="col" className="py-3 px-4 border border-white">
              Date
            </th>
            <th scope="col" className="py-3 px-4 border border-white">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="whitespace-nowrap py-3 px-4 border border-white">
              1
            </td>
            <td className="whitespace-nowrap py-3 px-4  ">#3434</td>
            <td className="whitespace-nowrap py-3 px-4 border border-white">
              pending
            </td>
            <td className="whitespace-nowrap py-3 px-4 border border-white">
              2023-10-01
            </td>
            <td className="whitespace-nowrap py-3 px-4 border border-white">
              Confirm
            </td>
          </tr>
        </tbody>
      </table>

      <div className="pagination mt-4">
        <Pagination totalItems={50} itemsPerPage={itemsPerPage} />
      </div>
    </div>
  );
};

export default PaymentRequest;
