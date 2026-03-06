import calenderImg from "../assets/images/Vector.png";
import dotImg from "../assets/images/Ellipse 22.png";
const Card = ({ handleSelect, data }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2  mx-auto gap-4">
        {data.map((card) => {
          return (
            <div key={card.id}>
              <div
                className="cursor-pointer"
                onClick={() => handleSelect(card)}
              >
                <div className="p-4 shadow-sm  h-full flex flex-col justify-between  rounded-md space-y-3">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">{card.title}</h2>
                    <button className="flex gap-2 btn rounded-2xl px-6 py-2 text-[#0B5E06] bg-[#B9F8CF]">
                      <img src={dotImg} alt="" /> Open
                    </button>
                  </div>
                  <div>
                    <p className="text-gray-400 text-base">
                      {card.description}
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex text-gray-400 gap-3">
                      <p>{card.id}</p>
                      <p className="text-red-500 font-semibold">
                        {card.priority}
                      </p>
                    </div>
                    <div className="flex text-gray-400 gap-3 items-center">
                      <p className="whitespace-nowrap">{card.customer}</p>
                      <img src={calenderImg} alt="" />
                      <span>{card.createdAt}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
