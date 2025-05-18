"use client";
import React, { useEffect, useReducer, useState } from "react";

import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";

import Input from "../components/Input";

import CalorieForm from "./CalorieForm";
import "./stag.css";

const initial = {
  periods: [{ startDate: "", endDate: "" }],
  initialSeniority: {
    y: 0,
    m: 0,
    d: 0,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "y":
      return {
        ...state,
        initialSeniority: {
          ...state.initialSeniority,
          y: Number(action.payload),
        },
      };
    case "m":
      return {
        ...state,
        initialSeniority: {
          ...state.initialSeniority,
          m: Number(action.payload),
        },
      };
    case "d":
      return {
        ...state,
        initialSeniority: {
          ...state.initialSeniority,
          d: Number(action.payload),
        },
      };
    case "addPeriod":
      return {
        ...state,
        periods: [...state.periods, { startDate: "", endDate: "" }],
      };
    case "removePeriod":
      return {
        ...state,
        periods: state.periods.filter((_, index) => index !== action.payload),
      };
    case "updateStartDate":
      return {
        ...state,
        periods: action.payload,
      };
    case "updateEndDate":
      return {
        ...state,
        periods: action.payload,
      };
    default:
      return state;
  }
}

function Compound() {
  const [state, dispatch] = useReducer(reducer, initial);
  const obj = { ...state };

  function hadleInput(e, typeDispatch) {
    dispatch({ type: typeDispatch, payload: e.target.value });
  }

  function handleAddPeriod() {
    dispatch({ type: "addPeriod" });
  }

  function handleRemovePeriod(index) {
    dispatch({ type: "removePeriod", payload: index });
  }

  function handleStartDateChange(e, index) {
    const newPeriods = [...state.periods];
    newPeriods[index].startDate = e.target.value;
    dispatch({ type: "updateStartDate", payload: newPeriods });
  }

  function handleEndDateChange(e, index) {
    const newPeriods = [...state.periods];
    newPeriods[index].endDate = e.target.value;
    dispatch({ type: "updateEndDate", payload: newPeriods });
  }

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор "}
        description={
          "Введите данные из трудовой книжки и получите мгновенный результат. Калькулятор поможет узнать общий стаж работы, страховой стаж и другие важные показатели без ручных вычислений."
        }
        span={" стажа"}
      >
        <CalorieForm
          obj={obj}
          url={"https://boxcalculators.ru/api/calculate/seniority"}
        >
          <div className="label-row">
            <div className="row-vans-bottom">
              <span className="span-top all-top">Первоначальный стаж</span>
              <Input
                labelTitle={"лет"}
                typeDispatch={"y"}
                hadleInput={hadleInput}
                type={"number"}
              />

              <div className="topInput-select">
                <Input
                  labelTitle={"месяцев"}
                  typeDispatch={"m"}
                  hadleInput={hadleInput}
                  type={"number"}
                />
                <Input
                  labelTitle={"дней"}
                  typeDispatch={"d"}
                  hadleInput={hadleInput}
                  type={"number"}
                />
              </div>
              <div className="topInput-selects">
                <span className="span-top">Периоды для расчета</span>
                {state.periods.map((period, index) => (
                  <div key={index} className="row-input">
                    <div className="test-input">
                      <label>
                        <span>Дата приёма на работу</span>
                        <input
                          type="date"
                          className="input"
                          value={period.startDate}
                          onChange={(e) => handleStartDateChange(e, index)}
                          required
                        />
                      </label>
                      <label>
                        <span>Дата увольнения</span>
                        <input
                          type="date"
                          className="input"
                          value={period.endDate}
                          onChange={(e) => handleEndDateChange(e, index)}
                        />
                      </label>
                      <button
                        className="button-del"
                        onClick={() => handleRemovePeriod(index)}
                      >
                        <span className="del">×</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="print-none">
                <span>+</span>
                <button className="add-new-button" onClick={handleAddPeriod}>
                  Добавить период
                </button>
              </div>
            </div>
          </div>
        </CalorieForm>
        <Contents>
          <p>
            Калькулятор трудового стажа — это удобный онлайн-инструмент, который
            поможет рассчитать ваш стаж работы, страховой стаж и другие важные
            параметры. Это особенно полезно при оформлении пенсии, больничного
            листа, отпуска или социальных выплат.
          </p>

          <h2>Что такое трудовой и страховой стаж?</h2>

          <p>
            <strong>Трудовой стаж</strong> — это общее время, когда вы
            официально работали по трудовому договору, служили в армии,
            находились в отпуске по уходу за ребенком и других периодах,
            учтенных законодательством.
          </p>

          <p>
            <strong>Страховой стаж</strong> — это суммарное время, в течение
            которого за вас перечислялись страховые взносы в ПФР. Именно он
            влияет на размер пенсии и право на определенные выплаты. Не все
            периоды попадают в страховой стаж — только те, где были оформлены
            официальные отношения и уплачены взносы.
          </p>

          <h2>Как использовать калькулятор?</h2>
          <p>
            Просто введите даты начала и окончания каждого места работы, а также
            особые периоды, такие как:
          </p>
          <ul>
            <li>военная служба;</li>
            <li>декретный отпуск;</li>
            <li>больничный;</li>
            <li>работа по совместительству.</li>
          </ul>

          <p>
            Калькулятор автоматически сложит все подходящие периоды и покажет
            общий стаж в годах, месяцах и днях.
          </p>

          <h2>Что делать, если часть стажа не отображается?</h2>
          <p>
            Иногда информация о ваших периодах работы может отсутствовать в
            системе Госуслуг или содержать ошибки. В этом случае рекомендуется:
          </p>
          <ol>
            <li>проверить личный кабинет на портале Госуслуг;</li>
            <li>обратиться в Пенсионный фонд России;</li>
            <li>
              предоставить подтверждающие документы: справки с работы, копии
              трудового договора, заверенные записи из трудовой книжки.
            </li>
          </ol>

          <p>
            При необходимости специалисты помогут восстановить стаж и внести
            корректировки.
          </p>

          <h2>Частые ошибки при расчете стажа</h2>
          <p>Самые распространенные проблемы:</p>
          <ul>
            <li>
              <strong>Неподтвержденные периоды:</strong> например, работа без
              договора или неофициальное трудоустройство;
            </li>
            <li>
              <strong>Отсутствие документов:</strong> потеря трудовой книжки,
              отсутствие справок;
            </li>
            <li>
              <strong>Неверная дата:</strong> неточности в записях могут
              привести к занижению стажа;
            </li>
            <li>
              <strong>Неучтенные периоды:</strong> уход за детьми, инвалидами,
              армия и т.д., если они не подтверждены официально.
            </li>
          </ul>

          <p>
            Чтобы избежать этих проблем, используйте наш калькулятор для
            предварительной проверки перед обращением в ПФР.
          </p>

          <h2>Важно знать</h2>
          <p>
            Некоторые периоды включаются в трудовой стаж, но не учитываются в
            страховом:
          </p>
          <ul>
            <li>неофициальная работа;</li>
            <li>периоды, когда за вас не платили взносы;</li>
            <li>время учебы, если она не была связана с работой.</li>
          </ul>

          <p>
            Однако, если эти периоды подтверждены документально, их можно
            доначислить при обращении в Пенсионный фонд.
          </p>

          <h2>Где используется трудовой стаж?</h2>
          <ul>
            <li>
              <strong>Пенсия:</strong> влияет на право выхода и размер пенсии;
            </li>
            <li>
              <strong>Больничный:</strong> определяет размер пособия;
            </li>
            <li>
              <strong>Отпуск:</strong> влияет на количество положенных дней;
            </li>
            <li>
              <strong>Социальные выплаты:</strong> материнский капитал, льготы
              для многодетных, инвалидов;
            </li>
            <li>
              <strong>Юридические вопросы:</strong> например, при переводе на
              «льготную» должность.
            </li>
          </ul>

          <p>
            Наш калькулятор учитывает действующее российское законодательство и
            помогает заранее подготовиться к оформлению пенсии или других
            выплат.
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

export default Compound;
