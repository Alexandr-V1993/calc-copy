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

function CalorieForm({ children, obj, url, cellSize, cellSizes }) {
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
              <h2>Расчет бетона на плиту</h2>

              <p className="resultstring">
                <span id="rw">Периметр плиты</span>
                <span id="resultimt">{state?.total?.data?.perimeter} м</span>
              </p>
              <p className="resultstring">
                <span id="rw">Площадь подошвы плиты</span>
                <span id="resultimt">{state?.total?.data?.area} м2</span>
              </p>
              <p className="resultstring">
                <span id="rw">Площадь боковой поверхности</span>
                <span id="resultimt">{state?.total?.data?.surfaceArea} м2</span>
              </p>
              <p className="resultstring">
                <span id="rw">Вес бетона</span>
                <span id="resultimt">{state?.total?.data?.weight} кг</span>
              </p>
              <p className="resultstring">
                <span id="rw">Объем бетона</span>
                <span id="resultimt">{state?.total?.data?.volume} м3</span>
              </p>
            </div>
            <div className="test-res">
              <h2>Расчет арматуры на монолитную плиту</h2>
              <p className="resultstring">
                <span id="rw">Размер ячейки сетки</span>
                <span id="resultimt">{`${cellSize}x${cellSizes}`} мм</span>
              </p>
              <p className="resultstring">
                <span id="rw">Продольные ряды</span>
                <span id="resultimt">
                  {state?.total?.data?.armature?.longitudinalBars} шт
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Поперечные ряды</span>
                <span id="resultimt">
                  {state?.total?.data?.armature?.transverseBars} шт
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">
                  Количество соединений (сколько пересечений продольной и
                  поперечной арматуры)
                </span>
                <span id="resultimt">
                  {state?.total?.data?.armature?.numberConnections} шт
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Длина вертикальной арматуры</span>
                <span id="resultimt">
                  {state?.total?.data?.armature?.connectionLength} м
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">
                  Длина вязальной проволоки (на каждый узел необходимо в среднем
                  30 см )
                </span>
                <span id="resultimt">
                  {state?.total?.data?.armature?.tyingWireLength} м
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Общая длина арматуры</span>
                <span id="resultimt">
                  {state?.total?.data?.armature?.length} м
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Общий вес арматуры</span>
                <span id="resultimt">
                  {state?.total?.data?.armature?.weight} кг
                </span>
                <span id="resultimt">
                  {state?.total?.data?.armature?.tonnage} т
                </span>
              </p>
            </div>
            <div className="test-res">
              <h2>Расчет опалубки</h2>

              <p className="resultstring">
                <span id="rw">Площадь опалубки</span>
                <span id="resultimt">
                  {state?.total?.data?.formwork?.area} м2
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Количество досок для опалубки, длиной 6 м</span>
                <span id="resultimt">
                  {state?.total?.data?.formwork?.numberBoards} шт
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Объем пиломатериалов для опалубки</span>
                <span id="resultimt">
                  {state?.total?.data?.formwork?.sawnTimberVolume} м3
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
