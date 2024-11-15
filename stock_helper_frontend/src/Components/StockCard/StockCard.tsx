import React, { useState } from "react";
import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import StockPreviewChart from "../StockPreviewChart/StockPreviewChart";

interface StockCardProps {
  name: string;
  price: number;
  change: number;
  percentChange: number;
}

const StockCard: React.FC<StockCardProps> = ({
  name,
  price,
  change,
  percentChange,
}) => {
  const [isUp] = useState<boolean>(Number(change) >= 0);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Chart/${name}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col w-[300px]  h-[300px] flex-wrap bg-slate-800 m-5 p-3 hover:cursor-pointer border border-zinc-600 rounded-sm"
    >
      <div className="flex flex-row justify-between px-2 pt-1">
        <div className="text-3xl mb-3">{name}</div>
      </div>

      <div className="flex flex-row items-center justify-between mb-3 px-2">
        <div
          className={`flex items-center text-2xl mr-2 tracking-wide  ${
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
        <div
          className={`text-2xl tracking-tighter ${
            isUp ? "text-green-500" : "text-red-500"
          }`}
        >
          {percentChange + " %"}
        </div>
      </div>
      <div className="w-full mt-4">
        <StockPreviewChart />
      </div>
    </div>
  );
};

export default StockCard;
