"use client";

import { useEffect, useReducer, useState } from "react";

import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import DateForm from "./DateForm";
import "./date.css";

const initial = {
  days: 0,
  includeDate: false,
  mode: "increase",
  months: 0,
  operator: "-",
  startDate: "2024-03-01",
  weeks: 0,
  years: 0,
  endDate: "2024-03-02",
};

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "mode":
      return { ...state, mode: action.payload };
    case "startDate":
      return { ...state, startDate: action.payload };
    case "endDate":
      return { ...state, endDate: action.payload };
    case "includeDate":
      return { ...state, includeDate: !state.includeDate };
    case "operator":
      return { ...state, operator: action.payload };
    case "days":
      return { ...state, days: action.payload };
    case "weeks":
      return { ...state, weeks: action.payload };
    case "months":
      return { ...state, months: action.payload };
    case "years":
      return { ...state, years: action.payload };

    default:
      break;
  }
}

function DateCalc() {
  const [state, dispatch] = useReducer(reducer, initial);
  const obj = { ...state };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор "}
        description={
          "Калькулятор дней между датами: рассчитывает точный временной промежуток с учетом рабочих, выходных и праздничных дней. Подходит для планирования, юридических и бухгалтерских задач."
        }
        span={"дней"}
      >
        <DateForm
          obj={obj}
          mode={state.mode}
          url={"https://boxcalculators.ru/api/calculate/date"}
        >
          <div className="label-row">
            <div className="row-vans-top">
              <label className="row-2">
                <span>Что сделать</span>
                <div className="select">
                  <select
                    onChange={(e) =>
                      dispatch({
                        type: "mode",
                        payload: String(e.target.value),
                      })
                    }
                  >
                    <option value="increase">Прибавить к дате</option>
                    <option value="weekDays">
                      Прибавить рабочие дни к дате
                    </option>
                    <option value="difference">
                      Вычислить разницу между датами
                    </option>
                  </select>
                </div>
              </label>
            </div>
            <div className="row-vans-bottom">
              <label className="numrange row-1 date">
                <span>Начальная дата</span>
                <input
                  type="date"
                  className="input"
                  min="0"
                  max="250"
                  value={state.startDate}
                  onChange={(e) =>
                    dispatch({
                      type: "startDate",
                      payload: String(e.target.value),
                    })
                  }
                />
              </label>
              {state.mode === "difference" && (
                <label className="numrange row-1 date">
                  <span>Конечная дата</span>
                  <input
                    type="date"
                    className="input"
                    min="0"
                    max="250"
                    value={state.endDate}
                    onChange={(e) => {
                      state.mode === "difference"
                        ? dispatch({
                            type: "endDate",
                            payload: String(e.target.value),
                          })
                        : null;
                    }}
                  />
                </label>
              )}

              <label className="row-chekc">
                <span>Учитывать нач-ю. дату</span>
                <input
                  type="checkbox"
                  className="chekc"
                  min="0"
                  max="9999"
                  value={false}
                  onClick={(e) =>
                    dispatch({
                      type: "includeDate",
                    })
                  }
                />
              </label>
            </div>
            <div className="pribav-row">
              {state.mode !== "difference" && (
                <label className="row-vans-item">
                  <span>Сколько прибавить / вычесть</span>
                  <div className="select">
                    <select
                      onChange={(e) =>
                        dispatch({
                          type: "operator",
                          payload: String(e.target.value),
                        })
                      }
                    >
                      <option value="-">(-)Вычесть</option>
                      <option value="+">(+)Прибавить</option>
                    </select>
                  </div>
                </label>
              )}

              {state.mode !== "difference" && (
                <label className="numrange row-1 van">
                  <input
                    type="number"
                    className="input"
                    min="0"
                    max="9999"
                    onChange={(e) =>
                      dispatch({
                        type: "days",
                        payload: Number(e.target.value),
                      })
                    }
                    required
                  />
                  <div className="notation">дней</div>
                </label>
              )}
              {state.mode !== "weekDays" && state.mode !== "difference" && (
                <>
                  <label className="numrange row-1 van">
                    <input
                      type="number"
                      className="input"
                      min="0"
                      max="9999"
                      onChange={(e) =>
                        dispatch({
                          type: "weeks",
                          payload: Number(e.target.value),
                        })
                      }
                      required
                    />
                    <div className="notation">недель</div>
                  </label>
                  <label className="numrange row-1 van">
                    <input
                      type="number"
                      className="input"
                      min="0"
                      max="9999"
                      onChange={(e) =>
                        dispatch({
                          type: "months",
                          payload: Number(e.target.value),
                        })
                      }
                      required
                    />
                    <div className="notation">месяцев</div>
                  </label>
                  <label className="numrange row-1 van">
                    <input
                      type="number"
                      className="input"
                      min="0"
                      max="99"
                      onChange={(e) =>
                        dispatch({
                          type: "years",
                          payload: Number(e.target.value),
                        })
                      }
                      required
                    />
                    <div className="notation">лет</div>
                  </label>
                </>
              )}
            </div>
          </div>
        </DateForm>

        <Contents>
          <h3 className="tops-content">Калькулятор дней между датами</h3>

          <p>Калькулятор дней предназначен для двух основных задач:</p>

          <ul>
            <li>
              определение временного промежутка между двумя указанными датами;
            </li>
            <li>
              прогнозирование даты через заданное количество дней, недель или
              месяцев.
            </li>
          </ul>

          <p>
            Он учитывает не только календарные дни, но и официальные выходные, а
            также нерабочие праздничные дни по законодательству РФ:
          </p>

          <h3>Нерабочие праздничные дни в России:</h3>
          <ul>
            <li>
              <strong>1–6 января</strong>, <strong>8 января</strong> —
              Новогодние каникулы
            </li>
            <li>
              <strong>7 января</strong> — Рождество Христово
            </li>
            <li>
              <strong>23 февраля</strong> — День защитника Отечества
            </li>
            <li>
              <strong>8 марта</strong> — Международный женский день
            </li>
            <li>
              <strong>1 мая</strong> — Праздник Весны и Труда
            </li>
            <li>
              <strong>9 мая</strong> — День Победы
            </li>
            <li>
              <strong>12 июня</strong> — День России
            </li>
            <li>
              <strong>4 ноября</strong> — День народного единства
            </li>
          </ul>

          <p>
            Также поддерживаются переносы выходных дней, установленные
            правительством. Вы можете рассчитать временной промежуток в
            календарных днях, рабочих днях или неделях.
          </p>

          <h3>Для чего используется калькулятор дней?</h3>
          <p>
            Этот инструмент будет полезен как частным пользователям, так и
            профессионалам:
          </p>

          <ul>
            <li>
              <strong>Юристы:</strong> определение сроков исковой давности,
              исполнения обязательств;
            </li>
            <li>
              <strong>HR и кадры:</strong> расчёт отпусков, трудового стажа;
            </li>
            <li>
              <strong>Бухгалтеры:</strong> анализ налогового периода, сроков
              платежей;
            </li>
            <li>
              <strong>Предприниматели:</strong> планирование проектов,
              контрактов, встреч;
            </li>
            <li>
              <strong>Частные лица:</strong> расчёт сроков, например,
              беременности, обучения, путешествий и т.д.
            </li>
          </ul>

          <p>
            Калькулятор позволяет включить или исключить начальную дату из
            расчёта, что особенно важно при соблюдении юридических сроков и
            иммиграционных норм.
          </p>

          <p>
            Кроме того, вы можете использовать его для прогнозирования будущих
            событий: добавления или вычитания дней, недель и месяцев к любой
            выбранной дате. Это делает его ценным помощником в управлении
            временем и организациями.
          </p>

          <p>
            <a href="/">Выбрать другой калькулятор</a>
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default DateCalc;
