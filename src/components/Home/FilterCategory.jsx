import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAllProducts,
  getProductsByCategory,
} from "../../store/slices/product.slice";
import "../../css/filterCategory.css";

const FilterCategory = ({ setInputValue }) => {
  const [categories, setCategories] = useState();
  useEffect(() => {
    const URL =
      "https://e-commerce-api.academlo.tech/api/v1/products/categories";
    axios
      .get(URL)
      .then((res) => setCategories(res.data.data.categories))
      .catch((err) => console.log(err));
  }, []);

  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(getProductsByCategory(id));
    setInputValue("");
  };

  const handleAllProducts = () => {
    dispatch(getAllProducts());
    setInputValue("");
  };

  return (
    <div>
      <section className="filterCategory-container">
        <h3 className="filterCategory__title">Categories</h3>
        <ul className="filterCategory__list">
          <li
            className="filterCategory__li allCategories"
            onClick={handleAllProducts}
          >
            All products
          </li>
          {categories?.map((category) => (
            <li
              className="filterCategory__li category"
              onClick={() => handleClick(category.id)}
              key={category.id}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default FilterCategory;
