"use client";

import React, { useEffect, useReducer, useState } from "react";
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

function CalorieForm({ children, obj, url, wall }) {
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
      console.error("Ошибка получения данных:", error);
    }
  };

  const formatNumber = (num) => {
    if (num === null || num === undefined) return "";
    return num.toLocaleString("ru-RU");
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
                <span id="rw">Периметр строения</span>
                <span id="resultimt">{formatNumber(wall)} м</span>
              </p>
              <p className="resultstring">
                <span id="rw">Общая площадь кладки</span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.wallArea)} м²
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Толщина стены</span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.wallThickness)} мм
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">
                  <span className="res-un">Количество кирпича</span>
                </span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.totalBricks)} шт
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Количество кирпича в 1 м³</span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.bricksPerCube)} шт
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">в 1 м³ (с раствором)</span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.bricksPerCubeJoint)} шт
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Количество кирпича в 1 м²</span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.bricksPerMeter)} шт
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">в 1 м² (с раствором)</span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.bricksPerMeterJoint)} шт
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Количество рядов (с раствором)</span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.brickRows)} шт
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Количество раствора</span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.mortarQuantity)} м³
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Количество кладочной сетки</span>
                <span id="resultimt">
                  {formatNumber(
                    state?.total?.data?.masonryGridQuantity.toFixed(2)
                  )}{" "}
                  м
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Стоимость кирпича</span>
                <span id="resultimt">
                  {state?.total?.data?.totalBrickPrice?.toLocaleString(
                    "ru-RU",
                    {
                      style: "currency",
                      currency: "RUB",
                    }
                  )}
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Вес 1 кирпича</span>
                <span id="resultimt">{obj.brickWeight.toFixed(1)} кг</span>{" "}
                {/* Используем переданный вес кирпича */}
              </p>
              <p className="resultstring">
                <span id="rw">Общий вес кирпича</span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.totalBrickWeight)} кг
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Общий вес раствора</span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.mortarWeight)} кг
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Объем стен</span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.totalWallVolume.toFixed(2))}{" "}
                  м³
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Объем 1 кирпича</span>
                <span id="resultimt">{state?.total?.data?.brickVolume} м³</span>
              </p>
              <p className="resultstring">
                <span id="rw">Общий объем кирпича</span>
                <span id="resultimt">
                  {formatNumber(state?.total?.data?.totalBrickVolume)} м³
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
