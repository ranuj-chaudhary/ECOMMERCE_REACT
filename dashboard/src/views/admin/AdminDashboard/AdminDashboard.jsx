import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { MdCurrencyRupee } from 'react-icons/md';
import { BsCart3 } from 'react-icons/bs';
import { FaPeopleGroup } from 'react-icons/fa6';
import StatCard from '../../../components/StatCard';
import BarChart from '../../../components/BarChart';
import SellerMessages from '../components/SellersMessages';
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
      },
      yaxis: { title: { text: '$ (thousands)' } },
      fill: { opacity: 1 },
      tooltip: {
        y: { formatter: (val) => `$ ${val} thousands` },
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
    </div>
  );
};

export default AdminDashboard;
