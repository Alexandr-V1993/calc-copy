"use client";
// BirthdayForm.js
import React, { useEffect, useReducer, useState } from "react";

const initialState = {
  total: null,
  click: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "total":
      return { ...state, total: action.payload };
    case "click":
      return { ...state, click: action.payload };
    default:
      return state;
  }
}

function BirthdayForm({ children, day, month, year, setDayOfWeek }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [dayOfWeek, setDayOfWeekLocal] = useState(""); // Здесь определяем переменную dayOfWeek

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const inputDate = new Date(year, month, day);
      const daysOfWeek = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
      ];
      const dayIndex = inputDate.getDay();
      const dayOfWeek = daysOfWeek[dayIndex]; // Здесь определяем dayOfWeek

      setDayOfWeekLocal(dayOfWeek); // Передаем значение дня недели

      // Ваш API endpoint для отправки данных
      const response = await fetch("your_api_endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ day, month, year }),
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
            type="submit"
            onClick={() => dispatch({ type: "click", payload: true })}
          >
            Рассчитать
          </button>
        </div>
        {state?.click && (
          <div id="res">
            <div className="test-res">
              <p className="test-2">
                <span id="rw">День недели</span>
                <span id="resultimt">{dayOfWeek}</span>{" "}
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default BirthdayForm;
