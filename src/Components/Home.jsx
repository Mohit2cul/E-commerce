import { Link } from "react-router-dom";
import React from "react";
import Nav from "./Nav";
import Details from "./Details";
import Context from "../utils/Context";
import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

const Home = () => {
  const {products} = useContext(ProductContext);
  console.log(products,"homepage products");
  return products ? (
    <>
      <Nav />
      <div className="flex flex-wrap overflow-x-hidden overflow-y-auto gap-5 p-10 pt-[4%] w-[85%]">
        {products.map((p, i) => (
          <Link
            to="/details/1"
            className="flex flex-col justify-center items-center w-[18%] h-[32vh] card p-3 border shadow rounded"
          >
            <div
              className="hover:scale-110 mb-3 w-full bg-contain h-[80%] bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${p.image})`,
              }}
            ></div>
            <h1 className="text-zinc-500">{p.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
