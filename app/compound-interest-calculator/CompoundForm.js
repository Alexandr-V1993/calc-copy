"use client";
function CurrencyFormat(amount) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
  }).format(amount);
}

// Компонент CompoundForm
import React, { useEffect, useReducer, useRef, useState } from "react";
import Chart from "chart.js/auto";

const initialState = {
  total: null,
  click: false,
  finalInvestment: 0,
  interestIncome: 0,
  replenishment: 0,
  chart: {
    years: [],
    principal: [],
    interest: [],
    balance: [],
  },
  schedule: null,
};

function reducer(state, action) {
  console.log(state.schedule);
  switch (action.type) {
    case "total":
      return { ...state, total: action.payload };
    case "click":
      return { ...state, click: action.payload };
    case "finalInvestment":
      return { ...state, finalInvestment: action.payload };
    case "interestIncome":
      return { ...state, interestIncome: action.payload };
    case "replenishment":
      return { ...state, replenishment: action.payload };
    case "chart":
      return { ...state, chart: action.payload };
    case "schedule":
      return { ...state, schedule: action.payload };
    default:
      return state;
  }
}

function CompoundForm({ children, obj, url }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const chartRef = useRef(null);

  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

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
        type: "finalInvestment",
        payload: state.total.data.finalInvestment,
      });
      dispatch({
        type: "interestIncome",
        payload: state.total.data.interestIncome,
      });
      dispatch({
        type: "replenishment",
        payload: state.total.data.replenishment,
      });
      dispatch({
        type: "chart",
        payload: state.total.data.chart,
      });
      dispatch({
        type: "schedule",
        payload: state.total.data.schedule,
      });
    }
  }, [state.total]);

  useEffect(() => {
    if (chartRef.current && state?.chart?.years.length > 0) {
      const investChart = chartRef.current.getContext("2d");

      // Уничтожаем предыдущий график, если он существует
      if (window.investChart) {
        window.investChart.destroy();
      }

      window.investChart = new Chart(investChart, {
        type: "line",
        data: {
          labels: state.chart.years,
          datasets: [
            {
              label: "Собственные средства",
              data: state.chart.principal,
              borderColor: "rgb(119, 136, 153, 1)",
              backgroundColor: "rgb(119, 136, 153, 1)",
              fill: false,
              pointRadius: 1,
              lineTension: 0,
            },
            {
              label: "Доход",
              data: state.chart.interest,
              borderColor: "rgb(60, 179, 113, 1)",
              backgroundColor: "rgb(60, 179, 113, 1)",
              fill: false,
              pointRadius: 1,
              lineTension: 0,
            },
            {
              label: "Баланс",
              data: state.chart.balance,
              borderColor: "rgb(244, 164, 96, 1)",
              backgroundColor: "rgb(244, 164, 96, 1)",
              fill: false,
              pointRadius: 1,
              lineTension: 1,
            },
          ],
        },
        options: {
          interaction: {
            intersect: false,
            mode: "index",
          },
          plugins: {
            title: {
              display: true,
              text: "График прироста",
              padding: {
                top: 10,
                bottom: 30,
              },
            },
            tooltip: {
              callbacks: {
                title: (tooltipItems) => {
                  tooltipItems.forEach(function (tooltipItem) {
                    tooltipItem.formattedValue = CurrencyFormat(
                      tooltipItem.raw
                    );
                  });
                },
              },
            },
          },
        },
      });
    }
  }, [state?.chart?.years]);

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
                <span id="rw">Итоговая сумма</span>
                <span id="resultimt">
                  {CurrencyFormat(state.finalInvestment)}
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Доход</span>
                <span id="resultimt">
                  {CurrencyFormat(state.interestIncome)}
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Сумма всех пополнений</span>
                <span id="resultimt">
                  {CurrencyFormat(state.replenishment)}
                </span>
              </p>
              <div className="canvas-test">
                <canvas ref={chartRef}></canvas>
              </div>
              <div className="table-container">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Год</th>
                      <th>Начальная сумма</th>
                      <th>Процентный доход</th>
                      <th>Вложения</th>
                      <th>Конечная сумма</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object?.keys(state?.schedule || {})?.map((date, index) => {
                      const entry = state?.schedule[date];
                      const test = entry?.values;
                      console.log(date);
                      return (
                        <tr key={index}>
                          <td>
                            <div className="colors-td">
                              <td className="year-cell">{date}</td>
                              {Object.keys(test || {}).map((el, innerIndex) => (
                                <tr key={innerIndex}>
                                  <span>
                                    {" "}
                                    {new Date(el).toLocaleString("ru-RU", {
                                      month: "long",
                                    })}
                                  </span>
                                </tr>
                              ))}
                            </div>
                          </td>
                          <td>
                            <div className="colors-td">
                              <td className="amount-cell">
                                {entry?.startInvestment.toLocaleString(
                                  "ru-RU",
                                  {
                                    style: "currency",
                                    currency: "RUB",
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  }
                                )}
                              </td>
                              {Object.keys(test || {}).map((el, innerIndex) => (
                                <tr key={innerIndex}>
                                  {" "}
                                  <span>
                                    {test[el]?.startInvestment?.toLocaleString(
                                      "ru-RU",
                                      {
                                        style: "currency",
                                        currency: "RUB",
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                      }
                                    )}
                                  </span>
                                </tr>
                              ))}
                            </div>
                          </td>
                          <td>
                            <div className="colors-td">
                              <td className="amount-cell">
                                {entry?.interestIncome.toLocaleString("ru-RU", {
                                  style: "currency",
                                  currency: "RUB",
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                              {Object.keys(test || {}).map((el, innerIndex) => (
                                <tr key={innerIndex}>
                                  {" "}
                                  <span>
                                    {test[el]?.interestIncome?.toLocaleString(
                                      "ru-RU",
                                      {
                                        style: "currency",
                                        currency: "RUB",
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                      }
                                    )}
                                  </span>
                                </tr>
                              ))}
                            </div>
                          </td>
                          <td>
                            <div className="colors-td">
                              <td className="amount-cell">
                                {entry?.replenishment.toLocaleString("ru-RU", {
                                  style: "currency",
                                  currency: "RUB",
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                              {Object.keys(test || {}).map((el, innerIndex) => (
                                <tr key={innerIndex}>
                                  {" "}
                                  <span>
                                    {test[el]?.replenishment?.toLocaleString(
                                      "ru-RU",
                                      {
                                        style: "currency",
                                        currency: "RUB",
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                      }
                                    )}
                                  </span>
                                </tr>
                              ))}
                            </div>
                          </td>
                          <td>
                            <div className="colors-td">
                              <td className="amount-cell">
                                {entry?.finalInvestment.toLocaleString(
                                  "ru-RU",
                                  {
                                    style: "currency",
                                    currency: "RUB",
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  }
                                )}
                              </td>
                              {Object.keys(test || {}).map((el, innerIndex) => (
                                <tr key={innerIndex}>
                                  {" "}
                                  <span>
                                    {test[el]?.endInvestment?.toLocaleString(
                                      "ru-RU",
                                      {
                                        style: "currency",
                                        currency: "RUB",
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                      }
                                    )}
                                  </span>
                                </tr>
                              ))}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default CompoundForm;
