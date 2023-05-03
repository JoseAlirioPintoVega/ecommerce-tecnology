import React from "react";
import "../../css/filterPrice.css";

const FilterPrice = ({ setInputPrice }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputForm = +e.target.from.value;
    const inputTo = +e.target.to.value;

    if (inputForm && inputTo) {
      setInputPrice({
        from: inputForm,
        to: inputTo,
      });
    } else if (!inputForm && inputTo) {
      setInputPrice({
        from: 0,
        to: inputTo,
      });
    } else if (inputForm && !inputTo) {
      setInputPrice({
        from: inputForm,
        to: Infinity,
      });
    } else {
      setInputPrice({
        from: 0,
        to: Infinity,
      });
    }
  };

  return (
    <section className="filterPrice-container">
      <h3 className="filterPrice__title">Price</h3>
      <form className="filterPrice__form" onSubmit={handleSubmit}>
        <div>
          <label className="filterPrice__label-from" htmlFor="from">
            From:
          </label>
          <input className="filterPrice__input-from" type="number" id="from" />
        </div>
        <div>
          <label className="filterPrice__label-to" htmlFor="to">
            To:
          </label>
          <input className="filterPrice__input-to" type="number" id="to" />
        </div>
        <button className="filterPrice-btn-apply">Apply</button>
      </form>
    </section>
  );
};

export default FilterPrice;
