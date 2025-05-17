"use client";

// Компонент CompoundForm
import React, { useReducer } from "react";
import "./stag.css";

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

function CalorieForm({ children, obj, url, vel }) {
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

  const formatNumber = (num, decimals = 2) => {
    return new Intl.NumberFormat("ru-RU", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(num);
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
        {state?.click && obj?.type === "radius" && (
          <div id="res">
            <div className="test-res">
              <p className="resultstring">
                <span id="rw">
                  Объем цилиндра,
                  <span className="red"> V</span>
                </span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.volume, 2)} {vel}
                  <sup>3</sup>
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">
                  Диаметр,
                  <span className="red"> d</span>
                </span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.diameter)}
                </span>
              </p>
            </div>
          </div>
        )}
        {state?.click && obj?.type === "diameter" && (
          <div id="res">
            <div className="test-res">
              <p className="resultstring">
                <span id="rw">
                  Объем цилиндра,
                  <span className="red"> V</span>
                </span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.volume, 2)} {vel}
                  <sup>3</sup>
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">
                  Радиус,
                  <span className="red"> r</span>
                </span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.radius)}
                </span>
              </p>
            </div>
          </div>
        )}
        {state?.click && obj?.type === "area" && (
          <div id="res">
            <div className="test-res">
              <p className="resultstring">
                <span id="rw">
                  Объем цилиндра,
                  <span className="red"> V</span>
                </span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.volume, 2)} {vel}
                  <sup>3</sup>
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
