"use client";
import React, { useState, useEffect } from "react";

import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";

import CalorieForm from "./CalorieForm";
import "./stag.css";

function Compound() {
  const [vel, setvel] = useState("м");
  const [selectedTab, setSelectedTab] = useState("tab1");
  const [initial, setInitial] = useState({
    value: "",
    round: 3,
    type: "radius",
  });

  const handleTabClick = (tab) => {
    let type = "radius";
    if (tab === "tab2") type = "diameter";
    if (tab === "tab3") type = "circumference";

    setSelectedTab(tab);
    setInitial((prevState) => ({
      ...prevState,
      type: type,
    }));
  };

  useEffect(() => {
    let type = "radius";
    if (selectedTab === "tab2") type = "diameter";
    if (selectedTab === "tab3") type = "circumference";

    setInitial((prevState) => ({
      ...prevState,
      type: type,
    }));
  }, [selectedTab]);

  const handleChange = (e) => {
    setInitial({
      ...initial,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleRoundChange = (e) => {
    setInitial({
      ...initial,
      round: e.target.value,
    });
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор "}
        description={
          "Точный расчет площади круга через радиус или диаметр с примерами. Формулы, практическое применение и расширенные геометрические вычисления."
        }
        span={"площади круга"}
      >
        <CalorieForm
          vel={vel}
          selectedTab={selectedTab}
          obj={initial}
          url={"https://boxcalculators.ru/api/calculate/area-circle"}
        >
          <div className="test-input">
            <div className="tabs">
              <div className="flex-row">
                <div className="centre-flex">
                  {" "}
                  <span>Известная величина</span>
                </div>
                <div className="right-all-gap">
                  <span
                    className={selectedTab === "tab1" ? "active" : "noact"}
                    onClick={() => handleTabClick("tab1")}
                  >
                    Радиус
                  </span>
                  <span
                    className={selectedTab === "tab2" ? "active" : "noact"}
                    onClick={() => handleTabClick("tab2")}
                  >
                    Диаметр
                  </span>
                  <span
                    className={selectedTab === "tab3" ? "active" : "noact"}
                    onClick={() => handleTabClick("tab3")}
                  >
                    Длина
                  </span>
                </div>
              </div>
            </div>

            <div className="content">
              {initial.type === "radius" && (
                <label className="numrange">
                  <span>
                    Радиус круга, <span className="red">r</span>
                  </span>
                  <input
                    type="number"
                    className="input"
                    name="value"
                    value={initial.value}
                    onChange={handleChange}
                    required
                  />
                </label>
              )}
              {initial.type === "diameter" && (
                <label className="numrange">
                  <span>
                    Диаметр круга, <span className="red">d</span>
                  </span>
                  <input
                    type="number"
                    className="input"
                    name="value"
                    value={initial.value}
                    onChange={handleChange}
                    required
                  />
                </label>
              )}
              {initial.type === "circumference" && (
                <label className="numrange">
                  <span>
                    Длина окружности, <span className="red">L</span>
                  </span>
                  <input
                    type="number"
                    className="input"
                    name="value"
                    value={initial.value}
                    onChange={handleChange}
                    required
                  />
                </label>
              )}
              <label className="numrange">
                <span>Округлять до (знаков после запятой)</span>
                <select
                  name="round"
                  className="calc-inp"
                  value={initial.round}
                  onChange={handleRoundChange}
                >
                  {[...Array(11).keys()].map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </label>
              <label className="numrange">
                <span>Единица измерения</span>
                <select
                  name="unit"
                  className="calc-inp"
                  onChange={(e) => setvel(e.target.value)}
                >
                  <option value="м" selected="">
                    м
                  </option>
                  <option value="см">см</option>
                  <option value="мм">мм</option>
                </select>
              </label>
            </div>
          </div>
        </CalorieForm>
        <Contents>
          <h2>Профессиональный расчет круглых площадей</h2>

          <p>
            Наш калькулятор позволяет быстро и точно вычислить площадь круга по
            радиусу или диаметру, а также решить сопутствующие геометрические
            задачи.
          </p>

          <div className="features">
            <h3>Основные возможности:</h3>
            <ul>
              <li>Расчет площади по радиусу</li>
              <li>Расчет площади по диаметру</li>
              <li>Примеры практических вычислений</li>
              <li>Формулы с подробными объяснениями</li>
              <li>Расширенные геометрические расчеты</li>
            </ul>
          </div>

          <h3>Основная формула площади круга</h3>

          <p>Площадь круга вычисляется по формуле:</p>
          <p className="formula">S = π × r²</p>
          <p>
            где <strong>S</strong> - площадь, <strong>π</strong> ≈ 3.14159,
            <strong>r</strong> - радиус круга.
          </p>

          <h3>Примеры расчетов</h3>

          <div className="example">
            <h4>Пример 1: По радиусу 5 см</h4>
            <p className="formula">S = π × 5² = 25π ≈ 78.54 см²</p>
          </div>

          <div className="example">
            <h4>Пример 2: По диаметру 12 м</h4>
            <p className="formula">S = π × (12/2)² = 36π ≈ 113.10 м²</p>
          </div>

          <h3>Практическое применение</h3>

          <p>Расчет площади круга необходим в различных сферах:</p>

          <ul>
            <li>
              <strong>Строительство:</strong> расчет материалов для круглых
              конструкций
            </li>
            <li>
              <strong>Ландшафтный дизайн:</strong> планирование круглых
              элементов
            </li>
            <li>
              <strong>Производство:</strong> расчет деталей круглой формы
            </li>
            <li>
              <strong>Образование:</strong> решение геометрических задач
            </li>
          </ul>

          <h3>Расширенные расчеты</h3>

          <div className="advanced">
            <h4>Площадь кольца</h4>
            <p className="formula">S = π × (R² - r²)</p>
            <p>где R - внешний радиус, r - внутренний радиус</p>
          </div>

          <div className="advanced">
            <h4>Площадь сектора</h4>
            <p className="formula">S = (α/360) × π × r²</p>
            <p>где α - центральный угол в градусах</p>
          </div>

          <div className="notice">
            <p>
              <strong>Совет:</strong> Для точных расчетов используйте значение π
              с достаточным количеством знаков после запятой.
            </p>
          </div>

          <h3>Частые вопросы</h3>

          <div className="faq">
            <h4>Как найти площадь по длине окружности?</h4>
            <p>S = C²/(4π), где C - длина окружности</p>

            <h4>Чему равна площадь круга диаметром 1 метр?</h4>
            <p>≈ 0.7854 м² (π/4 квадратных метра)</p>

            <h4>Как рассчитать площадь полукруга?</h4>
            <p>Площадь круга разделить на 2: S = (π × r²)/2</p>
          </div>

          <p className="other-calculators">
            <a href="/">Все математические калькуляторы →</a>
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default Compound;
