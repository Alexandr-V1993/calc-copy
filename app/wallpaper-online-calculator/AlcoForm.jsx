"use client";

import React, { useEffect, useReducer } from "react";

const initialState = {
  total: null,
  click: false,
  bac: null,
  alcoholElimination: null,
  breath: null,
  density: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "total":
      return { ...state, total: action.payload };
    case "click":
      return { ...state, click: action.payload };
    case "bac":
      return { ...state, bac: action.payload };
    case "alcoholElimination":
      return { ...state, alcoholElimination: action.payload };
    case "breath":
      return { ...state, breath: action.payload };
    case "density":
      return { ...state, density: action.payload };
    default:
      return state;
  }
}

function AlcoForm({ children, obj, url }) {
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

  useEffect(() => {
    if (state?.total?.data) {
      dispatch({
        type: "bac",
        payload: state.total.data.bac,
      });
      dispatch({
        type: "alcoholElimination",
        payload: state.total.data.alcoholElimination,
      });
      dispatch({
        type: "breath",
        payload: state.total.data.breath,
      });
      dispatch({
        type: "density",
        payload: state.total.data.density,
      });
    }
  }, [state.total]);

  const formatNumber = (number, options = {}) => {
    if (number !== null && number !== undefined) {
      return number.toLocaleString("ru-RU", options);
    }
    return "—"; // Return dash if number is not available
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
              <p className="test-2">
                <span id="rw">Количество рулонов</span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.totalRolls)} шт
                </span>
              </p>
              <p className="test-2">
                <span id="rw">Количество полотен (по 3,44 м)</span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.totalStrips)} шт
                </span>
              </p>
              <p className="test-2">
                <span id="rw">Периметр стен</span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.perimeter, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{" "}
                  м
                </span>
              </p>
              <p className="test-2">
                <span id="rw">Площадь стен под клей</span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.area, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{" "}
                  м²
                </span>
              </p>
              <p className="test-2">
                <span id="rw">Общая стоимость</span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.cost, {
                    style: "currency",
                    currency: "RUB",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{" "}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default AlcoForm;
