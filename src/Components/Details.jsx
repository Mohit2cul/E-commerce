import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="w-[70%] flex justify-center items-center h-full m-auto p-[10%]">
      <img
        className="w-[50%] h-[100%] object-contain"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />
      <div className="content mt-10 p-[8%] pb-[15%]">
        <h1 className="text-3xl font-normal">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        <h3 className="text-xl mt-8 font-semibold">Men's clothing</h3>
        <h3 className="texl-xl mt-1 font-semibold">$ 109.95</h3>
        <p className="mt-4 mb-3 font-normal leading-0.5">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop in the padded sleeve, your everyday
        </p>
        <div className="flex gap-5 mt-5">
          <Link className="px-5 bg-blue-200 rounded-lg text-lg text-blue-500">
            Edit
          </Link>
          <Link className="px-5 bg-red-200 rounded-lg text-lg text-red-500">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
