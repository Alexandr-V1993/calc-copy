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

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
    }).format(value);
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
                  Для изделия необходимо{" "}
                  <span className="cursive">(при ширине {obj.width} см)</span>
                </span>
                <span id="resultimt">
                  {state?.total?.data?.value.toFixed(2)} м
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Вес ткани</span>
                <span id="resultimt">{state?.total?.data?.weight} кг</span>
              </p>
              <p className="resultstring">
                <span id="rw">Цена ткани</span>
                <span id="resultimt">
                  {formatCurrency(state?.total?.data?.cost)}
                </span>
              </p>
              <table className="result-table">
                <thead>
                  <tr>
                    <th>Ширина рулона, см</th>
                    <th>Кол-во полотна, м</th>
                  </tr>
                </thead>
                <tbody>
                  {state?.total?.data?.values &&
                    Object.entries(state.total.data.values).map(
                      ([width, value]) => (
                        <tr key={width}>
                          <td>{width}</td>
                          <td>{value}</td>
                        </tr>
                      )
                    )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .result-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        .result-table th,
        .result-table td {
          border: 1px solid #ddd;
          padding: 8px;
        }

        .result-table th {
          background-color: #f2f2f2;
          text-align: left;
        }
      `}</style>
    </form>
  );
}

export default CalorieForm;
