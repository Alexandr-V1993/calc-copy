"use client";

// Компонент CompoundForm
import React, { useEffect, useReducer, useRef, useState } from "react";

const initialState = {
  total: null,
  click: false,
  bmr: null,
  calories: null,
  carbohydrates: null,
  fats: null,
  proteins: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "total":
      return { ...state, total: action.payload };
    case "click":
      return { ...state, click: action.payload };
    case "bmr":
      return { ...state, bmr: action.payload };
    case "calories":
      return { ...state, calories: action.payload };
    case "carbohydrates":
      return { ...state, carbohydrates: action.payload };
    case "fats":
      return { ...state, fats: action.payload };
    case "proteins":
      return { ...state, proteins: action.payload };

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
      console.log(responseData);
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
                <span id="rw">Вес 1 метра</span>
                <span id="resultimt">{state?.total?.data?.value} кг.</span>
              </p>
              <p className="resultstring">
                <span id="rw">Общий вес {obj?.length} м.</span>
                <span id="resultimt">
                  {state?.total?.data?.valueLength} кг.
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
