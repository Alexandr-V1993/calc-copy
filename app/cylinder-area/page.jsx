"use client";
import React, { useState } from "react";

import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Footer from "../components/Footer";
import Contents from "../components/Contents";
import CalorieForm from "./CalorieForm";
import "./stag.css";

function Compound() {
  const [type, settype] = useState("radius");
  const [value, setvalue] = useState("");
  const [height, setheight] = useState("");
  const [round, setround] = useState(2);
  const [tab, setTab] = useState("radius");

  const handleTabClick = (tabType) => {
    setTab(tabType);
    settype(tabType);
  };

  const initial = {
    type: type,
    value: value,
    height: height,
    round: round,
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор площади "}
        description={
          "Точный расчет площади поверхности цилиндра: боковой, оснований и полной. Формулы с объяснениями и практические примеры вычислений."
        }
        span={"поверхности цилиндра"}
      >
        <CalorieForm
          obj={initial}
          url={"https://boxcalculators.ru/api/calculate/area-cylinder"}
        >
          <div className="test-input">
            <div className="tabs">
              <div>
                <span className="color-grey">Известная величина</span>
              </div>
              <span
                className={tab === "radius" ? "active underline" : ""}
                onClick={() => handleTabClick("radius")}
              >
                Радиус
              </span>
              <span
                className={tab === "diameter" ? "active underline" : ""}
                onClick={() => handleTabClick("diameter")}
              >
                Диаметр
              </span>
            </div>

            <div className="content">
              {tab === "radius" && (
                <div className="radius">
                  <label className="numrange">
                    <span>
                      Радиус,<span className="red"> r</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      value={value}
                      onChange={(e) => setvalue(e.target.value)}
                    />
                  </label>
                  <label className="numrange">
                    <span>Высота</span>
                    <input
                      type="number"
                      className="input"
                      required
                      value={height}
                      onChange={(e) => setheight(e.target.value)}
                    />
                  </label>
                  <label className="numrange">
                    <span>Округлять до</span>
                    <select
                      name="round"
                      className="calc-inp"
                      id="round"
                      onChange={(e) => setround(e.target.value)}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option selected value="2">
                        2
                      </option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </label>
                  <label className="numrange">
                    <span>Единица измерения</span>
                    <select name="unit" className="calc-inp" id="unit">
                      <option value="м">м</option>
                      <option value="см">см</option>
                      <option value="мм">мм</option>
                    </select>
                  </label>
                </div>
              )}
              {tab === "diameter" && (
                <div className="radius">
                  <label className="numrange">
                    <span>
                      Диаметр,<span className="red"> d</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      value={value}
                      onChange={(e) => setvalue(e.target.value)}
                    />
                  </label>
                  <label className="numrange">
                    <span>Высота</span>
                    <input
                      type="number"
                      className="input"
                      required
                      value={height}
                      onChange={(e) => setheight(e.target.value)}
                    />
                  </label>
                  <label className="numrange">
                    <span>Округлять до</span>
                    <select
                      name="round"
                      className="calc-inp"
                      id="round"
                      onChange={(e) => setround(e.target.value)}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option selected value="2">
                        2
                      </option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </label>
                  <label className="numrange">
                    <span>Единица измерения</span>
                    <select name="unit" className="calc-inp" id="unit">
                      <option value="м">м</option>
                      <option value="см">см</option>
                      <option value="мм">мм</option>
                    </select>
                  </label>
                </div>
              )}
            </div>
          </div>
        </CalorieForm>
        <Contents>
          <h1>Калькулятор площади цилиндра</h1>

          <h2>Полный расчет поверхности цилиндра</h2>

          <p>
            Наш калькулятор позволяет точно вычислить все параметры поверхности
            цилиндра: боковую площадь, площадь оснований и полную площадь
            поверхности.
          </p>

          <div className="features">
            <h3>Основные расчеты:</h3>
            <ul>
              <li>Боковая площадь поверхности</li>
              <li>Площадь одного основания</li>
              <li>Полная площадь поверхности</li>
              <li>Расчет через радиус и высоту</li>
              <li>Примеры практических вычислений</li>
            </ul>
          </div>

          <h3>Основные формулы расчета</h3>

          <div className="formula-block">
            <h4>Боковая площадь поверхности:</h4>
            <p className="formula">
              S<sub>бок</sub> = 2πrh
            </p>
            <p>где r - радиус основания, h - высота цилиндра</p>
          </div>

          <div className="formula-block">
            <h4>Площадь одного основания:</h4>
            <p className="formula">
              S<sub>осн</sub> = πr²
            </p>
          </div>

          <div className="formula-block">
            <h4>Полная площадь поверхности:</h4>
            <p className="formula">
              S<sub>полн</sub> = 2πr(h + r)
            </p>
          </div>

          <h3>Примеры расчетов</h3>

          <div className="example">
            <h4>Пример 1: Цилиндр с r = 3 см, h = 8 см</h4>
            <p className="formula">
              S<sub>бок</sub> = 2π × 3 × 8 = 48π ≈ 150.8 см²
              <br />S<sub>осн</sub> = π × 3² = 9π ≈ 28.27 см²
              <br />S<sub>полн</sub> = 2π × 3 × (8 + 3) = 66π ≈ 207.35 см²
            </p>
          </div>

          <div className="example">
            <h4>Пример 2: Цилиндр с d = 10 м, h = 6 м</h4>
            <p className="formula">
              r = d/2 = 5 м<br />S<sub>бок</sub> = 2π × 5 × 6 = 60π ≈ 188.5 м²
              <br />S<sub>осн</sub> = π × 5² = 25π ≈ 78.54 м²
              <br />S<sub>полн</sub> = 2π × 5 × (6 + 5) = 110π ≈ 345.58 м²
            </p>
          </div>

          <h3>Практическое применение</h3>

          <p>Расчет площади цилиндра необходим в различных сферах:</p>

          <ul>
            <li>
              <strong>Производство:</strong> расчет материалов для труб, баков,
              цилиндрических емкостей
            </li>
            <li>
              <strong>Строительство:</strong> определение площади поверхностей
              колонн, резервуаров
            </li>
            <li>
              <strong>Дизайн:</strong> создание цилиндрических элементов
              интерьера
            </li>
            <li>
              <strong>Образование:</strong> решение геометрических задач
            </li>
          </ul>

          <div className="notice">
            <p>
              <strong>Важно:</strong> При расчетах в реальных проектах
              учитывайте толщину материала и технологические припуски.
            </p>
          </div>

          <h3>Частые вопросы</h3>

          <div className="faq">
            <h4>
              Как найти площадь открытого цилиндра (без одного основания)?
            </h4>
            <p>S = πr² + 2πrh (одно основание + боковая поверхность)</p>

            <h4>Как рассчитать площадь через диаметр?</h4>
            <p>Используйте r = d/2 в стандартных формулах</p>

            <h4>Как найти высоту, если известна площадь и радиус?</h4>
            <p>
              h = (S<sub>полн</sub> - 2πr²)/(2πr)
            </p>
          </div>

          <p className="other-calculators">
            <a href="/">Все геометрические калькуляторы →</a>
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default Compound;
