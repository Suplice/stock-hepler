import React, { useState } from "react";
import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";

interface StockCardProps {
  name: string;
  price: number;
  change: number;
  percentChange: number;
  volume: number;
}

const StockCard: React.FC<StockCardProps> = ({
  name,
  price,
  change,
  percentChange,
  volume,
}) => {
  const [isUp] = useState<boolean>(Number(change) >= 0);

  return (
    <div className="flex flex-col  h-[300px] flex-wrap bg-slate-800 m-5 p-3 hover:cursor-pointer border border-zinc-600 rounded-sm">
      <div className="flex flex-row justify-between px-2 pt-1">
        <div className="text-3xl mb-3">{name}</div>
      </div>

      <div className="flex flex-row items-center justify-between mb-3 px-2">
        <div
          className={`flex items-center text-2xl mr-2 ${
            isUp ? "text-green-500" : "text-red-500"
          }`}
        >
          {isUp ? (
            <IoIosTrendingUp size={30} className="mr-2" />
          ) : (
            <IoIosTrendingDown size={30} className="mr-2" />
          )}
          {price + " $"}
        </div>
        <div className={`text-2xl ${isUp ? "text-green-500" : "text-red-500"}`}>
          {percentChange + " %"}
        </div>
      </div>

      <div className="flex items-center justify-center mb-3">
        <svg width="50" height="20">
          <path
            d={`M0,10 Q25,${isUp ? 0 : 20} 50,10`}
            fill="transparent"
            stroke={isUp ? "green" : "red"}
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="text-white px-2">Volume: {volume}</div>
    </div>
  );
};

export default StockCard;
