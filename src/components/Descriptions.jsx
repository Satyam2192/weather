import React from "react";
import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

const Descriptions = ({ weather, units }) => {
  const tempUnit = units === "metric" ? "°C" : "°F";
  const windUnit = units === "metric" ? "m/s" : "m/h";

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown className="text-red-600 text-2xl animate-ping" />,
      title: "min",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp className="text-green-600 text-2xl animate-pulse" />,
      title: "max",
      data: weather.temp_max.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy className="text-yellow-500 text-2xl animate-bounce" />,
      title: "feels like",
      data: weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress className="text-blue-500 text-2xl animate-wiggle" />,
      title: "pressure",
      data: weather.pressure,
      unit: "hPa",
    },
    {
      id: 5,
      icon: (
        <MdOutlineWaterDrop className="text-blue-400 text-2xl animate-pulse-fast" />
      ),
      title: "humidity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind className="text-pink-500 text-2xl animate-spin-slow" />,
      title: "wind speed",
      data: weather.speed.toFixed(),
      unit: windUnit,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div
          key={id}
          className="bg-white bg-opacity-[40%] pb-3 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 "
        >
          <div className="p-6 flex items-center justify-center">
            {icon}
            <small className="text-gray-500 ml-2 font-medium">{title}</small>
          </div>
          <h2 className="text-center text-3xl font-bold">
            <span className="text-5xl font-extrabold">
              {data}
            </span>{" "}
            {unit}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Descriptions;
