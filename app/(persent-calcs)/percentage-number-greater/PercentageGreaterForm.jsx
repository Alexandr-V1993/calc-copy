"use client";
import React, { useState, useEffect } from "react";

function PercentageGreaterForm({ children, obj, url }) {
  const [total, setTotal] = useState("");

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

  useEffect(() => {}, []);

  return (
    <form className="inlinecalculator" onSubmit={handleSubmit}>
      <div className="row-res">
        <div className="centre-top testcentre">{children}</div>
        <div className="btn-top">
          <button className="btns bst" onClick={() => setClick(true)}>
            Рассчитать
          </button>
        </div>
        {click && (
          <div id="res">
            <p className="vsize">Результат:</p>
            <p className="resultstring">
              <span id="resultimt">
                {total?.data?.value !== undefined
                  ? new Intl.NumberFormat("ru-RU").format(total?.data?.value)
                  : ""}{" "}
                %
              </span>
            </p>
          </div>
        )}
      </div>
    </form>
  );
}

export default PercentageGreaterForm;
