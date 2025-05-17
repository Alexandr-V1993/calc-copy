"use client";
import React, { useState } from "react";

function PercentNumForm({ children, obj, url }) {
  const [result, setResult] = useState(null);
  const [click, setClick] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Проверка, что хотя бы одно поле заполнено
    if (obj.years === 0 && obj.months === 0) {
      alert("Пожалуйста, введите возраст кошки (годы или месяцы)");
      return;
    }

    setClick(true);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      const responseData = await response.json();
      setResult(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Форматирование ввода для отображения
  const formatAgeDisplay = () => {
    let display = [];
    if (obj.years > 0) display.push(`${obj.years} г.`);
    if (obj.months > 0) display.push(`${obj.months} мес.`);
    return display.join(" ") || "0 мес.";
  };

  return (
    <form className="inlinecalculator" onSubmit={handleSubmit}>
      <div className="row-res">
        <div className="centre-top testcentre">{children}</div>
        <div className="btn-top">
          <button className="btns bst" type="submit">
            Рассчитать
          </button>
        </div>
        {click && result && (
          <div id="res">
            <div className="test-res">
              <p className="resultstring">
                <span id="rw">Возраст кошки</span>
                <span id="resultimt">
                  {formatAgeDisplay()} = {result.data.text}
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
