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
          "Калькулятор дней служит двум целям: во-первых, вычислению промежутка между датами, а во-вторых, прогнозированию календарной даты через заданный промежуток времени от заданной даты."
        }
        span={"дней"}
      >
        <DateForm
          obj={obj}
          mode={state.mode}
          url={"https://calcoffee.ru/api/calculate/date"}
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
          <p>
            Калькулятор дней выполняет две основные задачи: во-первых, расчет
            промежутка между указанными датами, а во-вторых, предсказание
            календарной даты после определенного времени, начиная с указанной
            даты.
          </p>
          <p>
            Он учитывает как рабочие, так и нерабочие дни, включая праздники,
            предусмотренные статьей 112 Трудового кодекса Российской Федерации,
            а также выходные дни, перенесенные в соответствии с постановлениями
            правительства.
          </p>
          <h3>Список нерабочих праздничных дней включает:</h3>
          <ul>
            <li>1, 2, 3, 4, 5, 6, 8 января - Новогодние каникулы</li>
            <li>7 января - Рождество Христово</li>
            <li>23 февраля - День защитника Отечества</li>
            <li>8 марта - Международный женский день</li>
            <li>1 мая - Праздник Весны и Труда</li>
            <li>9 мая - День Победы</li>
            <li>12 июня - День России</li>
            <li>4 ноября - День народного единства</li>
          </ul>
          <p>
            Калькулятор позволяет определить количество дней между выбранными
            датами в календарных днях, рабочих днях или неделях. Пользователь
            может также включать или исключать начальную дату из общего
            подсчета, что является важным параметром для соблюдения
            иммиграционного законодательства и налогового резидентства.
          </p>
          <p>
            Этот инструмент представляет большую гибкость и является
            неотъемлемым помощником для профессионалов в различных областях,
            таких как юристы, кадровики и бухгалтеры. Он находит применение при
            разнообразных расчетах, предусмотренных законодательством или
            контрактами. Например, специалисты по кадрам могут определить общий
            стаж сотрудника, юристы могут рассчитать пени за просрочку, а
            бухгалтеры могут определить остаточную стоимость активов.
          </p>
          <p>
            Кроме того, калькулятор обладает функцией определения будущих или
            прошлых дат путем сложения или вычитания дней или недель, что делает
            его ценным инструментом для установления сроков и планирования
            встреч в коммерческих организациях.
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
