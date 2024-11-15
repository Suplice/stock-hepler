import React, { useState } from "react";
import StockCard from "../StockCard/StockCard";
import SearchBar from "../SearchBar/SearchBar";

const stockData = [
  {
    name: "AAPL",
    price: 150,
    change: 1.5,
    percentChange: 1,
  },
  {
    name: "GOOGL",
    price: 2500,
    change: 2.5,
    percentChange: 1,
  },
  {
    name: "AMZN",
    price: 3500,
    change: 3.5,
    percentChange: 1,
  },
  {
    name: "TSLA",
    price: 750,
    change: 7.5,
    percentChange: 1,
  },
  {
    name: "MSFT",
    price: 300,
    change: 3,
    percentChange: 1,
  },
  {
    name: "FB",
    price: 350,
    change: 3.5,
    percentChange: 1,
  },
];

const Main: React.FC = () => {
  const [stockCards] = useState(stockData);

  return (
    <div className="flex flex-col text-xl items-center ">
      <div className=""> main </div>
      <SearchBar />
      <div className="flex flex-row p-10 w-full h-full justify-around flex-wrap ">
        {stockCards.map((card) => {
          return (
            <StockCard
              name={card.name}
              price={card.price}
              change={card.change}
              percentChange={card.percentChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
