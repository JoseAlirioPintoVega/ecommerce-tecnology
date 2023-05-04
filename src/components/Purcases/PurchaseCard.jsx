import React from "react";
import "../../css/purchaseCard.css";

const PurchaseCard = ({ purchase }) => {
  const dataPurchase = new Date(purchase.createdAt);
  return (
    <div>
      <article className="purchases">
        <h4 className="title__purchase">{dataPurchase.toLocaleDateString()}</h4>
        <section>
          <ul className="purchases-container">
            {purchase.cart.products.map((product) => (
              <li className="product__purchase" key={product.id}>
                <h4 className="name__purchase"> {product.title}</h4>
                <div className="product__purchase">
                  <span className="quantity__purchase">
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
