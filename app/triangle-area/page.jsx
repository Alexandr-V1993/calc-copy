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
          "Калькулятор площади треугольника предлагает быстрое и точное вычисление на основе заданных сторон или высоты с основанием. Идеален для учащихся, инженеров и всех, кто нуждается в надежном расчете площади треугольника."
        }
        span={"площади треугольника"}
      >
        <CalorieForm
          vel={vel}
          selectedTab={selectedTab}
          obj={initial}
          url={"https://calcoffee.ru/api/calculate/area-triangle"}
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
          <div>
            <h2>Как рассчитать площадь треугольника?</h2>

            <p>
              Рассчитать площадь треугольника можно разными способами в
              зависимости от доступных данных. В этом руководстве мы рассмотрим
              различные методы вычисления площади треугольника, используя
              различные формулы и подходы.
            </p>

            <h2>Основные формулы для расчета площади треугольника</h2>

            <h3>1. Площадь треугольника по основанию и высоте</h3>
            <p>
              Если известны длина основания <i>b</i> и высота <i>h</i>,
              перпендикулярная к основанию, площадь треугольника можно найти по
              следующей формуле:
            </p>
            <p className="formula">
              <code>S = 1/2 &times; b &times; h</code>
            </p>
            <p>
              <strong>Пример</strong>: Если основание треугольника равно{" "}
              <strong>10</strong> см, а высота <strong>5</strong> см, то площадь
              будет:
            </p>
            <p className="formula">
              <code>S = 1/2 &times; 10 &times; 5 = 25 см²</code>
            </p>

            <h3>2. Площадь треугольника по трем сторонам (Формула Герона)</h3>
            <p>
              Когда известны все три стороны треугольника <i>a</i>, <i>b</i> и{" "}
              <i>c</i>, площадь можно найти с помощью Формулы Герона. Сначала
              вычислите полупериметр <i>p</i> :
            </p>
            <p className="formula">
              <code>p = (a + b + c) / 2</code>
            </p>
            <p>
              Затем площадь <i>S</i> можно найти по формуле:
            </p>
            <p className="formula">
              <code>
                S = √(p &times; (p - a) &times; (p - b) &times; (p - c))
              </code>
            </p>
            <p>
              <strong>Пример</strong>: Для треугольника со сторонами <i>5</i>{" "}
              см, <i>6</i> см и <i>7</i> см:
            </p>
            <p className="formula">
              <code>
                p = (5 + 6 + 7) / 2 = 9 S = √(9 &times; (9 - 5) &times; (9 - 6)
                &times; (9 - 7)) = √216 ≈ 14.7 см²
              </code>
            </p>

            <h3>
              3. Площадь треугольника по двум сторонам и углу между ними
              (Формула площади треугольника)
            </h3>
            <p>
              Если известны две стороны треугольника <i>a</i> и <i>b</i>, а
              также угол <i>&gamma;</i> между ними, то площадь можно найти по
              следующей формуле:
            </p>
            <p className="formula">
              <code>S = 1/2 &times; a &times; b &times; sin(&gamma;)</code>
            </p>
            <p>
              <strong>Пример</strong>: Если стороны треугольника равны <i>7</i>{" "}
              см и <i>8</i> см, а угол между ними <i>30°</i>:
            </p>
            <p className="formula">
              <code>
                S = 1/2 &times; 7 &times; 8 &times; sin(30°) = 1/2 &times; 7
                &times; 8 &times; 0.5 = 14 см²
              </code>
            </p>

            <h3>4. Площадь треугольника по двум углам и стороне между ними</h3>
            <p>
              Если известны два угла треугольника <i>&alpha;</i> и <i>&beta;</i>
              , и сторона <i>a</i>, противоположная углу <i>&alpha;</i>, можно
              вычислить площадь следующим образом:
            </p>
            <ol>
              <li>
                Найдите третий угол <i>&gamma;</i>:
                <p className="formula">
                  <code>&gamma; = 180° - &alpha; - &beta;</code>
                </p>
              </li>
              <li>
                Найдите оставшиеся стороны треугольника с помощью закона
                синусов:
                <p className="formula">
                  <code>
                    a / sin(&alpha;) = b / sin(&beta;) = c / sin(&gamma;)
                  </code>
                </p>
              </li>
              <li>Используйте Формулу Герона для вычисления площади.</li>
            </ol>
            <p>
              <strong>Пример</strong>: Для треугольника с углами <i>30°</i> и{" "}
              <i>60°</i>, и стороной <i>10</i> см, можно использовать закон
              синусов и формулу Герона для нахождения площади.
            </p>

            <h2>Как выбрать метод расчета площади треугольника</h2>
            <p>Выбор метода зависит от доступных данных:</p>
            <ul>
              <li>
                Если у вас есть основание и высота, используйте простую формулу:
                <p className="formula">
                  <i>S = 1/2 × b × h</i>.
                </p>
              </li>
              <li>
                Если у вас есть все три стороны, используйте Формулу Герона:
                <p className="formula">
                  <i>S = √(s × (s - a) × (s - b) × (s - c))</i>,
                </p>
                где:
                <p className="formula">
                  <i>s = (a + b + c) / 2</i>.
                </p>
              </li>
              <li>
                Если у вас есть две стороны и угол между ними, используйте
                формулу:
                <p className="formula">
                  <i>S = 1/2 × a × b × sin(γ)</i>.
                </p>
              </li>
              <li>
                Если у вас есть два угла и одна сторона, выполните следующие
                шаги:
                <ol>
                  <li>
                    Используйте закон синусов для нахождения недостающих сторон
                    треугольника:
                    <p className="formula">
                      <i>a / sin(A) = b / sin(B) = c / sin(C)</i>, где <i>A</i>,{" "}
                      <i>B</i>, и <i>C</i> — углы треугольника, а <i>a</i>,{" "}
                      <i>b</i>, и <i>c</i> — соответствующие стороны.
                    </p>
                  </li>
                  <li>
                    После нахождения всех сторон, используйте Формулу Герона для
                    вычисления площади:
                    <p className="formula">
                      <i>S = √(s × (s - a) × (s - b) × (s - c))</i>, где{" "}
                      <i>s = (a + b + c) / 2</i>.
                    </p>
                  </li>
                </ol>
              </li>
            </ul>

            <p>
              Знание различных методов расчета площади треугольника поможет вам
              выбрать наиболее подходящий способ в зависимости от доступных
              данных. Эти формулы являются основными инструментами для решения
              задач, связанных с треугольниками, и часто применяются в
              геометрии, тригонометрии и инженерии.
            </p>
            <p>
              Если у вас возникли вопросы или требуется дополнительная помощь,
              не стесняйтесь обращаться к нашим калькуляторам, которые помогут
              вам быстро и точно рассчитать площадь треугольника.
            </p>
          </div>

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
