import React, { useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
const Create = () => {
  const [products, setproducts] = useState(ProductContext);
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();
    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Each and every field must have atleast 5 characters");
      return;
    }
    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setproducts([...products, product]);
    // toast.success("New product added successfully");
  };

  return (
    <>
      <div className="absolute top-[15%] left-[15%] w-[65%]">
        <form
          onSubmit={AddProductHandler}
          className="p-[5%] flex flex-col items-center h-full w-full"
        >
          <h1 className="mb-8 w-1/2 text-3xl text-zinc-500 font-semibold">
            Add new products
          </h1>
          <input
            type="url"
            placeholder="image link"
            className="text-xl bg-zinc-200 rounded-lg p-1 w-1/2 mb-5"
            onChange={(e) => setimage(e.target.value)}
            value={image}
          />
          <input
            type="text"
            placeholder="title"
            className="text-xl bg-zinc-200 rounded-lg p-1 w-1/2 mb-5"
            onChange={(e) => settitle(e.target.value)}
            value={title}
          />
          <input
            type="text"
            placeholder="category"
            className="text-xl bg-zinc-200 rounded-lg p-1 w-1/2 mb-5"
            onChange={(e) => setcategory(e.target.value)}
            value={category}
          />
          <input
            type="number"
            placeholder="price"
            className="text-xl bg-zinc-200 rounded-lg p-1 w-1/2 mb-5"
            onChange={(e) => setprice(e.target.value)}
            value={price}
          />
          <input
            type="text"
            placeholder="description"
            className="text-xl bg-zinc-200 rounded-lg p-1 w-1/2 mb-5"
            onChange={(e) => setdescription(e.target.value)}
            value={description}
          />
          <button
            className="absolute top-[90%] left-[27.5%] text-xl py-1 px-4 mt-2 rounded-lg text-md text-white bg-blue-400 font-medium"
            href="/create"
          >
            Add new product
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
