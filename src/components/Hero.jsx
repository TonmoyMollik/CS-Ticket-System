import bg from "../assets/images/vector1.png";
const Hero = ({ selected, resolved }) => {
  return (
    <div>
      <div className="max-w-[1380px] my-10 justify-between mx-auto flex flex-col md:flex-row">
        <div className="w-full p-4">
          <div
            className="relative h-48 rounded-xl overflow-hidden flex items-center justify-center text-white
      bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400"
          >
            <img src={bg} className="absolute left-0 bottom-0 h-full " alt="" />

            <img
              src={bg}
              className="absolute right-0 bottom-0 h-full  scale-x-[-1]"
              alt=""
            />

            {/* Content */}
            <div className="text-center z-10">
              <h2 className="text-xl">In-Progress</h2>
              <h1 className="text-5xl font-bold">{selected}</h1>
            </div>
          </div>
        </div>

        {/* 2nd card */}
        <div className="w-full p-4">
          <div
            className="relative h-48 rounded-xl overflow-hidden flex items-center justify-center text-white
      bg-gradient-to-r from-[#54CF68] via-[#2AA971] to-[#0F8F77]"
          >
            <img src={bg} className="absolute left-0 bottom-0 h-full " alt="" />

            <img
              src={bg}
              className="absolute right-0 bottom-0 h-full  scale-x-[-1]"
              alt=""
            />

            <div className="text-center z-10">
              <h2 className="text-xl ">Resolved</h2>
              <h1 className="text-5xl font-bold">{resolved}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
