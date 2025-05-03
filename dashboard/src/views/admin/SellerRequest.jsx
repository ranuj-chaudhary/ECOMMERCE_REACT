import React, { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination';
import Search from '../../components/Search';
import { useDispatch } from 'react-redux';

const SellerRequest = () => {
  const dispatch = useDispatch();
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const [sellerId, setSellerId] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  async function handleSellerStatus(e, id) {
    setIsChecked(!isChecked);
    setSellerId(id);
  }

  useEffect(() => {
    if (sellerId && isChecked) {
      // get pending sellers data
      // dispatch(updateSellerStatus(sellerId, isChecked));
    }
  }, [isChecked, sellerId]);

  return (
    <div className="bg-[var(--primary-color)] p-4 rounded-md">
      <Search
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className="w-full table flex-1">
        <table className="table-auto w-full mt-4 text-left border-2 border-white text-white">
          <thead className="uppercase border border-white">
            <tr className="border border-white">
              <th scope="col" className="py-3 px-4 border border-white">
                No
              </th>
              <th scope="col" className="py-3 px-4 border border-white">
                Image
              </th>
              <th scope="col" className="py-3 px-4 border border-white">
                Name
              </th>
              <th scope="col" className="py-3 px-4 border border-white">
                Email
              </th>
              <th scope="col" className="py-3 px-4 border border-white">
                Payment Status
              </th>
              <th scope="col" className="py-3 px-4 border border-white">
                Status
              </th>
              <th scope="col" className="py-3 px-4 border border-white">
                Approve
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="whitespace-nowrap py-3 px-4 border border-white">
                1
              </td>
              <td className="whitespace-nowrap py-3 px-4  ">
                <img
                  src="/images/category/1.jpg"
                  alt=""
                  className="w-[45px] h-[45px]"
                />
              </td>
              <td className="whitespace-nowrap py-3 px-4 border border-white">
                Ranuj
              </td>
              <td className="whitespace-nowrap py-3 px-4 border border-white">
                ranujchoudhary@gmail.com
              </td>
              <td className="whitespace-nowrap py-3 px-4 border border-white">
                Not Active
              </td>
              <td className="whitespace-nowrap py-3 px-4 border border-white">
                Pending
              </td>
              <td className="whitespace-nowrap py-3 px-4 border border-white">
                <label class="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    class="sr-only peer"
                    onChange={(e) => handleSellerStatus(e, 'id')}
                  />
                  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-green-500-800 rounded-full peer dark:bg-red-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500 dark:peer-checked:bg-green-500"></div>
                  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="pagination mt-4 flex">
        <Pagination totalItems={50} itemsPerPage={itemsPerPage} />
      </div>
    </div>
  );
};

export default SellerRequest;
