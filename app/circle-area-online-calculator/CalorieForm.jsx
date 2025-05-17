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
        {state?.click && (
          <div id="res">
            <div className="test-res">
              <p className="resultstring">
                <span id="rw">
                  Площадь круга, <span className="red">S</span>
                </span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.area, 3)} {vel}²
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">
                  {obj.type === "diameter" || obj.type === "circumference"
                    ? "Радиус круга,"
                    : "Диаметр круга,"}
                  <span className="red">
                    {" "}
                    {obj.type === "diameter" || obj.type === "circumference"
                      ? "r"
                      : "d"}
                  </span>
                </span>

                <span id="resultimt">
                  {obj.type === "diameter" || obj.type === "circumference"
                    ? formatNumber(state?.total?.data?.radius, 3)
                    : formatNumber(state?.total?.data?.diameter, 3)}{" "}
                  {vel}
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">
                  {obj.type === "circumference"
                    ? "Диаметр круга,"
                    : "Длина окружности,"}
                  <span className="red">
                    {" "}
                    {obj.type === "circumference" ? "d" : "L"}
                  </span>
                </span>

                <span id="resultimt">
                  {obj.type === "circumference"
                    ? formatNumber(state?.total?.data?.diameter, 3)
                    : formatNumber(state?.total?.data?.circumference, 3)}{" "}
                  {vel}
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
