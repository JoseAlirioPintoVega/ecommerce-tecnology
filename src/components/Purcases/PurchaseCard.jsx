import React from "react";
import "../../css/purchaseCard.css";

const PurchaseCard = ({ purchase }) => {
  const dataPurchase = new Date(purchase.createdAt);
  return (
    <div>
      <article className="purchases">
        <h4 className="title__purchases">
          {dataPurchase.toLocaleDateString()}
        </h4>
        <section>
          <ul className="purchases-container">
            {purchase.cart.products.map((product) => (
              <li className="product__purchases" key={product.id}>
                <h4> {product.title}</h4>
                <div className="product__purchases">
                  <span className="quantity__purchases">
                    {product.productsInCart.quantity}
                  </span>
                  <span className="quantity">$ {product.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
};

export default PurchaseCard;
