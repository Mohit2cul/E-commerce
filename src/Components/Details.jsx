import { use, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import axios from "../utils/axios";

const Details = () => {
  // const { products, setProducts } = useContext(ProductContext);
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const { products } = useContext(ProductContext);
  const { id } = useParams();

  const getSingleProduct = async () => {
    try {
      // Check if the product is already in the context
      const singleProduct = products.find((item) => {
        return item.id === Number(id);
      });
      if (singleProduct) {
        setProduct(singleProduct);
        return;
      } else {
        const { data } = await axios.get(`/product/${id}`);
        setProduct(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  const productDeleteHandler = (id) => {
    const filteredProducts = products.filter((p) => p.id !== id);
    setProduct(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
    navigate("/");
  };

  return (
    <>
      <div className="w-[75%] flex justify-center items-center h-full m-auto p-[10%]">
        <img
          className="w-[50%] h-[100%] object-contain"
          src={product.image}
          alt=""
        />
        <div className="content mt-10 pl-[8%] pt-[8%] pb-[15%]">
          <h1 className="text-3xl font-normal">{product.title}</h1>
          <h3 className="text-lg mt-8 font-semibold">{product.category}</h3>
          <h3 className="texl-xl mt-1 font-semibold">$ {product.price}</h3>
          <p className="mt-2 mb-3 font-normal leading-0.1">
            {product.description}
          </p>
          <div className="flex gap-5 mt-5">
            {/* <Link className="px-5 bg-blue-200 rounded-lg text-lg text-blue-500">
              Edit
            </Link>
            <button
              onClick={() => productDeleteHandler(product.id)}
              className="px-5 bg-red-200 rounded-lg text-lg text-red-500"
            >
              Delete
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
