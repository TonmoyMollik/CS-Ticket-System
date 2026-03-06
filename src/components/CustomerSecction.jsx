import Card from "./Card";
import { Suspense, useEffect } from "react";
import React, { use, useState } from "react";
import Loading from "./Looding";
const CustomerSecction = ({ fetchPromise, numCount }) => {
  const initialData = use(fetchPromise);
  const [data, setData] = useState(initialData);
  const [selectedCards, setSelectedCards] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  useEffect(() => {
    if (typeof numCount === "function") {
      numCount(selectedCards.length, resolvedTasks.length);
    }
  }, [selectedCards, resolvedTasks, numCount]);

  const handleSelect = (card) => {
    const remainingCards = data.filter((item) => item.id !== card.id);
    setData(remainingCards);
    setSelectedCards([...selectedCards, card]);
  };

  const handleResolve = (card) => {
    const remainingSelected = selectedCards.filter(
      (item) => item.id !== card.id,
    );
    setSelectedCards(remainingSelected);
    setResolvedTasks([...resolvedTasks, card]);
  };

  return (
    <div>
      <div className="max-w-[1380px]  mx-auto ">
        <div className="flex flex-col lg:flex-row  justify-between">
          <div className="w-full p-4 lg:w-3/4">
            <div className="text-lg mb-4 font-semibold">Customer Tickets</div>
            <Suspense fallback={<Loading />}>
              <Card handleSelect={handleSelect} data={data} />
            </Suspense>
          </div>
          <div className="w-full p-4 space-y-3  lg:w-1/4">
            <div className="text-lg mb-4 font-semibold">Task Status</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2">
              {selectedCards.length ? (
                selectedCards.map((items) => {
                  return (
                    <div
                      key={items.id}
                      className="p-4 rounded  space-y-2 shadow"
                    >
                      <h2 className="font-semibold">{items.title}</h2>
                      <button
                        onClick={() => handleResolve(items)}
                        className="btn text-white bg-[#02A53B]  w-full"
                      >
                        Complete
                      </button>
                    </div>
                  );
                })
              ) : (
                <div className="p-4 rounded  space-y-2 shadow">
                  <h2 className="font-semibold">
                    Select a ticket to add to Task Status
                  </h2>
                </div>
              )}
            </div>

            <div className="text-lg font-semibold">Resolved Task</div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1   gap-2 ">
                {resolvedTasks.length ? (
                  resolvedTasks.map((items) => (
                    <div
                      key={items.id}
                      className="p-4 rounded space-y-1 shadow  bg-gray-50 opacity-80"
                    >
                      <h2 className="font-semibold  text-gray-500">
                        {items.title}
                      </h2>
                    </div>
                  ))
                ) : (
                  <div className="p-4 rounded shadow text-gray-400">
                    No resolved tasks yet.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSecction;
