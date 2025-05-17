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

function CalorieForm({ children, obj, url, selectedTab }) {
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
  const kgToTonnes = (kg) => {
    return (kg / 1000).toFixed(2); // Округляем до двух знаков после запятой
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
                <span id="rw">Масса песка</span>
                {/* Отображение в кг с форматированием числа */}
                <span id="resultimt">
                  {state?.total?.data?.value.toLocaleString()} кг
                </span>
                {/* Отображение в тоннах с использованием функции перевода */}
                <span>({kgToTonnes(state?.total?.data?.value)} тонн)</span>
              </p>
              {selectedTab === "tab2" ? (
                <p className="resultstring">
                  <span id="rw">Объем песка</span>

                  <span id="resultimt">
                    {selectedTab === "tab2"
                      ? `${state?.total?.data?.volume}м3`
                      : ""}
                  </span>
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default CalorieForm;
