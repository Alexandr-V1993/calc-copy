"use client";
import React, { useReducer, useState } from "react";
import HeaderModal from "@/app/components/HeaderModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import CalorieForm from "./CalorieForm";
import Armatura from "@/app/components/metall/Armatura";
import BalkaDvutavr from "@/app/components/metall/BalkaDvutavr";
import Shveller from "@/app/components/metall/Shveller";
import Ugolok from "@/app/components/metall/Ugolok";
import TrubaKruglaya from "@/app/components/metall/TrubaKruglaya";
import TrubaProfilnaya from "@/app/components/metall/TrubaProfilnaya";
import Krug from "@/app/components/metall/Krug";
import Kvadrat from "@/app/components/metall/Kvadrat";
import List from "@/app/components/metall/List";
import Lenta from "@/app/components/metall/Lenta";
import Shestigrannik from "@/app/components/metall/Shestigrannik";
import "./calorie.css";

const initial = {};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_SELECTED_OBJECT":
      return { ...state, selectedObject: action.payload };
    default:
      return state;
  }
}

function Compound() {
  const [state, dispatch] = useReducer(reducer, initial);
  const [selectedProrate, setSelectedProrate] = useState("Арматура");

  const handleProrateSelection = (prorateType) => {
    setSelectedProrate(prorateType);
    dispatch({
      type: "UPDATE_SELECTED_OBJECT",
      payload: { type: prorateType },
    });
  };

  const handleDataUpdate = (data) => {
    dispatch({ type: "UPDATE_SELECTED_OBJECT", payload: data });
  };

  return (
    <>
      <HeaderModal />
      <TopForm title={""} span={"Металлокалькулятор"}>
        <CalorieForm
          obj={state.selectedObject}
          url={"https://calcoffee.ru/api/calculate/metal"}
        >
          <div className="label-row">
            <div className="row-vans-bottom">
              <label className="label-top">
                <span>Тип проката</span>
                <div className="row">
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Арматура" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Арматура")}
                  >
                    <span className="align-middle">Арматура</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Балка/двутавр" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Балка/двутавр")}
                  >
                    <span className="align-middle">Балка/двутавр</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Швеллер" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Швеллер")}
                  >
                    <span className="align-middle">Швеллер</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Уголок" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Уголок")}
                  >
                    <span className="align-middle">Уголок</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Труба круглая" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Труба круглая")}
                  >
                    <span className="align-middle">Труба круглая</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Труба профильная" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Труба профильная")}
                  >
                    <span className="align-middle">Труба профильная</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Круг" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Круг")}
                  >
                    <span className="align-middle">Круг</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Квадрат" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Квадрат")}
                  >
                    <span className="align-middle">Квадрат</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Лист" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Лист")}
                  >
                    <span className="align-middle">Лист</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Лента" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Лента")}
                  >
                    <span className="align-middle">Лента</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Шестигранник" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Шестигранник")}
                  >
                    <span className="align-middle">Шестигранник</span>
                  </button>
                </div>
              </label>
              {/* Условные рендеры для компонентов */}
              {selectedProrate === "Арматура" && (
                <Armatura onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Балка/двутавр" && (
                <BalkaDvutavr onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Швеллер" && (
                <Shveller onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Уголок" && (
                <Ugolok onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Труба круглая" && (
                <TrubaKruglaya onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Труба профильная" && (
                <TrubaProfilnaya onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Круг" && (
                <Krug onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Квадрат" && (
                <Kvadrat onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Лист" && (
                <List onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Лента" && (
                <Lenta onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Шестигранник" && (
                <Shestigrannik onDataUpdate={handleDataUpdate} />
              )}
            </div>
          </div>
        </CalorieForm>
        <Contents>
          <div className="sidebar">
            <div className="sidebar-header">
              <img className="sidebar-logo" src="/stroika2.svg" alt="дата" />
              <span className="sidebar-title">Строительные калькуляторы</span>
            </div>
            <div className="sidebar-links">
              <a href="/metal-calculator-armature" className="sidebar-link">
                Вес арматуры
              </a>
              <a href="/metal-calculator-angle" className="sidebar-link">
                Вес уголка
              </a>
              <a href="/metal-calculator-circle" className="sidebar-link">
                Вес круга
              </a>
              <a href="/metal-calculator-square" className="sidebar-link">
                Вес квадрата
              </a>
              <a href="/metal-calculator-pipe" className="sidebar-link">
                Вес круглой трубы
              </a>
              <a href="/metal-calculator-shaped-tube" className="sidebar-link">
                Вес профильной трубы
              </a>
              <a href="/metal-calculator-beam" className="sidebar-link ">
                Вес балки двутавровой
              </a>
              <a href="/metal-calculator-channel" className="sidebar-link">
                Вес швеллера
              </a>
              <a href="/metal-calculator-sheet" className="sidebar-link">
                Вес листа
              </a>
              <a href="/metal-calculator-strip" className="sidebar-link">
                Вес полосы
              </a>
              <a href="/metal-calculator-hex" className="sidebar-link">
                Вес шестигранника
              </a>
              <a href="/metallocalculator" className="sidebar-link active">
                Металлокалькулятор
              </a>
            </div>
          </div>
          <p>
            Металлокалькулятор онлайн представляет собой удобный инструмент,
            который облегчает работу с металлопрокатом. Независимо от того,
            нужно ли вам определить вес, длину или другие характеристики
            металлических изделий, этот калькулятор поможет вам справиться с
            этой задачей быстро и точно. Благодаря ему вы сможете осуществить
            расчеты для различных типов металлопроката, будь то черный, цветной
            или нержавеющий.
          </p>
          <p>
            Одной из ключевых возможностей металлокалькулятора является расчет
            длины металлического изделия. Обладая информацией о его весе и
            сечении, вы легко сможете определить его фактическую длину. Кроме
            того, калькулятор позволяет рассчитать вес металлического изделия на
            основе его длины и сечения, что может быть полезно при планировании
            транспортировки или складирования.
          </p>
          <p>
            Простота использования и точность результатов делают
            металлокалькулятор идеальным инструментом как для профессионалов,
            так и для людей, не имеющих специализированного образования в
            области металлургии. Благодаря точным математическим формулам и
            справочным данным, калькулятор обеспечивает надежные и достоверные
            расчеты, что делает его незаменимым помощником при работе с
            металлопрокатом.
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
