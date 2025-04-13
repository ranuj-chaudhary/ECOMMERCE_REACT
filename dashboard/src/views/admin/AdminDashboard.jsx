import React from 'react';
import Chart from 'react-apexcharts';
import { FaShoppingCart } from 'react-icons/fa';
import { MdCurrencyRupee } from 'react-icons/md';
import { BsCart3 } from 'react-icons/bs';
import { FaPeopleGroup } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const AdminDashboard = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: 'Sellers',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: 'Orders',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 5,
          borderRadiusApplication: 'end',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
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
      yaxis: {
        title: {
          text: '$ (thousands)',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands';
          },
        },
      },
      responsive: [
        {
          breakpoint: 754,

          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            chart: {
              height: '500',
              width: '100%',
            },
            legend: {
              position: 'top',
            },
          },
        },
      ],
    },
  });

  return (
    <div className="px-6 py-4">
      <div className="grid grid-cols-1 gap-7 card md:grid-cols-2 lg:grid-cols-4">
        <div className="flex justify-between items-center px-6 py-8 bg-gray-300 rounded-md sales-card">
          <div>
            <p className="flex gap-1 items-center text-2xl font-bold">
              <span>4545</span>
            </p>
            <p className="text-sm">Total Sales</p>
          </div>
          <div className="flex justify-center items-center w-8 h-10 text-2xl text-white bg-orange-600 rounded-full">
            <MdCurrencyRupee />
          </div>
        </div>
        <div className="flex justify-between items-center px-6 py-8 bg-gray-300 rounded-md products-card">
          <div>
            <p className="flex gap-1 items-center text-2xl font-bold">
              <span>20</span>
            </p>
            <p className="text-sm">Total Products</p>
          </div>
          <div className="flex justify-center items-center w-8 h-10 text-2xl text-white bg-blue-600 rounded-full">
            <BsCart3 />
          </div>
        </div>
        <div className="flex justify-between items-center px-6 py-8 bg-gray-300 rounded-md sellers-card">
          <div>
            <p className="flex gap-1 items-center text-2xl font-bold">
              <span>50</span>
            </p>
            <p className="text-sm">Total Sellers</p>
          </div>
          <div className="flex justify-center items-center p-2 w-8 h-10 text-white bg-green-800 rounded-full">
            <FaPeopleGroup />
          </div>
        </div>

        <div className="flex justify-between items-center px-6 py-8 bg-gray-300 rounded-md sales-card">
          <div>
            <p className="flex gap-1 items-center text-2xl font-bold">
              <span>$</span>
              <span>4545</span>
            </p>
            <p className="text-sm">Total Orders</p>
          </div>
          <div className="flex justify-center items-center w-8 h-10 text-2xl text-white bg-blue-700 rounded-full">
            <FaShoppingCart />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-7 mt-7 w-full chart md:flex-row">
        <div className="w-full bar-chart bg-purple-400 px-6 py-8 md:h-[350px] md:w-7/12 overflow-hidden rounded-md">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="100%"
          />
        </div>
        <div className="w-full bar-chart md:w-5/12 h-[350px] bg-purple-400 px-6 py-8  overflow-scroll rounded-md">
          <div className="flex justify-between items-center">
            <h2 className="pb-3 text-lg font-semibold">
              Recent Seller Message
            </h2>
            <Link className="text-sm font-semibold">View All</Link>
          </div>

          <div className="flex flex-col gap-2 pt-6 text-[#d0d2d6]">
            <ol className="relative ml-4 border-1 border-slate-600">
              <li className="mb-3 ml-6">
                <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10">
                  {true ? (
                    <img
                      className="w-full h-full rounded-full shadow-lg"
                      src="/images/seller.png"
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-full h-full rounded-full shadow-lg"
                      src="/images/seller.png"
                      alt=""
                    />
                  )}
                </div>
                <div className="p-3 rounded-lg border shadow-sm bg-slate-800 border-slate-600">
                  <div className="flex justify-between items-center mb-2">
                    <Link className="font-normal text-md">Ranuj</Link>
                    <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                      2 days ago
                    </time>
                  </div>
                  <div className="p-2 text-xs font-normal rounded-lg border bg-slate-700 border-slate-800">
                    Hi how are you
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
