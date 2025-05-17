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
          "Калькулятор для расчета площади поверхности трубы — это эффективный инструмент, который позволяет быстро и точно определить площадь поверхности трубы. Это особенно важно при планировании и подборе нужных материалов."
        }
        span={"трубы"}
      >
        <CalorieForm
          obj={initial}
          url={"https://calcoffee.ru/api/calculate/area-cylinder"}
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
                    <span>
                      Длина, <span className="red"> L</span>
                    </span>
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
                    <span>
                      Длина, <span className="red"> L</span>
                    </span>
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
          <h2>Расчет Площади Трубы: Формулы, Примеры и Пояснения</h2>

          <p>
            Труба — это цилиндрический объект с внутренним и внешним радиусами.
            Рассчитать площадь поверхности трубы важно в строительстве и
            производстве, чтобы определить количество необходимых материалов.
          </p>

          <h3>Основные Элементы Трубы</h3>
          <p>
            Прежде чем перейти к формулам, разберемся с основными элементами
            трубы:
          </p>
          <ul>
            <li>
              <strong>
                Внутренний радиус (r<sub>вн</sub>):
              </strong>{" "}
              Радиус внутренней поверхности трубы.
            </li>
            <li>
              <strong>
                Внешний радиус (r<sub>вн</sub>):
              </strong>{" "}
              Радиус внешней поверхности трубы.
            </li>
            <li>
              <strong>Высота (h):</strong> Длина трубы.
            </li>
          </ul>

          <h3>Формулы для Вычисления Площади Трубы</h3>
          <p>Площадь поверхности трубы можно разделить на два компонента:</p>

          <h4>
            Площадь внешней поверхности (S<sub>внеш</sub>)
          </h4>
          <p>Площадь внешней поверхности рассчитывается по формуле:</p>
          <p className="formula">
            S<sub>внеш</sub> = 2πr<sub>вн</sub>h
          </p>
          <p>где:</p>
          <ul>
            <li>
              r<sub>вн</sub> — внешний радиус трубы,
            </li>
            <li>h — высота трубы.</li>
          </ul>

          <h4>
            Площадь внутренней поверхности (S<sub>внутр</sub>)
          </h4>
          <p>Площадь внутренней поверхности рассчитывается аналогично:</p>
          <p className="formula">
            S<sub>внутр</sub> = 2πr<sub>вн</sub>h
          </p>
          <p>где:</p>
          <ul>
            <li>
              r<sub>вн</sub> — внутренний радиус трубы,
            </li>
            <li>h — высота трубы.</li>
          </ul>

          <h4>
            Полная площадь поверхности (S<sub>общ</sub>)
          </h4>
          <p>
            Полная площадь поверхности трубы включает внутреннюю и внешнюю
            поверхности, а также площади кругов на концах:
          </p>
          <p className="formula">
            S<sub>общ</sub> = 2πr<sub>вн</sub>h + 2πr<sub>вн</sub>h + 2π(r
            <sub>вн</sub>
            <sup>2</sup> - r<sub>вн</sub>
            <sup>2</sup>)
          </p>

          <h3>Пример Расчета</h3>
          <p>
            Допустим, у нас есть труба с внутренним радиусом 3 м, внешним
            радиусом 4 м и высотой 10 м. Используем формулы выше, чтобы
            рассчитать площадь поверхности:
          </p>

          <p className="example">
            S<sub>внеш</sub> = 2 * π * 4 * 10 = 251.33 м²
          </p>
          <p className="example">
            S<sub>внутр</sub> = 2 * π * 3 * 10 = 188.4 м²
          </p>
          <p className="example">
            S<sub>общ</sub> = 251.33 + 188.4 = 439.73 м²
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
