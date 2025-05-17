"use client";

import React, { useEffect, useReducer } from "react";

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

function CalorieForm({ children, obj, url, cellSize, cellSizes, d, ddoska }) {
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

      // Вычисление общего веса арматуры
      const longitudinalBarsWeight =
        responseData.data.armature.longitudinalBarsWeight;
      const transverseBarsWeight =
        responseData.data.armature.transverseBarsWeight;
      const totalWeight = (
        longitudinalBarsWeight + transverseBarsWeight
      ).toFixed(2);

      // Добавление общего веса арматуры в данные
      responseData.data.armature.weight = totalWeight;

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
              <h2>Расчет бетона на ленту</h2>
              <p className="resultstring">
                <span id="rw">Внешний периметр фундамента</span>
                <span id="resultimt">{state?.total?.data?.perimeter} м</span>
              </p>
              <p className="resultstring">
                <span id="rw">Общая длина ленты</span>
                <span id="resultimt">{state?.total?.data?.stripLength} м</span>
              </p>
              <p className="resultstring">
                <span id="rw">Площадь сечения фундамента</span>
                <span id="resultimt">{state?.total?.data?.crossArea} cм2</span>
              </p>
              <p className="resultstring">
                <span id="rw">Площадь подошвы ленты</span>
                <span id="resultimt">{state?.total?.data?.area} м2</span>
              </p>
              <p className="resultstring">
                <span id="rw">Вес бетона</span>
                <span id="resultimt">{state?.total?.data?.weight} кг</span>
              </p>
              <p className="resultstring">
                <strong>
                  {" "}
                  <span id="rw">Объем бетона</span>
                </strong>
                <span id="resultimt">{state?.total?.data?.volume} м3</span>
              </p>
            </div>
            <div className="test-res">
              <h2>Расчет арматуры</h2>
              <p className="resultstring">
                <span id="rw">Площадь поперечного сечения арматуры</span>
                <span id="resultimt">
                  {state?.total?.data?.armature?.crossArea} см2
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Диаметр продольных стержней</span>
                <span id="resultimt">{d} мм</span>
              </p>
              <p className="resultstring">
                <span id="rw">
                  Диаметр поперечных стержней арматуры (хомутов)
                </span>
                <span id="resultimt">{6} мм</span>
              </p>
              <p className="resultstring">
                <span id="rw">Длина арматуры одного П-образного узла</span>
                <span id="resultimt">
                  {state?.total?.data?.armature?.lengthPerCell} м
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">
                  Общая длина рабочей продольной арматуры диаметром {d} мм (с
                  учетом перевязки внахлест)
                </span>
                <span id="resultimt">
                  {state?.total?.data?.armature?.longitudinalBarsLength} м
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">
                  Вес 1м продольной арматуры, диаметром {d} мм
                </span>
                <span id="resultimt">
                  {state?.total?.data?.armature?.weightPerMeter}
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Общий вес рабочей продольной арматуры</span>
                <span id="resultimt">
                  {state?.total?.data?.armature?.longitudinalBarsWeight} кг
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
                  Общая длина поперечной арматуры (хомутов) диаметром 6мм.
                </span>
                <span id="resultimt">
                  {state?.total?.data?.armature?.transverseBarsLength} м
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Общий вес поперечной арматуры (хомутов)</span>
                <span id="resultimt">
                  {state?.total?.data?.armature?.transverseBarsWeight} кг
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
                <span id="rw">
                  Длина вязальной проволоки (на каждый узел необходимо в среднем
                  30 см )
                </span>
                <span id="resultimt">
                  {state?.total?.data?.armature?.tyingWireLength} м
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Общий вес арматуры</span>
                <span id="resultimt">
                  {state?.total?.data?.armature?.weight} кг
                </span>
              </p>
            </div>
            <div className="test-res">
              <h2>Расчет опалубки</h2>
              <p className="resultstring">
                <span id="rw">
                  Количество досок для опалубки, длиной {ddoska / 1000} м
                </span>
                <span id="resultimt">
                  {state?.total?.data?.formwork?.numberBoards} шт
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
