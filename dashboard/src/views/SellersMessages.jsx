import { Link } from "react-router-dom";

const SellerMessages = () => {
  return (
    <div className="seller-message w-full bar-chart md:w-5/12 h-[350px] bg-purple-400 px-6 py-8 overflow-scroll rounded-md">
      <div className="flex justify-between items-center">
        <h2 className="pb-3 text-lg font-semibold">Recent Seller Message</h2>
        <Link className="text-sm font-semibold">View All</Link>
      </div>
      <div className="flex flex-col gap-2 pt-6 text-[#d0d2d6]">
        <ol className="relative ml-4 border-1 border-slate-600">
          <li className="mb-3 ml-6">
            <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10">
              <img
                className="w-full h-full rounded-full shadow-lg"
                src="/images/seller.png"
                alt="Seller"
              />
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
  );
};

export default SellerMessages;
