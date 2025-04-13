import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { MdCurrencyRupee } from 'react-icons/md';
import { BsCart3 } from 'react-icons/bs';
import { FaPeopleGroup } from 'react-icons/fa6';
import StatCard from '../../../components/StatCard';
import BarChart from '../../../components/BarChart';
import SellerMessages from '../components/SellersMessages';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [chartState] = useState({
    series: [
      { name: 'Sellers', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] },
      { name: 'Revenue', data: [76, 85, 101, 98, 87, 105, 91, 114, 94] },
      { name: 'Orders', data: [35, 41, 36, 26, 45, 48, 52, 53, 41] },
    ],
    options: {
      chart: { type: 'bar', height: 350 },
      plotOptions: {
        bar: { horizontal: false, columnWidth: '55%', borderRadius: 5 },
      },
      legend: {
        show: true,
        position: 'top', // 'top', 'right', 'left', 'bottom'
        horizontalAlign: 'center',
        fontSize: '14px',
        fontWeight: 600,
        labels: {
          colors: '#ffffff', // Gray-700
          useSeriesColors: false, // If true, uses line/bar colors
        },
      },
      dataLabels: { enabled: false },
      stroke: { show: true, width: 2, colors: ['transparent'] },
      xaxis: {
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
        ],
        title: {
          text: 'Months',
          offsetY: -5, // helps make space
          style: {
            color: '#ffffff', // Indigo-600
            fontSize: '16px',
            fontWeight: 'bold',
            fontFamily: 'inherit',
          },
        },
        labels: {
          style: {
            colors: '#ffffff', // Indigo-600
            fontSize: '14px',
          },
        },
      },
      yaxis: {
        title: {
          text: '$ (thousands)',
          offsetX: -5,
          style: {
            color: '#ffffff', // Emerald-500
            fontSize: '16px',
            fontWeight: 'bold',
            fontFamily: 'inherit',
          },
        },
        labels: {
          style: {
            colors: '#ffffff', // Indigo-600
            fontSize: '14px',
          },
        },
      },
      fill: { opacity: 1 },
      tooltip: {
        y: { text: 'Amount (in thounsands)' },
      },
      responsive: [
        {
          breakpoint: 754,
          options: {
            plotOptions: { bar: { horizontal: true } },
            chart: { height: '500', width: '100%' },
            legend: { position: 'top' },
          },
        },
      ],
    },
  });

  return (
    <div className="px-6 py-4">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 gap-7 card md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Sales"
          value="$4545"
          icon={<MdCurrencyRupee />}
          iconClass="bg-gray-800 text-white"
          cardClass="bg-orange-600 text-white"
        />
        <StatCard
          title="Total Products"
          value="20"
          icon={<BsCart3 />}
          iconClass="bg-gray-800 text-white"
          cardClass="bg-blue-600 text-white"
        />
        <StatCard
          title="Total Sellers"
          value="50"
          icon={<FaPeopleGroup />}
          iconClass="bg-gray-800 text-white"
          cardClass="bg-green-800 text-white"
        />
        <StatCard
          title="Total Orders"
          value="$4545"
          icon={<FaShoppingCart />}
          iconClass="bg-gray-800 text-white"
          cardClass="bg-blue-700 text-white"
        />
      </div>

      {/* Charts and Seller Messages */}
      <div className="flex flex-col gap-7 mt-7 w-full chart md:flex-row">
        <BarChart chartState={chartState} />
        <SellerMessages />
      </div>

      {/* Recent Orders */}
      <div className="relative overflow-x-auto mt-4 bg-[var(--primary-color)]">
        <table className="w-full text-sm text-left text-white">
          <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
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
                Active
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="py-3 px-4 font-medium whitespace-nowrap">
                #313131
              </td>
              <td className="py-3 px-4 font-medium whitespace-nowrap">$123</td>
              <td className="py-3 px-4 font-medium whitespace-nowrap">
                pending
              </td>
              <td className="py-3 px-4 font-medium whitespace-nowrap">
                pending
              </td>
              <td className="py-3 px-4 font-medium whitespace-nowrap">
                <Link to={`/admin/dashboard/order/details/id`}>View</Link>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium whitespace-nowrap">
                #313131
              </td>
              <td className="py-3 px-4 font-medium whitespace-nowrap">$123</td>
              <td className="py-3 px-4 font-medium whitespace-nowrap">
                pending
              </td>
              <td className="py-3 px-4 font-medium whitespace-nowrap">
                pending
              </td>
              <td className="py-3 px-4 font-medium whitespace-nowrap">
                <Link to={`/admin/dashboard/order/details/id`}>View</Link>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium whitespace-nowrap">
                #313131
              </td>
              <td className="py-3 px-4 font-medium whitespace-nowrap">$123</td>
              <td className="py-3 px-4 font-medium whitespace-nowrap">
                pending
              </td>
              <td className="py-3 px-4 font-medium whitespace-nowrap">
                pending
              </td>
              <td className="py-3 px-4 font-medium whitespace-nowrap">
                <Link to={`/admin/dashboard/order/details/id`}>View</Link>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium whitespace-nowrap">
                #313131
              </td>
              <td className="py-3 px-4 font-medium whitespace-nowrap">$123</td>
              <td className="py-3 px-4 font-medium whitespace-nowrap">
                pending
              </td>
              <td className="py-3 px-4 font-medium whitespace-nowrap">
                pending
              </td>
              <td className="py-3 px-4 font-medium whitespace-nowrap">
                <Link to={`/admin/dashboard/order/details/id`}>View</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
