import axios from "axios";
import React, { useState, createContext, useEffect } from "react";

export const ProductContext = createContext();

const Context = (props) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      const data = response.data;
      setProducts(response.data);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    
    getProducts();
    console.log(products, "products");
  }, []);
  
  return (
    <div>
      <ProductContext.Provider value={{products, setProducts}}>
        {props.children}
      </ProductContext.Provider>
    </div>
  );
};

export default Context;
