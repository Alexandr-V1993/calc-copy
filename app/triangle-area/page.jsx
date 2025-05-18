"use client";

import React, { useState, useEffect } from "react";

import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";

import CalorieForm from "./CalorieForm";
import "./stag.css";

function Compound() {
  const [vel, setVel] = useState("м");
  const [selectedTab, setSelectedTab] = useState("tab1");
  const [initial, setInitial] = useState({});

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    switch (selectedTab) {
      case "tab1":
        setInitial({
          b: "",
          h: "",
          type: "base_height",
          round: 3,
        });
        break;
      case "tab2":
        setInitial({
          a: "",
          b: "",
          c: "",
          type: "sss",
          round: 3,
        });
        break;
      case "tab3":
        setInitial({
          a: "",
          angleY: "",
          b: "",
          round: 3,
          type: "sas",
        });
        break;
      case "tab4":
        setInitial({
          angleB: "",
          a: "",
          angleY: "",
          round: 3,
          type: "asa",
        });
        break;
      default:
        setInitial({});
    }
  }, [selectedTab]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInitial((prevState) => ({
      ...prevState,
      [name]: Number(value),
    }));
  };

  const handleRoundChange = (e) => {
    setInitial((prevState) => ({
      ...prevState,
      round: Number(e.target.value),
    }));
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор"}
        description={
          "Точный расчет площади треугольника различными методами: через основание и высоту, по трем сторонам (формула Герона), через две стороны и угол между ними."
        }
        span={"площади треугольника"}
      >
        <CalorieForm
          vel={vel}
          selectedTab={selectedTab}
          obj={initial}
          url={"https://boxcalculators.ru/api/calculate/area-triangle"}
        >
          <div className="test-input">
            <div className="tabs">
              <div className="flex-row">
                <div className="centre-flex">
                  <span>Известная величина</span>
                </div>
                <div className="right-all-gap">
                  <span className="row-span">
                    {" "}
                    <span
                      className={selectedTab === "tab1" ? "active" : "noact"}
                      onClick={() => handleTabClick("tab1")}
                    >
                      Основание и высота
                    </span>
                    <span
                      className={selectedTab === "tab2" ? "active" : "noact"}
                      onClick={() => handleTabClick("tab2")}
                    >
                      Три стороны
                    </span>
                  </span>
                  <span className="row-span">
                    {" "}
                    <span
                      className={selectedTab === "tab3" ? "active" : "noact"}
                      onClick={() => handleTabClick("tab3")}
                    >
                      Две стороны + угол между
                    </span>
                    <span
                      className={selectedTab === "tab4" ? "active" : "noact"}
                      onClick={() => handleTabClick("tab4")}
                    >
                      Два угла + сторона между
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="content">
              {selectedTab === "tab1" && (
                <>
                  <label className="numrange">
                    <span>
                      Основание,
                      <span className="red"> b</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      name="b"
                      value={initial.b || ""}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="numrange">
                    <span>
                      Высота, <span className="red">h</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      name="h"
                      value={initial.h || ""}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </>
              )}
              {selectedTab === "tab2" && (
                <>
                  <label className="numrange">
                    <span>
                      Сторона, <span className="red">a</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      name="a"
                      value={initial.a || ""}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="numrange">
                    <span>
                      Сторона, <span className="red">b</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      name="b"
                      value={initial.b || ""}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="numrange">
                    <span>
                      Сторона, <span className="red">c</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      name="c"
                      value={initial.c || ""}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </>
              )}
              {selectedTab === "tab3" && (
                <>
                  <label className="numrange">
                    <span>
                      Сторона <span className="red">a</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      name="a"
                      value={initial.a || ""}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="numrange">
                    <span>
                      Угол <span className="red">γ</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      name="angleY"
                      value={initial.angleY || ""}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="numrange">
                    <span>
                      Сторона <span className="red">b</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      name="b"
                      value={initial.b || ""}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </>
              )}
              {selectedTab === "tab4" && (
                <>
                  <label className="numrange">
                    <span>
                      Угол <span className="red">β</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      name="angleB"
                      value={initial.angleB || ""}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="numrange">
                    <span>
                      Сторона <span className="red">a</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      name="a"
                      value={initial.a || ""}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="numrange">
                    <span>
                      Угол <span className="red">γ</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      name="angleY"
                      value={initial.angleY || ""}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </>
              )}
              <label className="numrange">
                <span>Округлять до (знаков после запятой)</span>
                <select
                  name="round"
                  className="calc-inp"
                  value={initial.round || 3}
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
                  value={vel}
                  onChange={(e) => setVel(e.target.value)}
                >
                  <option value="м">м</option>
                  <option value="см">см</option>
                  <option value="мм">мм</option>
                </select>
              </label>
            </div>
          </div>
        </CalorieForm>
        <Contents>
          <h2>Все методы расчета площади треугольников</h2>

          <p>
            Наш калькулятор позволяет вычислить площадь треугольника различными
            способами в зависимости от известных параметров фигуры.
          </p>

          <div className="features">
            <h3>Основные методы расчета:</h3>
            <ul>
              <li>По основанию и высоте</li>
              <li>По трем сторонам (формула Герона)</li>
              <li>По двум сторонам и углу между ними</li>
              <li>По координатам вершин</li>
              <li>Для прямоугольных треугольников</li>
            </ul>
          </div>

          <h3>1. Расчет по основанию и высоте</h3>

          <p>
            Самый простой способ, если известны длина основания (b) и высота
            (h):
          </p>
          <p className="formula">S = ½ × b × h</p>

          <div className="example">
            <h4>Пример:</h4>
            <p>Основание = 8 см, высота = 5 см</p>
            <p className="formula">S = ½ × 8 × 5 = 20 см²</p>
          </div>

          <h3>2. Формула Герона (по трем сторонам)</h3>

          <p>Для расчета по сторонам a, b и c:</p>
          <ol>
            <li>Вычислите полупериметр: p = (a + b + c)/2</li>
            <li>Примените формулу Герона:</li>
          </ol>
          <p className="formula">S = √[p × (p - a) × (p - b) × (p - c)]</p>

          <div className="example">
            <h4>Пример:</h4>
            <p>Стороны: 5 см, 6 см, 7 см</p>
            <p className="formula">
              p = (5+6+7)/2 = 9<br />S = √[9 × (9-5) × (9-6) × (9-7)] = √216 ≈
              14.7 см²
            </p>
          </div>

          <h3>3. По двум сторонам и углу между ними</h3>

          <p>Если известны стороны a, b и угол γ между ними:</p>
          <p className="formula">S = ½ × a × b × sin(γ)</p>

          <div className="example">
            <h4>Пример:</h4>
            <p>Стороны: 7 см и 8 см, угол 30°</p>
            <p className="formula">
              S = ½ × 7 × 8 × sin(30°) = ½ × 7 × 8 × 0.5 = 14 см²
            </p>
          </div>

          <h3>Практическое применение</h3>

          <p>Расчет площади треугольника используется в:</p>

          <ul>
            <li>
              <strong>Строительстве:</strong> расчет материалов для треугольных
              конструкций
            </li>
            <li>
              <strong>Геодезии:</strong> измерение земельных участков
            </li>
            <li>
              <strong>Дизайне:</strong> создание треугольных элементов
            </li>
            <li>
              <strong>Образовании:</strong> решение геометрических задач
            </li>
          </ul>

          <div className="notice">
            <p>
              <strong>Важно:</strong> При использовании формулы Герона
              убедитесь, что заданные стороны могут образовать треугольник
              (сумма любых двух сторон должна быть больше третьей).
            </p>
          </div>

          <h3>Частые вопросы</h3>

          <div className="faq">
            <h4>Как найти площадь прямоугольного треугольника?</h4>
            <p>S = ½ × a × b, где a и b - катеты</p>

            <h4>Как рассчитать площадь по координатам вершин?</h4>
            <p>
              Используйте формулу: S = ½|(x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂))|
            </p>

            <h4>Можно ли вычислить площадь только по углам?</h4>
            <p>Нет, нужна хотя бы одна сторона для определения масштаба</p>
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
