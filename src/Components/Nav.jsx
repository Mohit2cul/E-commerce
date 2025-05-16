import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const { products } = useContext(ProductContext);
  let distinctCategory =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinctCategory = [...new Set(distinctCategory)];
  // console.log(distinctCategory, "distinct category");

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
  };

  return (
    <nav className="bg-zinc-100 h-full w-[20%] p-5 flex flex-col gap-1">
      <a
        className="text-xl py-3 px-3 border-solid rounded-lg mt-5 mb-3 text-md text-zinc-500 font-medium"
        href="/create"
      >
        Add new product
      </a>

      <hr />
      <h1 className="text-3xl mb-8 w-auto text-zinc-500">Category Filter</h1>
      <div className="w-[80%]">
        {distinctCategory.map((c, i) => (
          <Link
            key={i}
            to={`/?category=${c}`}
            className="flex text-lg items-center mb-2 text-zinc-600"
          >
            <span style={{backgroundColor :color()}} className="text-lg rounded-full mr-2 w-[12px] h-[12px]"></span>{" "}
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
