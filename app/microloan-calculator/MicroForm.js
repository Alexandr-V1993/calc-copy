"use client";
import React, { useEffect, useReducer, useState } from "react";

const initial = {
  click: false,
  amount: null,
};

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "total":
      return { ...state, total: action.payload };
    case "overduePerDay":
      return { ...state, overduePerDay: action.payload };
    case "overpaymentPerDay":
      return { ...state, overpaymentPerDay: action.payload };

    case "click":
      return { ...state, click: action.payload };
    case "obnol":
      return { ...state, overduePerDay: action.payload };

    case "amount":
      return { ...state, amount: +action.payload.toFixed(2) };
    case "overpayment":
      return { ...state, overpayment: Number(action.payload.toFixed(2)) };
    case "overdueOverpayment":
      return {
        ...state,
        overdueOverpayment: +action.payload.toFixed(2),
      };

    default:
      break;
  }
}

function MicroForm({
  children,
  obj,
  url,
  period,
  amount,
  overdueDays,
  overduePerDay,
  overdueFee,
  click,
}) {
  console.log(overdueDays);
  const [state, dispatch] = useReducer(reducer, initial);
  console.log(amount);
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
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (state?.total?.data?.amount) {
      dispatch({ type: "amount", payload: state?.total?.data?.amount });
    }
    if (state?.total?.data?.overduePerDay) {
      dispatch({
        type: "overduePerDay",
        payload: state?.total?.data?.overduePerDay,
      });
    }
    if (state?.total?.data?.overpaymentPerDay) {
      dispatch({
        type: "overpaymentPerDay",
        payload: state?.total?.data?.overpaymentPerDay,
      });
    }
    if (state?.total?.data?.overpayment) {
      dispatch({
        type: "overpayment",
        payload: Number(state?.total?.data?.overpayment),
      });
    }
    if (state?.total?.data?.overdueOverpayment) {
      dispatch({
        type: "overdueOverpayment",
        payload: Number(state?.total?.data?.overdueOverpayment),
      });
    }
  }, [state?.total]);
  useEffect(() => {
    dispatch({ type: "setClick", payload: false });
  }, []);
  let currentAmount;
  return (
    <form className="inlinecalculators" onSubmit={handleSubmit}>
      <div className="row-res">
        {" "}
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
            <p className="resultstring">
              <span id="rw">Начислено % </span>
              <span id="resultimt">
                {state?.overpayment?.toLocaleString("ru-RU", {
                  style: "currency",
                  currency: "RUB",
                })}{" "}
                <span className="colored"></span>
              </span>
            </p>
            <p className="resultstring">
              <span id="rw">Сумма к возврату </span>
              <span id="resultimt">
                {state?.amount?.toLocaleString("ru-RU", {
                  style: "currency",
                  currency: "RUB",
                })}{" "}
                <span className="colored"></span>{" "}
              </span>
            </p>
            {!click && (
              <div>
                {Array.from({ length: period }, (_, index) => {
                  const currentAmount =
                    amount + state.overpaymentPerDay * (index + 1);

                  return (
                    <table key={index}>
                      {index === 0 ? (
                        <thead>
                          <tr>
                            <td>День</td>
                            <td>Проценты, ₽</td>
                            <td>Долг, ₽</td>
                          </tr>
                        </thead>
                      ) : null}
                      <tbody>
                        <tr className="normal-row">
                          <td>{index + 1}</td>
                          <td>
                            +
                            {state.overpaymentPerDay !== undefined
                              ? state.overpaymentPerDay
                                  .toFixed(2)
                                  .toLocaleString("ru-RU", {
                                    style: "currency",
                                    currency: "RUB",
                                  })
                              : ""}
                          </td>

                          <td>{currentAmount.toFixed(2)} ₽</td>
                        </tr>
                      </tbody>
                    </table>
                  );
                })}
              </div>
            )}

            {state.overdueOverpayment && click === true && overdueDays && (
              <>
                <p className="resultstring">
                  <span id="rw">Просрочка </span>
                  <span id="resultimt">
                    {state.overdueOverpayment.toLocaleString("ru-RU", {
                      style: "currency",
                      currency: "RUB",
                    })}{" "}
                    <span className="colored"></span>
                  </span>
                </p>
                <p className="resultstring">
                  <span id="rw">Всего </span>
                  <span id="resultimt">
                    {state && (
                      <span>
                        {new Intl.NumberFormat("ru-RU", {
                          style: "currency",
                          currency: "RUB",
                          minimumFractionDigits: 3,
                          maximumFractionDigits: 3,
                        }).format(state.amount + state.overdueOverpayment)}
                      </span>
                    )}
                    <span className="colored"></span>
                  </span>
                </p>
                <div className="test2">
                  {Array.from({ length: period + overdueDays }, (_, index) => {
                    const isOverdue = index >= period;
                    const overdueDaysCount = isOverdue ? index - period + 1 : 0;

                    // Увеличение суммы в долге на проценты
                    currentAmount =
                      amount + state.overpaymentPerDay * (index + 1);

                    // Если есть просрочка, добавляем overduePerDay к текущей сумме, исключая overpaymentPerDay
                    if (isOverdue) {
                      currentAmount +=
                        (state.overduePerDay - state.overpaymentPerDay) *
                        overdueDaysCount;
                    }

                    return (
                      <table key={index}>
                        {index === 0 ? (
                          <thead>
                            <tr>
                              <td>День</td>
                              <td>Проценты, ₽</td>
                              <td>Долг, ₽</td>
                            </tr>
                          </thead>
                        ) : null}
                        <tbody>
                          <tr
                            className={isOverdue ? "overdue-row" : "normal-row"}
                          >
                            <td
                              style={{
                                color: isOverdue ? "red" : "black",
                              }}
                            >
                              {index + 1} {isOverdue && "(просрочка)"}
                            </td>
                            <td
                              style={{
                                color: isOverdue ? "red" : "black",
                              }}
                            >
                              +
                              {(isOverdue
                                ? state.overduePerDay
                                : state.overpaymentPerDay
                              ).toLocaleString("ru-RU", {
                                style: "currency",
                                currency: "RUB",
                              })}
                            </td>
                            <td
                              style={{
                                color: isOverdue ? "red" : "black",
                              }}
                            >
                              {currentAmount.toLocaleString("ru-RU", {
                                style: "currency",
                                currency: "RUB",
                              })}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    );
                  })}
                  <table>
                    <tr>
                      {" "}
                      <td style={{ color: "red" }}>Штраф </td>
                      <td style={{ color: "red" }}>{overdueFee} ₽</td>
                      <td style={{ color: "red" }}>
                        {new Intl.NumberFormat("ru-RU", {
                          style: "currency",
                          currency: "RUB",
                          minimumFractionDigits: 3,
                          maximumFractionDigits: 3,
                        }).format(overdueFee + currentAmount)}
                      </td>
                    </tr>
                  </table>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </form>
  );
}

export default MicroForm;
