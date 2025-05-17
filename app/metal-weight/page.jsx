"use client";
import React, { useReducer, useState } from "react";
import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import CalorieForm from "./CalorieForm";
import Armatura from "../components/metall/Armatura";
import BalkaDvutavr from "../components/metall/BalkaDvutavr";
import Shveller from "../components/metall/Shveller";
import Ugolok from "../components/metall/Ugolok";
import TrubaKruglaya from "../components/metall/TrubaKruglaya";
import TrubaProfilnaya from "../components/metall/TrubaProfilnaya";
import Krug from "../components/metall/Krug";
import Kvadrat from "../components/metall/Kvadrat";
import List from "../components/metall/List";
import Lenta from "../components/metall/Lenta";
import Shestigrannik from "../components/metall/Shestigrannik";
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
      <TopForm
        title={"Калькулятор "}
        description={
          "Наш онлайн-калькулятор металлопроката обеспечивает точный расчет веса и других параметров для всех марок стали, соответствуя ГОСТам и ТУ. Независимо от того, нужен вам расчет для строительства, производства или других целей, наш инструмент гарантирует простоту и удобство в использовании."
        }
        span={"Металла"}
      >
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
                    <span className="align-middle test-p">
                      Труба профильная
                    </span>
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
                    className={`calc-toggle-button col-6 col-md-4 test-h col-lg-4 ${
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
              <a href="/metal-calculator-armature" className="sidebar-link ">
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
              <a href="/metallocalculator" className="sidebar-link">
                Металлокалькулятор
              </a>
            </div>
          </div>
          <p>
            Онлайн калькулятор металла - это удобный инструмент для быстрого
            определения веса или массы металлических изделий. С его помощью вы
            можете рассчитать вес листового металла, массу металлопроката и
            определить толщину металла по заданным размерам согласно ГОСТ или
            вводимым вручную параметрам.
          </p>
          <p>
            Используя калькулятор, вы можете получить результаты для веса
            единицы измерения проката выбрав тип проката, соответствующий ГОСТ,
            тип и марку металла. Это значительно экономит время, так как вам не
            нужно обращаться к справочникам напрямую. Наш калькулятор
            обеспечивает быстрый расчет веса металлических изделий, обеспечивая
            точные данные в режиме онлайн.
          </p>
          <p>
            Чтобы начать расчет, выберите нужный тип металла и проката из
            предложенного списка. Мы предоставляем расчет для различных видов
            проката, включая уголок, лист, трубу, круг/проволоку/катанку,
            квадратную трубу, прокат, швеллер, ленту/полосу, балку и
            шестигранник.
          </p>
          <p>
            Наш калькулятор предлагает различные методы расчета веса
            металлопроката, опираясь на информацию из справочников ГОСТ и ТУ. Мы
            учитываем номинальные значения, соответствующие стандартам, чтобы
            обеспечить точность и надежность расчетов. Если информация о
            стандартном типоразмере недоступна, используется приблизительная
            формула, близкая к геометрическому расчету, не учитывая погрешности
            или особенности продукции.
          </p>
          <p>
            Наш сервис также позволяет рассчитать массу различных металлов,
            включая сталь, алюминий, латунь, медь, бронзу, титан, чугун, золото,
            свинец, магний, никель, палладий, платину, серебро, олово и цинк.
            Безопасный, быстрый и бесплатный - онлайн калькулятор металла всегда
            доступен для ваших расчетов.
          </p>
          <h2>Сплавы металлов</h2>
          <p>Наш сервис позволяет рассчитать массу различных металлов:</p>
          <ul>
            <li>сталь</li>
            <li>алюминий</li>
            <li>латунь</li>
            <li>медь</li>
            <li>бронза</li>
            <li>титан</li>
            <li>чугун</li>
            <li>золото</li>
            <li>свинец</li>
            <li>магний</li>
            <li>никель</li>
            <li>палладий</li>
            <li>платина</li>
            <li>серебро</li>
            <li>олово</li>
            <li>цинк</li>
          </ul>
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
