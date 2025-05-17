"use client";
import React, { useState, useEffect } from "react";
import "./percent.css";
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
                <span id="rw">Идеальный вес</span>
                <span id="resultimt">{total?.data?.avg} кг</span>
              </p>
              <p className="resultstring">
                <span id="rw">Формула Петерсона (2016)</span>
                <span id="resultimt">{total?.data?.peterson} кг</span>
              </p>
              <p className="resultstring">
                <span id="rw">Формула Миллера (1983)</span>
                <span id="resultimt">{total?.data?.miller} кг</span>
              </p>
              <p className="resultstring">
                <span id="rw">Формула Робинсона (1983)</span>
                <span id="resultimt">{total?.data?.robinson} кг</span>
              </p>
              <p className="resultstring">
                <span id="rw">Формула Дивайна (1974)</span>
                <span id="resultimt">{total?.data?.devine} кг</span>
              </p>
              <p className="resultstring">
                <span id="rw">Формула Хамви (1964)</span>
                <span id="resultimt">{total?.data?.hamwi} кг</span>
              </p>
              <p className="resultstring">
                <span id="rw">Формула Брока (1871)</span>
                <span id="resultimt">{total?.data?.broca} кг</span>
              </p>
              <p className="resultstring">
                <span id="rw">Формула Лоренца (1929 г.)</span>
                <span id="resultimt">{total?.data?.lorentz} кг</span>
              </p>
              <p className="resultstring">
                <span id="rw">Здоровый диапазон (ИМТ)</span>
                <span id="resultimt">
                  {total?.data?.healthyBMIRange[0]} -{" "}
                  {total?.data?.healthyBMIRange[1]} кг
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default PercentNumForm;
