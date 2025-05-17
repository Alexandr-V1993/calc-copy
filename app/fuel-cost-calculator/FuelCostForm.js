"use client";
import React, { useState, useEffect } from "react";
import "./FuelCostForm.css";

function FuelCostForm({ children, obj, url, rashod, CenaTopliva }) {
  const [total, setTotal] = useState("");
  const [cost, setCost] = useState("");
  const [consumption, setConsumption] = useState("");
  const [click, setClick] = useState(false);

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
    if (total?.data?.cost || total?.data?.consumption) {
      setCost(total?.data?.cost.toFixed(2));
      setConsumption(Math.round(total?.data?.consumption.toFixed(0)));
    }
  }, [total]);

  return (
    <form
      className="inlinecalculator"
      onSubmit={handleSubmit}
      style={{ wordBreak: "break-all" }}
    >
      <div className="row-res">
        <div className="centre-top testcentre">{children}</div>
        <div className="btn-top">
          <button className="btns bst" onClick={() => setClick(true)}>
            Рассчитать
          </button>
        </div>
        {click && cost && consumption && (
          <div id="res">
            <p className="vsize">{}</p>

            <p className="resultstring">
              <span id="resultimt">
                {rashod}
                {new Intl.NumberFormat("ru-RU").format(consumption)}
              </span>

              <span id="resultimt">
                {CenaTopliva}
                {new Intl.NumberFormat("ru-RU", {
                  style: "currency",
                  currency: "RUB",
                  minimumFractionDigits: 3,
                  maximumFractionDigits: 3,
                }).format(cost)}
              </span>

              <span></span>
            </p>
          </div>
        )}
      </div>
    </form>
  );
}

export default FuelCostForm;
