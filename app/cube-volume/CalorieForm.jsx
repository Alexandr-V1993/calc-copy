"use client";

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

function CalorieForm({ children, obj, url }) {
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

  const formatNumber = (value) => {
    if (typeof value === "number") {
      return new Intl.NumberFormat("ru-RU", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value);
    }
    return value;
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
                <span id="rw">
                  Объем куба,
                  <span className="cursive"> (V)</span>
                </span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.value)}
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">
                  Площадь поверхности,
                  <span className="cursive"> (Sпов)</span>
                </span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.surfaceArea)}
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">
                  Диагональ грани,
                  <span className="cursive"> (f)</span>
                </span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.faceDiagonal)}
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">
                  Диагональ куба,
                  <span className="cursive"> (d)</span>
                </span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.cubeDiagonal)}
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
