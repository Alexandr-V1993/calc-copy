"use client";

import React, { useState, useEffect } from "react";
import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Footer from "../components/Footer";
import Contents from "../components/Contents";
import CalorieForm from "./CalorieForm";
import "./stag.css";

function Compound() {
  const [tab, setTab] = useState("long");
  const [value, setValue] = useState(""); // Длина ребра (или длина на вкладке dvh)
  const [width, setWidth] = useState(""); // Ширина
  const [height, setHeight] = useState(""); // Высота
  const [round, setRound] = useState(2);

  const initial = {
    type: tab === "long" ? "edge" : "size",
    a: value, // a берется из значения длины
    b: tab === "long" ? value : width, // b берется из значения длины на вкладке long, иначе из ширины
    c: tab === "long" ? value : height, // c берется из значения длины на вкладке long, иначе из высоты
  };

  const handleTabClick = (tabType) => {
    setTab(tabType);
    if (tabType === "dvh") {
      setValue(""); // Сбрасываем значение длины, если переключаемся на вкладку dvh
    }
  };

  useEffect(() => {
    if (tab === "dvh") {
      setValue(""); // Сбрасываем значение длины на вкладке dvh
    }
  }, [tab]);

  return (
    <>
      <HeaderModal />
      <TopForm
        title={"Калькулятор "}
        description={
          "Калькулятор объема куба — это простой и эффективный инструмент, который позволяет мгновенно вычислить объем куба с помощью всего лишь нескольких вводимых значений."
        }
        span={"объема куба"}
      >
        <CalorieForm
          obj={initial}
          url={"https://calcoffee.ru/api/calculate/volume-cube"}
        >
          <div className="test-input">
            <div className="cube-image-container">
              <img src="/cube2.png" alt="куб" className="cube-image" />
              <span className="w-grey">
                <span className="red"> a</span> - ребро куба,{" "}
                <span className="red">d</span> - диагональ куба,{" "}
                <span className="red">f</span> - диагональ грани
              </span>
            </div>
            <div className="tabs">
              <div className="centered-text">
                <span className="color-grey">Известная величина</span>
              </div>
              <span
                className={tab === "long" ? "active underline" : ""}
                onClick={() => handleTabClick("long")}
              >
                Длина ребра
              </span>
              <span
                className={tab === "dvh" ? "active underline" : ""}
                onClick={() => handleTabClick("dvh")}
              >
                ДxШxВ
              </span>
            </div>

            <div className="content">
              {tab === "long" && (
                <div className="radius">
                  <label className="numrange">
                    <span>
                      Длина ребра,<span className="red"> a</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      value={value}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        setValue(inputValue);
                        setWidth(inputValue); // Дублируем значение в ширину
                        setHeight(inputValue); // Дублируем значение в высоту
                      }}
                    />
                  </label>

                  <label className="numrange">
                    <span>Округлять до</span>
                    <select
                      name="round"
                      className="calc-inp"
                      id="round"
                      value={round}
                      onChange={(e) => setRound(e.target.value)}
                    >
                      {[...Array(11).keys()].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              )}
              {tab === "dvh" && (
                <div className="radius">
                  <span>
                    <span className="w-grey"> Размеры,</span>
                    <span className="red"> (ДxШxВ)</span>
                  </span>
                  <label className="numrange">
                    <span>Длина</span>
                    <input
                      type="number"
                      className="input"
                      value={value} // Здесь длина будет связана со значением
                      onChange={(e) => setValue(e.target.value)} // Длина будет изменяться
                    />
                  </label>
                  <label className="numrange">
                    <span>Ширина</span>
                    <input
                      type="number"
                      className="input"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)} // Ширина сохраняется отдельно
                    />
                  </label>
                  <label className="numrange">
                    <span>Высота</span>
                    <input
                      type="number"
                      className="input"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)} // Высота сохраняется отдельно
                    />
                  </label>
                  <label className="numrange">
                    <span>Округлять до</span>
                    <select
                      name="round"
                      className="calc-inp"
                      id="round"
                      value={round}
                      onChange={(e) => setRound(e.target.value)}
                    >
                      {[...Array(11).keys()].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              )}
            </div>
          </div>
        </CalorieForm>
        <Contents>
          <div>
            <h2>Калькулятор объема куба</h2>
            <p>
              Куб — это геометрическая фигура, состоящая из шести квадратных
              граней, каждая из которых равна друг другу. Все углы куба —
              прямые, а длина всех рёбер одинакова. Объём куба — это количество
              пространства, которое занимает куб, и его можно рассчитать с
              помощью простых формул.
            </p>
            <h3>Формула объема куба</h3>
            <p>
              Основная формула для расчета объема куба выглядит следующим
              образом:
            </p>
            <p className="formula">V = a³</p>
            Где:
            <ul>
              <li>V — это объём куба,</li>
              <li>a — длина ребра куба.</li>
            </ul>
            <h3>Пример расчета объема куба</h3>
            <p>
              Давайте рассмотрим пример. Допустим, у нас есть куб с длиной ребра
              5 см. Чтобы вычислить его объём, мы подставим значение в формулу:
            </p>
            <p className="formula">V = 5³ = 5 * 5 * 5 = 125 см³</p>
            <p>
              Таким образом, объем куба с длиной ребра 5 см равен 125 кубических
              сантиметров.
            </p>
            <h3>Калькулятор объема куба с произвольной длиной ребра</h3>
            <p>
              Используя калькулятор объема куба, вы можете легко рассчитать
              объём, введя длину ребра. Например, если длина ребра вашего куба
              составляет 10 см, вы можете использовать ту же формулу для
              вычисления:
            </p>
            <p className="formula">V = 10³ = 10 * 10 * 10 = 1000 см³</p>
            <p>
              Калькулятор объема куба автоматически выполнит расчеты за вас и
              выведет результат. Это особенно удобно при работе с большими
              значениями, когда ручной расчет может занять много времени.
            </p>
            <h3>Другие способы расчета объема</h3>
            <p>
              Иногда вам может понадобиться рассчитать объем куба на основе его
              площади. Площадь поверхности куба можно рассчитать с помощью
              формулы:
            </p>
            <p className="formula">S = 6 * a²</p>
            Где:
            <ul>
              <li>S — это площадь поверхности куба,</li>
              <li>a — длина ребра куба.</li>
            </ul>
            <p>
              Если вы знаете площадь поверхности куба, вы можете вычислить длину
              его ребра, а затем найти объем. Формула для длины ребра через
              площадь поверхности выглядит так:
            </p>
            <p className="formula">a = √(S / 6)</p>
            <p>
              После нахождения длины ребра вы можете подставить её в основную
              формулу для расчета объема куба.
            </p>
            <h3>Пример расчета через площадь поверхности</h3>
            <p>
              Допустим, площадь поверхности куба равна 150 см². Чтобы найти
              длину ребра, мы используем формулу:
            </p>
            <p className="formula">a = √(150 / 6) = √25 = 5 см</p>
            <p>Теперь мы можем рассчитать объём:</p>
            <p className="formula">V = 5³ = 125 см³</p>
            <h3>Заключение</h3>
            <p>
              Калькулятор объема куба — это простой и удобный инструмент,
              который помогает быстро определить объём куба на основе длины его
              ребра или площади поверхности. Все вычисления выполняются по
              стандартным геометрическим формулам, что гарантирует точность
              результата. Независимо от того, используете ли вы калькулятор для
              учебных целей или для реальных задач, этот инструмент значительно
              упростит процесс вычислений.
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
