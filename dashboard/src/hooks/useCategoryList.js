import { useState } from "react";

const useCategoryList = (categoriesList) => {
  const [searchedCategory, setSearchedCategory] = useState("");
  const [categories, setCategories] = useState(categoriesList);
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

  return {
    categories,
    searchedCategory,
    handleSearchedCategory,
    setSearchedCategory,
  };
};

export default useCategoryList;
