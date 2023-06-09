import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cartproduct from "../components/Home/Cardproduct";
import "../css/home.css";
import FilterCategory from "../components/Home/FilterCategory";
import FilterPrice from "../components/Home/FilterPrice";
import ToOrderProducts from "../components/Home/ToOrderProducts";
import { BsSearch } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";

const Home = () => {
  const [productsFilter, setProductsFilter] = useState();

  const [inputPrice, setInputPrice] = useState({
    from: 0,
    to: Infinity,
  });

  const products = useSelector((state) => state.products);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (products) {
      setProductsFilter(products);
    }
  }, [products]);

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase().trim();
    const filterP = products?.filter((prod) =>
      prod.title.toLowerCase().includes(inputValue)
    );

    setProductsFilter(filterP);

    setInputValue(e.target.value);
  };

  const filterCallback = (prod) => {
    return +prod.price >= inputPrice.from && +prod.price <= inputPrice.to;
  };

  return (
    <div className="home-container">
      <div className="home__search">
        <input
          className="home__search-input"
          value={inputValue}
          onChange={handleChange}
          type="text"
        />
        <div className="home__search-icon">
          <BsSearch />
        </div>
      </div>
      <div>
        <h2>
          <FiFilter />
          Filters
        </h2>
        <div>
          <FilterPrice setInputPrice={setInputPrice} />
          <FilterCategory setInputValue={setInputValue} />
        </div>
      </div>
      <ToOrderProducts />
      <div className="products-container">
        {productsFilter &&
        productsFilter.filter(filterCallback).length !== 0 ? (
          productsFilter
            ?.filter(filterCallback)
            .map((product) => (
              <Cartproduct key={product.id} product={product} />
            ))
        ) : (
          <h2>Not exist products whit that filter</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
