"use client";
import React, { useState, useEffect } from "react";

function PercentNumForm({ children, obj, url }) {
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
            <div className="test-res">
              <p className="resultstring">
                <span id="rw">Тип фигуры:</span>
                <span id="resultimt">{total?.data?.valueText}</span>
              </p>
              <p className="resultstring">
                <span id="rw">Соотношение талии и бедер (WHR):</span>
                <span id="resultimt">{total?.data?.whr} </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default PercentNumForm;
