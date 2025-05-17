"use client";

// Компонент CompoundForm
import React, { useEffect, useReducer, useState } from "react";

const initialState = {
  total: null,
  click: false,
  textValue: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "total":
      return { ...state, total: action.payload };
    case "click":
      return { ...state, click: action.payload };
    case "textValue":
      return { ...state, textValue: action.payload };

    default:
      return state;
  }
}

function CalorieForm({ children, obj, url, width, length, thickness }) {
  const [state, dispatch] = useReducer(reducer, initialState);

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

      dispatch({ type: "total", payload: responseData });
      dispatch({ type: "click", payload: true });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <form className="inlinecalculators" onSubmit={handleSubmit}>
      <div className="row-res">
        <div className="centre-top testcentre">{children}</div>
        <div className="btn-top">
          <button
            className="btns bst"
            onClick={() => dispatch({ type: "click", payload: true })}
          >
            Рассчитать
          </button>
        </div>
        {state?.click && (
          <div id="res">
            <div className="test-res">
              <p className="resultstring">
                <span id="rw">Объем пиломатериалов</span>
                <span id="resultimt">
                  {state?.total?.data?.value.toFixed(3)} м3
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Объем 1шт.</span>
                <span id="resultimt">
                  {state?.total?.data?.valuePerUnit.toFixed(3)} м3
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">В одном кубическом метре (1м3)</span>
                <span id="resultimt">
                  {state?.total?.data?.numberPerMeter}{" "}
                  {`шт.размера ${thickness}x${width}x${length}`}
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Стоимость пиломатериалов:</span>
                <span id="resultimt">
                  {state?.total?.data?.cost?.toLocaleString("ru-RU", {
                    style: "currency",
                    currency: "RUB",
                  })}
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Стоимость 1шт.:</span>
                <span id="resultimt">
                  {state?.total?.data?.costPerUnit?.toLocaleString("ru-RU", {
                    style: "currency",
                    currency: "RUB",
                  })}
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Общий вес пиломатериалов</span>
                <span id="resultimt">
                  {state?.total?.data?.weight.toFixed(2)} кг
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Общая площадь</span>
                <span id="resultimt">
                  {state?.total?.data?.area.toFixed(2)} м2
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Площадь 1шт.</span>
                <span id="resultimt">
                  {state?.total?.data?.areaPerUnit.toFixed(2)} м2
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default CalorieForm;
