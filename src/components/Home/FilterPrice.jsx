import React from "react";

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
    <section>
      <h2>Price</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="from">From:</label>
          <input type="number" id="from" />
        </div>
        <div>
          <label htmlFor="to">To:</label>
          <input type="number" id="to" />
        </div>
        <button>Apply</button>
      </form>
    </section>
  );
};

export default FilterPrice;
