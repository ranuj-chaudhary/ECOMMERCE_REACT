import React, { useState } from "react";
import InputField from "./../../components/InputField";
import { FaRegImages } from "react-icons/fa";

const SellerAddProducts = () => {
  const [state, setState] = useState([
    {
      productName: "",
      brandName: "",
      category: "",
      discount: "",
      description: "",
    },
  ]);
  const [images, setImages] = useState([]);
  const [showImages, setShowImages] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleFiles(e) {
    const files = e.target.files;
    const length = files.length;
    if (length === 0) return;
    let imageUrls = [];
    for (let i = 0; i < length; i++) {
      imageUrls.push({ url: URL.createObjectURL(files[i]) });
    }
    setShowImages([...showImages, ...imageUrls]);
    setImages(...images, ...files);
  }
  /*
   */
  return (
    <div className="h-full bg-[var(--primary-color)] p-4 rounded-md text-white overflow-scroll">
      <form onSubmit={handleSubmit}>
        <div className="row flex w-full gap-4  mb-4">
          <InputField
            label={"Product Name"}
            placeholder="Product Name"
            className="flex-1 text-black p-1"
          />

          <InputField
            label={"Product Name"}
            placeholder={"Product Name"}
            className="flex-1 text-black p-1"
          />
        </div>
        <div className="row flex w-full gap-4  mb-4">
          <InputField
            label={"Category"}
            placeholder="Category"
            className="flex-1 text-black p-1"
          />
          <InputField
            label={"Product Stock"}
            placeholder={"Product Stock"}
            className="flex-1 text-black p-1"
          />
        </div>

        <div className="textarea row mb-4 ">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            placeholder="Description"
            className="w-full p-1 text-black"
          ></textarea>
        </div>
        <div className="  w-full  grid grid-cols-4 grid-rows-2 mb-4 overflow-auto gap-2">
          {showImages.map((imageUrl, i) => {
            return (
              <div key={i} className=" overflow-hidden">
                <img
                  src={imageUrl.url}
                  className="mb-2 object-cover h-40 w-40"
                  alt={""}
                />
                <input
                  multiple
                  id={i}
                  type="file"
                  name={i}
                  className="cursor-pointer w-full block"
                  onChange={handleFiles}
                />
              </div>
            );
          })}
          <div>
            <label
              htmlFor="photos"
              className="w-[180px] h-[180px] border-2 border-dashed bg-green-400 flex flex-col justify-center items-center"
            >
              <FaRegImages />
              <span>Select images..</span>
            </label>
            <input
              multiple
              id="photos"
              type="file"
              name="photos"
              className="hidden cursor-pointer"
              onChange={handleFiles}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SellerAddProducts;
