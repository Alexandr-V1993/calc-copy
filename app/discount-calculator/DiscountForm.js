import React, { useState, useEffect } from "react";
import "./DiscountForm.css";

function DiscountForm({
  children,
  obj,
  url,
  price,
  disconts,
  priceDiscount,
  modeSelect,
  setDiscount,
  setDiscountPercentage,
  setPric,
  priceBezScidki,
}) {
  const [total, setTotal] = useState("");
  const [discount, setDiscounts] = useState("");
  const [prices, setPrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      const responseData = await response.json();
      setTotal(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (total?.data?.discount) {
      setDiscounts(total.data.discount);
      setPrice(total.data.price);
    }
    if (total?.data?.price) {
      setDiscountedPrice(total.data.price);
    }
  }, [total]);

  useEffect(() => {
    setDiscounts("");
    setPrice("");
    setDiscountedPrice("");
  }, [modeSelect]);

  useEffect(() => {}, []);
  return (
    <form
      className="inlinecalculator"
      onSubmit={handleSubmit}
      style={{ wordBreak: "break-all" }}
    >
      <div className="centre-top testcentre">{children}</div>

      <div id="result">
        <p className="vsize">{}</p>

        <p className="resultstring">
          {modeSelect !== "startingPrice" && (
            <span id="resultimt">
              {disconts}
              {new Intl.NumberFormat("ru-RU").format(discount)}
              {modeSelect === "discountPercentage" ? "%" : " ₽"}
            </span>
          )}
          {modeSelect === "discountedPrice" && (
            <span id="resultimt">
              {priceDiscount}
              {new Intl.NumberFormat("ru-RU").format(prices)} ₽
            </span>
          )}
          {modeSelect === "startingPrice" && (
            <span id="resultimt">
              {priceBezScidki}
              {new Intl.NumberFormat("ru-RU").format(discountedPrice)} ₽
            </span>
          )}
        </p>
      </div>

      <div className="btn-top">
        <button className="btns bst" onClick={handleSubmit}>
          Рассчитать
        </button>
      </div>
    </form>
  );
}

export default DiscountForm;
