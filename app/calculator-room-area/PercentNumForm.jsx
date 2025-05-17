"use client";
import React, { useState } from "react";

function PercentNumForm({ children, obj, url }) {
  const [total, setTotal] = useState(null);
  const [click, setClick] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setClick(true); // Устанавливаем флаг клика сразу при отправке формы

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
      console.error("Ошибка при получении данных:", error);
    }
  };

  const formattedValue = total?.data?.value
    ? total.data.value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
    : "0.00";

  return (
    <form className="inlinecalculator" onSubmit={handleSubmit}>
      <div className="row-res">
        <div className="centre-top testcentre">{children}</div>
        <div className="btn-top">
          <button type="submit" className="btns bst">
            Рассчитать
          </button>
        </div>
        {click && (
          <div id="res">
            <div className="test-res">
              <p className="resultstring">
                <span id="rw">Площадь комнаты:</span>
                <span id="resultimt">{formattedValue} м²</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default PercentNumForm;
