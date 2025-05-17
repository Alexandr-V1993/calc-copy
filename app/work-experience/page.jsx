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
          "Заполните данные из трудовой книжки и получите удобный результат в одну строку. Калькулятор позволит мгновенно, не теряя времени на ручной расчет, узнать все необходимые сведения о вашем трудовом стаже."
        }
        span={" стажа"}
      >
        <CalorieForm
          obj={obj}
          url={"https://calcoffee.ru/api/calculate/seniority"}
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
            Веб-калькулятор &mdash; удобный онлайн-инструмент, помогающий
            рассчитать ваш трудовой и страховой стаж. Такие расчеты необходимы
            при оформлении пенсии, получении социальных льгот или
            трудоустройстве. С его помощью вы легко определите, сколько лет,
            месяцев и дней официальной работы у вас накопилось.
          </p>
          <h2>Что такое трудовой и страховой стаж?</h2>
          <p>
            <span className="col">Трудовой стаж</span> &mdash; это общий период,
            в течение которого человек официально работал по трудовому договору.
            В него включаются все время работы, отраженное в трудовой книжке. А
            также иные основания, например, служба в армии, уход за ребенком, и
            т.д., если они предусмотрены законодательством.
          </p>
          <p>
            <span className="col"> Страховой стаж</span> &mdash; это период, в
            течение которого в ПФ РФ поступали страховые взносы. Этот показатель
            напрямую влияет на право получения страховой пенсии и ее размер. В
            отличие от трудового, в страховой не включаются время, когда не было
            выплат страховых взносов. Например, неофициальная работа,
            деятельность без заключения договора или длительный перерыв без
            уважительной причины.
          </p>
          <h2>Как пользоваться калькулятором?</h2>
          <p>
            Просто введите даты начала и окончания каждого периода вашей работы,
            а калькулятор автоматически подсчитает общий и страховой стаж.
            Укажите особые периоды (например, декретный отпуск или военную
            службу), чтобы получить наиболее точный результат.
          </p>
          <h2>Что делать, если период работы не отображается или утерян?</h2>
          <p>
            Возможно часть деятельности не отображается в личном кабинете на
            портале <a href="https://gosuslugi.ru/">Госуслуг.</a> Или вы
            заметили ошибки в данных. Их можно исправить. Для этого нужно
            обратиться в Пенсионный фонд и предоставить подтверждающие
            документы. Такими документами являются справки с места работы, копии
            договоров, заверенные страницы трудовой книжки.
          </p>
          <p>Частые ошибки при расчете рабочих периодов</p>
          <p>
            При самостоятельном расчете часто не учитываются важные периоды:
            уходу за ребенком, пожилыми родственниками или инвалидами, служба в
            армии. Многие из этих периодов включаются в страховой период, если
            они подтверждены документально. Будьте внимательны при заполнении
            данных, чтобы получить корректный результат.
          </p>
          <p>
            Наш калькулятор стажа учитывает действующие нормы законодательства и
            подходит для расчета пенсионного и общего стажа. Используйте его,
            чтобы заранее подготовиться к оформлению документов и избежать
            ошибок в расчетах.
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
