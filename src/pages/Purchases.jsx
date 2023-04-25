import axios from "axios";
import React, { useEffect, useState } from "react";
import getConfig from "../utils/getConfig";
import PurchaseCard from "../components/Purcases/PurchaseCard";

const Purchases = () => {
  const [purchasesList, setpurchasesList] = useState();

  useEffect(() => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/purchases";
    axios
      .get(URL, getConfig())
      .then((res) => setpurchasesList(res.data.data.purchases))
      .catch((err) => console.log(err));
  }, []);
  console.log(purchasesList);

  return (
    <div>
      <section>
        <h2>My purchases</h2>
        {purchasesList?.map((purchase) => (
          <PurchaseCard key={purchase.id} purchase={purchase} />
        ))}
      </section>
    </div>
  );
};

export default Purchases;