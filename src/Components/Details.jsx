import React, { use, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import axios from "../utils/axios";

const Details = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  console.log(id, "id");

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      // console.log(data, "single product");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <>
      <div className="w-[75%] flex justify-center items-center h-full m-auto p-[10%]">
        <img
          className="w-[50%] h-[100%] object-contain"
          src={`${products.image}`}
          alt=""
        />
        <div className="content mt-10 pl-[8%] pt-[8%] pb-[15%]">
          <h1 className="text-3xl font-normal">{products.title}</h1>
          <h3 className="text-lg mt-8 font-semibold">{products.category}</h3>
          <h3 className="texl-xl mt-1 font-semibold">$ {products.price}</h3>
          <p className="mt-2 mb-3 font-normal leading-0.1">
            {products.description}
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
    </>
  );
};

export default Details;
