import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cartproduct from "../components/Home/Cardproduct";
import "../css/home.css";
import FilterCategory from "../components/Home/FilterCategory";
import FilterPrice from "../components/Home/FilterPrice";

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
  console.log(productsFilter?.length);
  console.log(productsFilter?.filter(filterCallback).length);

  return (
    <div>
      <input value={inputValue} onChange={handleChange} type="text" />
      <FilterPrice setInputPrice={setInputPrice} />
      <FilterCategory setInputValue={setInputValue} />
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
