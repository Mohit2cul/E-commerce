import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import axios from "../utils/axios";

const Home = () => {
  const { products } = useContext(ProductContext);
  const {search} = useLocation();
  const category = decodeURIComponent(search.split("=")[1])

  const [filteredproducts, setFilteredProducts] = useState(null);

  const getproductcategory = async () => {
    try {
      const {data} = await axios.get(`/products/category/${category}`);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    // console.log(category, "category");
    
    if (!filteredproducts || category == "undefined") {
      setFilteredProducts(products);
    }
    if (category != "undefined") {
      // getproductcategory();
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  }, [category,products]);
  // console.log(filteredproducts, "filtered products");
  
  return (
    <>
      <div className="flex flex-wrap w-full h-full">
        <Nav /> 
        <div className="flex flex-wrap overflow-x-hidden overflow-y-auto gap-5 p-10 h-full pt-[4%] w-[80%]">
          {filteredproducts && filteredproducts.map((p, i) => (
            <Link
              key={p.id}
              to={`/details/${p.id}`}
              className="flex flex-col justify-center items-center w-[18%] h-[32vh] card p-2 border shadow rounded"
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
      </div>
    </>
  );
  // ) : (
  //   <Loading />
  // );
};

export default Home;
