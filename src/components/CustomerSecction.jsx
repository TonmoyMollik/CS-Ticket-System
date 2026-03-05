import Card from "./Card";
import { Suspense } from "react";
import Loading from "./Looding";
const CustomerSecction = ({ fetchPromise }) => {
  return (
    <div>
      <div className="max-w-[1380px]  mx-auto ">
        {/* <div className="flex justify-between py-3"></div> */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between">
          <div className="w-full p-4 lg:w-3/4">
            <div className="text-lg font-semibold">Customer Tickets</div>
            <Suspense fallback={<Loading />}>
              <Card fetchPromise={fetchPromise} />
            </Suspense>
          </div>
          <div className="w-full md:w-1/2 p-4  lg:w-1/4">
            <div className="text-lg font-semibold">Task Status</div>
            <div className="p-4 rounded  space-y-2 shadow">
              <h2 className="font-semibold">Payment Failed - Card Declined</h2>
              <button className="btn text-white bg-[#02A53B]  w-full">
                Complete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSecction;
