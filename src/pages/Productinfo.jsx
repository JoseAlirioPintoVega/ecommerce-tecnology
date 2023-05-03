import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductDescription from "../components/Productinfo/ProductDescription";
import { useSelector } from "react-redux";
import Cartproduct from "../components/Home/Cardproduct";
import SliderImg from "../components/Productinfo/SliderImg";

const Productinfo = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();

  const [similarProducts, setSimilarProducts] = useState();

  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    const URl = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`;
    axios
      .get(URl)
      .then((res) => setProduct(res.data.data.product))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    if (allProducts && product) {
      const pivot = allProducts.filter(
        (prod) => prod.category.name == product.category
      );
      setSimilarProducts(pivot);
    }
  }, [allProducts, product]);

  return (
    <div>
      <ProductDescription product={product} />
      <SliderImg listImgs={product?.productImgs} />
      <div>
        <section>
          <h2>Discover similar items</h2>
          <div className="slimilar-products-container"></div>
          {similarProducts?.map((simprod) => {
            if (simprod.title !== product.title) {
              return <Cartproduct key={simprod.id} product={simprod} />;
            }
          })}
        </section>
      </div>
    </div>
  );
};

export default Productinfo;
