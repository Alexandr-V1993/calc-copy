"use client";

import React, { useEffect, useReducer } from "react";
import "./CalorieForm.css"; // ← Подключаем только стиль для результатов

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

export default function CalorieForm({ children, obj, url }) {
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

      const data = await response.json();
      dispatch({ type: "total", payload: data });
      dispatch({ type: "click", payload: true });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (state?.total?.data) {
      dispatch({ type: "bmr", payload: state.total.data.bmr });
      dispatch({ type: "calories", payload: state.total.data.calories });
      dispatch({
        type: "carbohydrates",
        payload: state.total.data.carbohydrates,
      });
      dispatch({ type: "fats", payload: state.total.data.fats });
      dispatch({ type: "proteins", payload: state.total.data.proteins });
    }
  }, [state.total]);

  const calculatePercentage = (value, totalCalories) => {
    if (!totalCalories) return 0;
    return Math.round((value / totalCalories) * 100);
  };

  const proteinCalories = (state.proteins || 0) * 4;
  const fatCalories = (state.fats || 0) * 9;
  const carbCalories = (state.carbohydrates || 0) * 4;
  const totalCalories = proteinCalories + fatCalories + carbCalories;

  const proteinPercentage = calculatePercentage(proteinCalories, totalCalories);
  const fatPercentage = calculatePercentage(fatCalories, totalCalories);
  const carbPercentage = calculatePercentage(carbCalories, totalCalories);

  const adjustPercentages = () => {
    const percentages = [proteinPercentage, fatPercentage, carbPercentage];
    const sum = percentages.reduce((a, b) => a + b, 0);
    if (sum !== 100) {
      const diff = 100 - sum;
      const maxIndex = percentages.indexOf(Math.max(...percentages));
      percentages[maxIndex] += diff;
    }
    return percentages;
  };

  const [adjustedProtein, adjustedFat, adjustedCarb] = adjustPercentages();

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
          <div className="sidebars">
            <div className="sidebar-header">
              <a href="/mifflin-calories">
                {" "}
                <img
                  className="sidebar-logo"
                  src="/cal1.svg"
                  alt="Миффлина-Сан Жеора"
                />
                <span className="sidebar-title">
                  Калькулятор калорий по формуле Миффлина-Сан Жеора
                </span>
              </a>
            </div>
          </div>
        </div>
        {state?.click && (
          <div id="res" className="result-section">
            {/* Базовый обмен веществ */}
            <div className="calc-frow result-row">
              <div className="calc-fleft">Базовый обмен веществ (BMR)</div>
              <div className="calc-fright">
                <div className="calc-result-value">
                  {state.bmr?.toLocaleString("ru-RU") || "—"}
                </div>
                <span className="calc-text-desc"> кКал</span>
              </div>
            </div>

            {/* Диаграмма с калориями справа от заголовка */}
            <div className="calc-frow result-row">
              <div className="calc-fleft">
                Суточная норма калорий
                <div className="calc-result-value">
                  {state.calories?.toLocaleString("ru-RU") || "—"} кКал
                </div>
              </div>
              <div className="calc-fright">
                <div className="chart-wrapper">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="50" cy="50" r="45" fill="#f5f5f5" />
                    <path
                      d="M50 5 A45 45 0 0 1 50 95 A45 45 0 0 1 50 5"
                      stroke="#BF4DF5"
                      strokeWidth="10"
                      strokeDasharray={`${adjustedCarb * 2.827}, 282.743`}
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M50 5 A45 45 0 0 1 50 95 A45 45 0 0 1 50 5"
                      stroke="#FF599E"
                      strokeWidth="10"
                      strokeDasharray={`${adjustedFat * 2.827}, 282.743`}
                      strokeDashoffset={`-${adjustedCarb * 2.827}`}
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M50 5 A45 45 0 0 1 50 95 A45 45 0 0 1 50 5"
                      stroke="#FFDE00"
                      strokeWidth="10"
                      strokeDasharray={`${adjustedProtein * 2.827}, 282.743`}
                      strokeDashoffset={`-${
                        (adjustedCarb + adjustedFat) * 2.827
                      }`}
                      strokeLinecap="round"
                      fill="none"
                    />
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      fontSize="6"
                      fontWeight="bold"
                      fill="#333"
                    >
                      {adjustedProtein}/{adjustedFat}/{adjustedCarb}%
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            {/* БЖУ по отдельности */}
            <div className="breakdown">
              <div className="breakdown-item">
                <div
                  className="dot"
                  style={{ backgroundColor: "#FFDE00" }}
                ></div>
                <span>Белки: {state.proteins?.toFixed(2) || "—"} г</span>
                <strong>{adjustedProtein}%</strong>
              </div>
              <div className="breakdown-item">
                <div
                  className="dot"
                  style={{ backgroundColor: "#FF599E" }}
                ></div>
                <span>Жиры: {state.fats?.toFixed(2) || "—"} г</span>
                <strong>{adjustedFat}%</strong>
              </div>
              <div className="breakdown-item">
                <div
                  className="dot"
                  style={{ backgroundColor: "#BF4DF5" }}
                ></div>
                <span>
                  Углеводы: {state.carbohydrates?.toFixed(2) || "—"} г
                </span>
                <strong>{adjustedCarb}%</strong>
              </div>
            </div>

            <small className="disclaimer">
              * Данные результаты являются рекомендацией, для более точных
              результатов обратитесь к специалистам.
            </small>
          </div>
        )}
      </div>
    </form>
  );
}
