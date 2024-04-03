import React from "react";
import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

export const Home = () => {
  const items = useSelector((store) => store.items);
  // console.log("items", items);
  return (
    <>
      <main>
        <div className="items-container">
          {items.map((item) => (
            <HomeItem key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
};
