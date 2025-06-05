import React, { useRef, useState } from "react";
import { FaRegImages } from "react-icons/fa";
import Input from "../../components/Input";
import { IoIosCloseCircleOutline } from "react-icons/io";

const categoriesList = [
  { id: 1, name: "sports" },
  { id: 2, name: "computer" },
  { id: 3, name: "football" },
  { id: 4, name: "mobile" },
  { id: 5, name: "electronics" },
  { id: 6, name: "watch" },
];

const SellerAddProducts = () => {
  const [images, setImages] = useState([]);
  const [showImages, setShowImages] = useState([]);

  const [state, setState] = useState({
    productName: "",
    brandName: "",
    discount: "",
    description: "",
    stock: "",
    price: "",
  });

  // Handle form states

  function handleState(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  // Handle add and remove files
  function handleRemovePhoto(id) {
    const updatedImages = images.filter((cat, i) => i !== id);
    const updateShowImages = showImages.filter((cat, i) => i !== id);
    setImages(updatedImages);
    setShowImages(updateShowImages);
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
    setImages([...images, ...files]);
  }

  function handleFileChange(img, index) {
    const updatedImages = images.slice();
    updatedImages[index] = img;
    const updateShowImages = showImages.slice();
    updateShowImages[index] = { url: URL.createObjectURL(img) };

    setImages(updatedImages);
    setShowImages(updateShowImages);
  }

  // Handle Category Search Selection
  const categoryInputRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState({
    id: "",
    name: "--select-category--",
  });
  const [categoryShow, setCategoryShow] = useState(false);
  const [searchedCategory, setSearchedCategory] = useState("");
  const [categories, setCategories] = useState(categoriesList);

  function handleSelectCategory(category) {
    setSelectedCategory(category);
    setCategoryShow((categoryShow) => !categoryShow);
    setSearchedCategory("");
    categoryInputRef.current.focus();
  }

  function handleSearchedCategory(e) {
    const value = e.target.value;
    setSearchedCategory(value);
    if (value) {
      const filteredCategories = categoriesList.filter((category) => {
        const cat = category.name.toLowerCase();
        return cat.includes(value.toLowerCase());
      });
      setCategories(filteredCategories);
    } else {
      setCategories(categoriesList);
    }
  }

  // Handle form submit

  function handleSubmit(e) {
    e.preventDefault();
  }

  console.log(state);
  /*
   */
  return (
    <div className="h-full bg-[var(--primary-color)] p-4 rounded-md text-white overflow-scroll">
      <form onSubmit={handleSubmit}>
        <div className="row flex w-full gap-4  mb-4">
          <Input
            label="Product Name"
            placeholder="Product Name"
            name={"productName"}
            value={state.productName}
            onChange={(e) => handleState(e)}
          />
          <Input
            label="Brand Name"
            placeholder="brandName"
            name={"brandName"}
            value={state.brandName}
            onChange={(e) => handleState(e)}
          />
        </div>
        {/* Category Starts*/}
        <div className="row flex w-full gap-4  mb-4">
          <div className="w-full relative ">
            <Input
              readOnly
              label="Category"
              placeholder={"Product Name"}
              name="category"
              value={selectedCategory.name}
              onClick={(e) => {
                setCategoryShow((categoryShow) => !categoryShow);
              }}
              className="w-full rounded-md p-2 text-gray-600 focus:text-black"
              ref={categoryInputRef}
            />
            {categoryShow && (
              <div className="category-list transition-all  duration-[5000s] scale-100 absolute top-[90%] bg-purple-900 w-full rounded-md flex flex-col p-4">
                <Input
                  placeholder="search category"
                  value={searchedCategory}
                  onChange={(e) => handleSearchedCategory(e)}
                />
                {categories.map((category) => (
                  <span
                    key={category.id}
                    onClick={() => handleSelectCategory(category)}
                    className={`${
                      selectedCategory.id === category.id ? "bg-purple-400" : ""
                    } cursor-pointer p-2 rounded-sm`}
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            )}
          </div>
          <Input
            label="Product Stock"
            placeholder="Product Stock"
            name="stock"
            value={state.stock}
            onChange={(e) => handleState(e)}
          />
        </div>
        {/* Category Ends*/}
        <div className="row flex w-full gap-4  mb-4">
          <Input
            label="Price"
            placeholder="Enter Price"
            name={"price"}
            value={state.price}
            onChange={(e) => handleState(e)}
          />
          <Input
            label="Discount"
            placeholder="brandName"
            name={"discount"}
            value={state.discount}
            onChange={(e) => handleState(e)}
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
            value={state.description}
            onChange={(e) => handleState(e)}
          ></textarea>
        </div>
        {/* Insert Images */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 mb-4  gap-y-4 ">
          {showImages.map((imageUrl, i) => {
            return (
              <div key={i} className=" overflow-hidden  h-40 w-40 relative">
                <img
                  src={imageUrl.url}
                  className="mb-2 object-cover h-4/5 w-full"
                  alt={""}
                />
                <Input
                  id={i}
                  type="file"
                  name={i}
                  onChange={(e) => handleFileChange(e.target.files[0], i)}
                  className="w-full text-xs "
                />
                <span
                  className="absolute right-1 top-1 text-white rounded-full bg-red-900  text-2xl cursor-pointer"
                  onClick={() => handleRemovePhoto(i)}
                >
                  <IoIosCloseCircleOutline />
                </span>
              </div>
            );
          })}
          <div className="h-40 w-40">
            <label
              htmlFor="photos"
              className="w-full h-full cursor-pointer border-2 border-dashed bg-green-400 flex flex-col justify-center items-center"
              tabIndex={0}
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
